import { test, expect } from "@playwright/test";
import { urls } from "../constants/urls";
import { loginCredentials } from "../fixtures/loginCredentials";

test("Verify the API response from an invalid missing password login request", async ({
  request,
}) => {
  const requestBody = {
    email: loginCredentials.email,
  };

  const response = await request.post(`${urls.baseUrl2}/api/login`, {
    data: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(400);

  const responseBody = await response.json();

  expect(responseBody.error).toBe("Missing password");
});

test("Verify the API response from an invalid missing email login request", async ({
  request,
}) => {
  const requestBody = {
    password: loginCredentials.password,
  };

  const response = await request.post(`${urls.baseUrl2}/api/login`, {
    data: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(400);

  const responseBody = await response.json();

  expect(responseBody.error).toBe("Missing email or username");
});
