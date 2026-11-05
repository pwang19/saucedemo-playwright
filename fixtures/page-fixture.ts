import { test as base } from "@playwright/test";
import { CheckoutInfoPage } from "../pages/CheckoutInfoPage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { CartPage } from "../pages/CartPage";
import { InventoryPage } from "../pages/InventoryPage";
import { InventoryItemPage } from "../pages/InventoryItemPage";
import { LoginPage } from "../pages/LoginPage";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";
import { CatalogLazyLoadPage } from "../pages/CatalogLazyLoadPage";

type PageFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  inventoryItemPage: InventoryItemPage;
  cartPage: CartPage;
  checkoutInfoPage: CheckoutInfoPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutCompletePage: CheckoutCompletePage;
  catalogLazyLoadPage: CatalogLazyLoadPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutInfoPage: async ({ page }, use) => {
    await use(new CheckoutInfoPage(page));
  },
  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
  inventoryItemPage: async ({ page }, use) => {
    await use(new InventoryItemPage(page));
  },
  catalogLazyLoadPage: async ({ page }, use) => {
    await use(new CatalogLazyLoadPage(page));
  },
});

export { expect } from "@playwright/test";
