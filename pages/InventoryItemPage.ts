import { Header } from "../components/header";
import { Locator, Page } from "@playwright/test";

export class InventoryItemPage {
  readonly page: Page;
  readonly header: Header;
  readonly addToCartButton: Locator;
  readonly removeFromCartButton: Locator;
  readonly backToProductsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.addToCartButton = page.getByRole("button", { name: "Add to cart" });
    this.backToProductsButton = page.getByRole("button", {
      name: "Back to products",
    });
    this.removeFromCartButton = page.getByRole("button", { name: "Remove" });
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async removeFromCart() {
    await this.removeFromCartButton.click();
  }

  async backToProducts() {
    await this.backToProductsButton.click();
  }
}
