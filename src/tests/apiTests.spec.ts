import { test, expect } from "@playwright/test";
import { urls } from "../constants/urls";

test("Verify expected data types of properties from the API response", async ({
  request,
}) => {
  const response = await request.get(`${urls.baseUrl}/posts/1`);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(typeof responseBody.userId).toBe("number");
  expect(typeof responseBody.id).toBe("number");
  expect(typeof responseBody.title).toBe("string");
  expect(typeof responseBody.body).toBe("string");
});

test("Verify expected data types of properties from a user API response", async ({
  request,
}) => {
  const response = await request.get(`${urls.baseUrl}/users/1`);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(typeof responseBody.id).toBe("number");
  expect(typeof responseBody.name).toBe("string");
  expect(typeof responseBody.username).toBe("string");
  expect(typeof responseBody.email).toBe("string");
  expect(typeof responseBody.address).toBe("object");
  expect(typeof responseBody.address.street).toBe("string");
  expect(typeof responseBody.address.suite).toBe("string");
  expect(typeof responseBody.address.city).toBe("string");
  expect(typeof responseBody.address.zipcode).toBe("string");
  expect(typeof responseBody.address.geo).toBe("object");
  expect(typeof responseBody.address.geo.lat).toBe("string");
  expect(typeof responseBody.address.geo.lng).toBe("string");
  expect(typeof responseBody.phone).toBe("string");
  expect(typeof responseBody.website).toBe("string");
  expect(typeof responseBody.company).toBe("object");
  expect(typeof responseBody.company.name).toBe("string");
  expect(typeof responseBody.company.catchPhrase).toBe("string");
  expect(typeof responseBody.company.bs).toBe("string");
});

test("Verify expected response data from album endpoint", async ({
  request,
}) => {
  const response = await request.get(`${urls.baseUrl}/albums/1`);

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(typeof responseBody.userId).toBe("number");
  expect(typeof responseBody.id).toBe("number");
  expect(typeof responseBody.title).toBe("string");
});
