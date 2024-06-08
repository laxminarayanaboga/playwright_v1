import { test, expect } from "@playwright/test";

test("testing rest api - ut", async ({ request }) => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  const response = await request.put(url, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    data: {
      title: "foo-updated",
      body: "bar-updated",
      userId: 1,
      id: 101
    },
  });

  // respnse status validation
  expect(response.status()).toBe(200);

  // respnse body validation
  const responseBody = await response.json();
  console.log(responseBody);
  expect(responseBody.title).toBe("foo-updated");

  // respnse header validation
  const respnoseHeaders = response.headers();
  console.log(respnoseHeaders);
  expect(respnoseHeaders["content-type"]).toBe(
    "application/json; charset=utf-8"
  );
  expect(respnoseHeaders["server"]).toBe("cloudflare");

  console.log("end of test");
});
