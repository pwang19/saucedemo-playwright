import { Locator, Page } from "@playwright/test";
import { Header } from "./Header";

export class CartPage {
  readonly page: Page;
  readonly header: Header;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.cartItems = page.getByTestId("inventory-item");
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.continueShoppingButton = page.getByRole("button", {
      name: "Continue Shopping",
    });
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async removeItemFromCartByName(productName: string) {
    const itemCard = this.cartItems.filter({ hasText: productName });
    await itemCard.getByRole("button", { name: "Remove" }).click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}
