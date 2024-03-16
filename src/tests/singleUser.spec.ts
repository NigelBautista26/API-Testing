import { test, expect } from "@playwright/test";
import { urls } from "../constants/urls";

test("Verify the API response for the get single user request ", async ({
  request,
}) => {
  const response = await request.get(`${urls.baseUrl2}/api/users/1`);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(typeof responseBody.data).toBe("object");
  expect(typeof responseBody.data.id).toBe("number");
  expect(typeof responseBody.data.email).toBe("string");
  expect(typeof responseBody.data.first_name).toBe("string");
  expect(typeof responseBody.data.last_name).toBe("string");
  expect(typeof responseBody.data.avatar).toBe("string");
  expect(typeof responseBody.support).toBe("object");
  expect(typeof responseBody.support.url).toBe("string");
  expect(typeof responseBody.support.text).toBe("string");
});
