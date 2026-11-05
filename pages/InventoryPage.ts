import { Locator, Page } from "@playwright/test";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Sidebar } from "../components/sidebar";

export class InventoryPage {
  readonly page: Page;
  readonly header: Header;
  readonly inventoryItems: Locator;
  readonly sortSelect: Locator;
  readonly footer: Footer;
  readonly sidebar: Sidebar;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.sidebar = new Sidebar(page);
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

  async gotoItemDetailsByPicture(productName: string) {
    const itemCard = this.inventoryItems.filter({ hasText: productName });
    await itemCard
      .getByRole("button", { name: "View details for " + productName })
      .filter({ has: this.page.getByRole("img") })
      .click();
  }

  async gotoItemDetailsByName(productName: string) {
    const itemCard = this.inventoryItems.filter({ hasText: productName });
    await itemCard
      .getByRole("button", { name: "View details for " + productName })
      .filter({ hasNot: this.page.getByRole("img") })
      .click();
  }
}
