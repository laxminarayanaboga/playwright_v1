import { test, expect } from "@playwright/test";

test("testing rest api - chaining", async ({ request }) => {
  // get all posts
  const postsResponse = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  expect(postsResponse.status()).toBe(200);

  // parse resepon to json
  const posts = await postsResponse.json();
  const firstPost = posts[0];
  console.log(firstPost);

  // get comments for this first post
  const commentsReseponse = await request.get(
    "https://jsonplaceholder.typicode.com/posts/" + firstPost.id + "/comments"
  );
  const commentsReseponseBody = await commentsReseponse.json();
  console.log(commentsReseponseBody);
});
