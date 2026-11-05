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

  test("error message is displayed when username and password is empty", async ({
    loginPage,
  }) => {
    await loginPage.login("", users.standard.password);
    await expect(loginPage.errorMessage).toContainText(
      "Epic sadface: Username is required",
    );
  });

  test("error message is displayed when password is empty", async ({
    loginPage,
  }) => {
    await loginPage.login(users.standard.username, "");
    await expect(loginPage.errorMessage).toContainText(
      "Epic sadface: Password is required",
    );
  });

  test("error message is displayed when username and password is incorrect", async ({
    loginPage,
  }) => {
    await loginPage.login("invalid_user", "invalid_password");
    await expect(loginPage.errorMessage).toContainText(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });
});
