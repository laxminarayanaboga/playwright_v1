import {test, expect} from '@playwright/test'

test.beforeAll(async () => {
    console.log('inside beforeAll');
});
test.beforeEach(async () => {
    console.log('inside beforeEach');
});
test.afterAll(async () => {
    console.log('inside afterAll');
});
test.afterEach(async () => {
    console.log('inside afterEach');
});

test('First Test', async () => {
    console.log('in first test');
})
test('Second Test', async () => {
    console.log('in Second test');
})