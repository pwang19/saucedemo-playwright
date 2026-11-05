# SauceDemo Playwright Practice

A personal project for learning [Playwright](https://playwright.dev) by writing an end-to-end test suite for [saucedemo.com](https://www.saucedemo.com), a demo store built for practicing test automation.

The goal is to practice real-world patterns (page objects, fixtures, reliable locators and assertions, CI).


## Project layout

```
pages/        Page objects: locators and actions for each screen
fixtures/     Custom Playwright fixtures (page objects, auto-login)
tests/        Spec files, grouped by feature
test-data/    Shared test data (user accounts)
.github/      CI workflow: type-check, then run the suite on every push / PR
```


## Resources

- [Playwright docs](https://playwright.dev/docs/intro)
- [Locators guide](https://playwright.dev/docs/locators)
- [Fixtures](https://playwright.dev/docs/test-fixtures)
- [Page object models](https://playwright.dev/docs/pom)
- [Authentication](https://playwright.dev/docs/auth)
- [Best practices](https://playwright.dev/docs/best-practices)
