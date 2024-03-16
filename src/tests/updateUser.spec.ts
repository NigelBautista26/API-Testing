import { test, expect } from "@playwright/test";
import { urls } from "../constants/urls";
import { faker } from "@faker-js/faker";

test("Verify the request for updating a user", async ({ request }) => {
  const requestBody = {
    name: faker.person.firstName(),
    job: faker.person.jobTitle(),
    last_name: faker.person.lastName(),
    avatar: faker.image.avatar(),
  };

  const response = await request.put(`${urls.baseUrl2}/api/users/2`, {
    data: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  // Verify data types of properties in the response
  expect(typeof responseBody.name).toBe("string");
  expect(typeof responseBody.job).toBe("string");
  expect(typeof responseBody.last_name).toBe("string");
  expect(typeof responseBody.avatar).toBe("string");
  expect(typeof responseBody.updatedAt).toBe("string");
});
