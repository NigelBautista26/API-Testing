import { test, expect } from "@playwright/test";
import { urls } from "../constants/urls";
import { loginCredentials } from "../fixtures/loginCredentials";

test("Verify the API response from a login request", async ({ request }) => {
  const requestBody = {
    email: loginCredentials.email,
    password: loginCredentials.password,
  };

  const response = await request.post(`${urls.baseUrl2}/api/login`, {
    data: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  // const authToken = responseBody.token; // Save the token

  expect(typeof responseBody.token).toBe("string");
});
