import { test, expect } from "@playwright/test";
import { urls } from "../constants/urls";

test("Verify the API response for the get user not found request ", async ({
  request,
}) => {
  const response = await request.get(`${urls.baseUrl2}/api/users/23`);

  expect(response.status()).toBe(404);
});
