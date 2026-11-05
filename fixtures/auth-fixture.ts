import { test as pagesTest } from "./page-fixture";
import users from "../test-data/users.json";

type AuthFixtures = {
  user: keyof typeof users;
  authenticatedPage: void;
};

export const test = pagesTest.extend<AuthFixtures>({
  user: ["standard", { option: true }],
  authenticatedPage: [
    async ({ page, baseURL, user }, use) => {
      await page.context().addCookies([
        {
          name: "session-username",
          value: users[user].username,
          url: baseURL!,
        },
      ]);
      await page.goto("/inventory.html");
      await use();
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
