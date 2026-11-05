import { Locator, Page } from "@playwright/test";
import { Header } from "./Header";

export class InventoryPage {
  readonly page: Page;
  readonly header: Header;
  readonly inventoryItems: Locator;
  readonly sortSelect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.inventoryItems = page.getByTestId("inventory-item");
    this.sortSelect = page.getByRole("combobox", { name: "Sort Products" });
  }

  async addItemToCartByName(productName: string) {
    const itemCard = this.inventoryItems.filter({ hasText: productName });
    await itemCard.getByRole("button", { name: "Add To Cart" }).click();
  }

  async removeItemFromCartByName(productName: string) {
    const itemCard = this.inventoryItems.filter({ hasText: productName });
    await itemCard.getByRole("button", { name: "Remove" }).click();
  }

  async sortBy(option: string) {
    await this.sortSelect.selectOption({ label: option });
  }
}
