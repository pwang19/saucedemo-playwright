import { expect, test } from "../fixtures/auth-fixture";

test(
  "able to add to cart and checkout multiple items",
  { tag: "@smoke" },
  async ({
    inventoryPage,
    cartPage,
    checkoutInfoPage,
    checkoutOverviewPage,
    checkoutCompletePage,
  }) => {
    // Add two items to the cart and go to the cart page
    await inventoryPage.addItemToCartByName("Sauce Labs Backpack"); // $29.99
    await inventoryPage.addItemToCartByName("Sauce Labs Bike Light"); // $9.99
    await inventoryPage.header.goToCart();

    // Fill out checkout information and submit
    await cartPage.checkout();
    await checkoutInfoPage.fillInfoAndSubmit("John", "Doe", "12345");

    // Verify the checkout overview page displays the correct totals
    await expect(checkoutOverviewPage.subtotalLabel).toHaveText(
      "Item total: $39.98",
    );
    await expect(checkoutOverviewPage.taxLabel).toHaveText("Tax: $3.20");
    await expect(checkoutOverviewPage.totalLabel).toHaveText("Total: $43.18");

    await checkoutOverviewPage.finish();

    await checkoutCompletePage.verifyCheckoutComplete();
  },
);
