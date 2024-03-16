import { test, expect } from "@playwright/test";
import { urls } from "../constants/urls";
import { faker } from "@faker-js/faker";

test("Verify the request for user creation", async ({ request }) => {
  const requestBody = {
    email: faker.internet.email(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    avatar: faker.image.avatar(),
  };

  const response = await request.post(`${urls.baseUrl2}/api/users`, {
    data: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(typeof responseBody.email).toBe("string");
  expect(typeof responseBody.first_name).toBe("string");
  expect(typeof responseBody.last_name).toBe("string");
  expect(typeof responseBody.avatar).toBe("string");
  expect(typeof responseBody.id).toBe("string");
  expect(typeof responseBody.createdAt).toBe("string");
});
