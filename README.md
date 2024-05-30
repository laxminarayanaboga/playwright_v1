# PLAYWRIGHT example project. 

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