import { Locator, Page } from "@playwright/test";
import { Header } from "./Header";
import { expect } from "../fixtures/page-fixture";

export class CheckoutCompletePage {
  readonly page: Page;
  readonly header: Header;
  readonly thankYouHeader: Locator;
  readonly backHomeButton: Locator;
  readonly generatePDFButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.thankYouHeader = page.getByTestId("complete-header");
    this.backHomeButton = page.getByTestId("back-to-products");
    this.generatePDFButton = page.getByTestId("generate-pdf-order");
  }

  async backHome() {
    await this.backHomeButton.click();
  }

  async generatePDF() {
    await this.generatePDFButton.click();
  }

  async verifyCheckoutComplete() {
    await expect(this.thankYouHeader).toHaveText("Thank you for your order!");
  }
}
