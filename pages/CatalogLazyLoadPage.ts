import { Page, Locator } from "@playwright/test";

export class CatalogLazyLoadPage {
  readonly page: Page;
  readonly lazyLoadContainer: Locator;
  readonly items: Locator;
  readonly sentinel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lazyLoadContainer = page.getByTestId(
      "dynamic-catalog-lazy-load-container",
    );
    this.items = this.lazyLoadContainer.locator(":scope > div");
    this.sentinel = page.getByTestId("dynamic-catalog-lazy-load-sentinel");
  }

  item(index: number) {
    const id = `lazy-load-item-${index}`;
    return {
      root: this.page.getByTestId(id),
      name: this.page.getByTestId(`${id}-name`),
      price: this.page.getByTestId(`${id}-price`),
      placeholder: this.page.getByTestId(`${id}-placeholder`),
    };
  }

  async loadMoreItems() {
    await this.sentinel.scrollIntoViewIfNeeded();
  }
}
