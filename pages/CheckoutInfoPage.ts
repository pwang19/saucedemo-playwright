import { Locator, Page } from "@playwright/test";
import { Header } from "../components/header";

export class CheckoutInfoPage {
  readonly page: Page;
  readonly header: Header;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
    this.firstNameInput = page.getByTestId("firstName");
    this.lastNameInput = page.getByTestId("lastName");
    this.postalCodeInput = page.getByTestId("postalCode");
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
  }

  async fillInfoAndSubmit(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }
}
