import { Locator, Page } from "@playwright/test";
import { Header } from "./Header";

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly header: Header;
  readonly cartItems: Locator;
  readonly subtotalLabel: Locator;
  readonly taxLabel: Locator;
  readonly totalLabel: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.cartItems = page.getByTestId("inventory-item");
    this.subtotalLabel = page.getByTestId("subtotal-label");
    this.taxLabel = page.getByTestId("tax-label");
    this.totalLabel = page.getByTestId("total-label");
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.finishButton = page.getByRole("button", { name: "Finish" });
  }

  async cancel() {
    await this.cancelButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}
