import { test, expect } from "../fixtures/auth-fixture";

test("able to add then delete item to the cart", async ({ inventoryPage }) => {
  await expect(inventoryPage.header.cartBadge).toBeHidden();

  await inventoryPage.addItemToCartByName("Sauce Labs Backpack");
  await expect(inventoryPage.header.cartBadge).toHaveText("1");

  await inventoryPage.removeItemFromCartByName("Sauce Labs Backpack");
  await expect(inventoryPage.header.cartBadge).toBeHidden();
});

test("able to sort items by price low to high", async ({ inventoryPage }) => {
  await expect(inventoryPage.inventoryItems).toHaveCount(6);
  await inventoryPage.sortBy("Price (low to high)");

  const prices = (
    await inventoryPage.inventoryItems
      .getByTestId("inventory-item-price")
      .allTextContents()
  ).map((p) => Number(p.replace("$", "")));
  expect(prices).toEqual([...prices].sort((a, b) => a - b));
});

test("able to click on an item's picture, view its details, add to cart, and remove it from cart", async ({
  inventoryPage,
  inventoryItemPage,
}) => {
  await inventoryPage.gotoItemDetailsByPicture("Sauce Labs Backpack");
  await expect(inventoryItemPage.page).toHaveURL(/inventory-item/);
  await expect(
    inventoryItemPage.page.getByTestId("inventory-item-name"),
  ).toHaveText("Sauce Labs Backpack");
  await inventoryItemPage.addToCart();
  await expect(inventoryItemPage.header.cartBadge).toHaveText("1");

  await inventoryItemPage.removeFromCart();
  await expect(inventoryItemPage.header.cartBadge).toBeHidden();
});

test("able to click on an item's name, view its details", async ({
  inventoryPage,
  inventoryItemPage,
}) => {
  await inventoryPage.gotoItemDetailsByName("Sauce Labs Backpack");
  await expect(inventoryItemPage.page).toHaveURL(/inventory-item/);
  await expect(
    inventoryItemPage.page.getByTestId("inventory-item-name"),
  ).toHaveText("Sauce Labs Backpack");
});
