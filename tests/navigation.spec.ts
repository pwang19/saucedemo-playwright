import { expect, test } from "../fixtures/auth-fixture";

test("able to navigate to about page", async ({ inventoryPage }) => {
  await inventoryPage.sidebar.openMenu();
  await inventoryPage.sidebar.clickAboutLink();
  await expect(inventoryPage.page).toHaveURL(/saucelabs.com/);
});

test.describe("lazy load catalog", () => {
  test.beforeEach(async ({ inventoryPage, catalogLazyLoadPage }) => {
    await inventoryPage.sidebar.openMenu();
    await inventoryPage.sidebar.clickDynamicLoadingLink();
    await inventoryPage.sidebar.gotoLazyLoaded();
    await expect(catalogLazyLoadPage.page).toHaveURL(
      /dynamic-catalog-lazy-load.html/,
    );
    await expect(catalogLazyLoadPage.lazyLoadContainer).toBeVisible();
  });

  test("able to load more items when scrolling to the bottom", async ({
    catalogLazyLoadPage,
  }) => {
    const before = await catalogLazyLoadPage.items.count();
    expect(before).toBeGreaterThanOrEqual(6);

    await catalogLazyLoadPage.loadMoreItems();
    const after = await catalogLazyLoadPage.items.count();
    await expect
      .poll(() => catalogLazyLoadPage.items.count())
      .toBeGreaterThan(before);
  });

  test("off-screen item shows placeholder until scrolled into view", async ({
    catalogLazyLoadPage,
  }) => {
    //placeholder
  });

  test("items cycle through the catalog", async ({ catalogLazyLoadPage }) => {
    //placeholder
  });
});
