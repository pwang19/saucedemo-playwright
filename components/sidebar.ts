import { Page, Locator } from "@playwright/test";

export class Sidebar {
  readonly page: Page;
  readonly openMenuButton: Locator;
  readonly closeButton: Locator;
  readonly allItemsLink: Locator;
  readonly aboutLink: Locator;
  readonly logoutLink: Locator;
  readonly resetAppStateLink: Locator;
  readonly dynamicLinks: Locator;
  readonly lazyLoadedLink: Locator;
  readonly spinnerLink: Locator;
  readonly sliderLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openMenuButton = page.getByRole("button", { name: "Open Menu" });
    this.closeButton = page.getByRole("button", { name: "Close Menu" });
    this.allItemsLink = page.getByRole("button", { name: "All Items" });
    this.aboutLink = page.getByRole("link", { name: "About" });
    this.logoutLink = page.getByRole("link", { name: "Logout" });
    this.resetAppStateLink = page.getByRole("link", {
      name: "Reset App State",
    });
    this.dynamicLinks = page.getByRole("button", { name: "Dynamic Catalog" });
    this.lazyLoadedLink = page.getByRole("button", { name: "Lazy Load" });
    this.spinnerLink = page.getByRole("button", { name: "Spinner" });
    this.sliderLink = page.getByRole("button", { name: "Slider" });
  }
  async openMenu() {
    await this.openMenuButton.click();
  }

  async close() {
    await this.closeButton.click();
  }

  async goToAllItems() {
    await this.allItemsLink.click();
  }

  async goToAbout() {
    await this.aboutLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }

  async resetAppState() {
    await this.resetAppStateLink.click();
  }

  async clickDynamicLoadingLink() {
    await this.dynamicLinks.click();
  }

  async gotoLazyLoaded() {
    await this.lazyLoadedLink.click();
  }

  async goToSpinner() {
    await this.spinnerLink.click();
  }

  async goToSlider() {
    await this.sliderLink.click();
  }

  async clickAboutLink() {
    await this.aboutLink.click();
  }
}
