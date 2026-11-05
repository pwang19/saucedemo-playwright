import { Locator, Page } from "@playwright/test";

export class Footer {
  readonly page: Page;
  readonly twitterLink: Locator;
  readonly facebookLink: Locator;
  readonly linkedinLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.twitterLink = page.getByRole("link", { name: "Twitter" });
    this.facebookLink = page.getByRole("link", { name: "Facebook" });
    this.linkedinLink = page.getByRole("link", { name: "LinkedIn" });
  }

  async clickTwitter() {
    await this.twitterLink.click();
  }

  async clickFacebook() {
    await this.facebookLink.click();
  }

  async clickLinkedIn() {
    await this.linkedinLink.click();
  }
}
