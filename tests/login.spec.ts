import users from "../test-data/users.json";
import { test, expect } from "../fixtures/page-fixture";

test.describe("Authentication Tests", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test("should log in successfully with standard user", async ({
    page,
    loginPage,
  }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test("should display error message for locked out user", async ({
    loginPage,
  }) => {
    await loginPage.login(users.locked.username, users.locked.password);
    await expect(loginPage.errorMessage).toContainText(
      "Epic sadface: Sorry, this user has been locked out.",
    );
  });

  test("should log in successfully with performance glitch user", async ({
    page,
    loginPage,
  }) => {
    await loginPage.login(
      users.performance.username,
      users.performance.password,
    );
    await expect(page).toHaveURL(/.*inventory.html/);
  });
});
