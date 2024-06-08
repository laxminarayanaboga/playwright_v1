import { test, expect } from "@playwright/test";

test("testing rest api - post", async ({ request }) => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const response = await request.post(url, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    data: {
      title: "foo",
      body: "bar",
      userId: 1,
    },
  });

  // respnse status validation
  expect(response.status()).toBe(201);

  // respnse body validation
  const responseBody = await response.json();
  console.log(responseBody);
  expect(responseBody.title).toBe("foo");

  // respnse header validation
  const respnoseHeaders = await response.headers();
  console.log(respnoseHeaders);
  expect(respnoseHeaders["content-type"]).toBe(
    "application/json; charset=utf-8"
  );
  expect(respnoseHeaders["server"]).toBe("cloudflare");

  console.log("end of test");
});
