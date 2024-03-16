import { test, expect } from "@playwright/test";
import { urls } from "../constants/urls";

test("Verify the API response for the get to users list request ", async ({
  request,
}) => {
  const response = await request.get(`${urls.baseUrl2}/api/users`);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(typeof responseBody.page).toBe("number");
  expect(typeof responseBody.per_page).toBe("number");
  expect(typeof responseBody.total).toBe("number");
  expect(typeof responseBody.total_pages).toBe("number");
  expect(Array.isArray(responseBody.data)).toBe(true);
  // Verify the data types of individual items in the 'data' array
  for (const user of responseBody.data) {
    expect(typeof user.id).toBe("number");
    expect(typeof user.email).toBe("string");
    expect(typeof user.first_name).toBe("string");
    expect(typeof user.last_name).toBe("string");
    expect(typeof user.avatar).toBe("string");
  }
});
