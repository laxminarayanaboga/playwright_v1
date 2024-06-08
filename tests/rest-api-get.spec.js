import { test, expect } from "@playwright/test";

test("testing rest api - get", async ({ request }) => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await request.get(url);
//   console
  expect(response.status()).toBe(200);
  const respnoseBody = await response.json();
  expect(respnoseBody.userId).toBe(1);
  expect(respnoseBody.id).toBe(1);
  expect(respnoseBody.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  expect(respnoseBody.body).toBe('quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');


//  expected response: 
//    {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }
});
