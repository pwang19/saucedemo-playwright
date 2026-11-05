import { Locator, Page } from "@playwright/test";

export class Header {
  readonly page: Page;
  readonly root: Locator;
  readonly menuButton: Locator;
  readonly shoppingCartLink: Locator;
  readonly cartBadge: Locator;
  readonly logoutButton: Locator;
  readonly resetAppStateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.root = page.getByTestId("primary-header");
    this.menuButton = this.root.getByRole("button", { name: "Open Menu" });
    this.shoppingCartLink = this.root.getByTestId("shopping-cart-link");
    this.cartBadge = this.root.getByTestId("shopping-cart-badge");
    this.logoutButton = page.getByRole("button", { name: "Logout" });
    this.resetAppStateButton = page.getByRole("button", {
      name: "Reset App State",
    });
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutButton.click();
  }

  async resetAppState() {
    await this.menuButton.click();
    await this.resetAppStateButton.click();
  }
}
