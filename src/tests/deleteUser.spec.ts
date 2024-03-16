import { test, expect } from "@playwright/test";
import { urls } from "../constants/urls";

test("Verify the API response for deleting a user request ", async ({
  request,
}) => {
  const response = await request.delete(`${urls.baseUrl2}/api/users/2`);

  expect(response.status()).toBe(204);
});
