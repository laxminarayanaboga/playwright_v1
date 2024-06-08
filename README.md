# PLAYWRIGHT example project. 
- Ref: https://playwright.dev/docs/intro

## learning
Thanks to Testing Funda by Zeeshan Asghar
link: https://www.youtube.com/playlist?list=PLBw1ubD1J1UgkIbyIpqAFnSp8fVJw5cRH

## run the test
- running single test file: `npx playwright test orange-hrm-title.spec.js --headed`
- running multifle test files: `npx playwright test orange-hrm-url.spec.js orange-hrm-title.spec.js --headed`
- running all tests under test: `npx playwright test --headed`
- running files that specific words: `npx playwright test orange --headed`
- running test with specific title: `npx playwright test -g "orange hrm url validation" --headed`
- running test with specifc project / browser: `npx playwright test orange-hrm-url.spec.js --project=chromium --headed`
- control the number of workers: `npx playwright test orange --headed --workers 5`

## report
- Access the html report: playwright-report/index.html

## codegen
- codegen is a playwright feature to generate the tests from user actions. 
- Run the command `npx playwright codegen`
- codegen comes with many options. run `npx playwright codegen -h`

## trace viewer
- Playwright Trace Viewer is a GUI tool that helps you explore recorded Playwright traces after the script has ran.
- after execution run comamnd: `npx playwright show-report`

## Misc
- For locators try the chrome extension - `SelectorsHub`
