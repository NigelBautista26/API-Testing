// import { test, expect } from '@playwright/test';
// import fetch from 'node-fetch';

// // Define the API endpoint for authentication
// const AUTH_ENDPOINT = 'https://api.example.com/auth/login';

// // Define the credentials for authentication
// const USERNAME = 'username';
// const PASSWORD = 'password';

// // Define the test
// test('API Authentication Test', async ({}) => {
//   // Make a POST request to the authentication endpoint with the credentials
//   const response = await fetch(AUTH_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: USERNAME,
//       password: PASSWORD,
//     }),
//   });

//   // Verify response status code
//   expect(response.status).toBe(200);

//   // Parse the response body as JSON
//   const responseBody = await response.json();

//   // Verify the authentication response
//   expect(responseBody).toMatchObject({
//     success: true,
//     message: 'Authentication successful',
//     token: expect.any(String), // Assuming the response contains a token
//   });
// });
