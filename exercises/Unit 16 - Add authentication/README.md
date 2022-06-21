# Exercises for Unit 16: Add authentication

## Exercise 1: Refactor your application

> _After Unit 16, Lesson 3: Refactor the application_

In this exercise you'll build on what you created in 'Unit 15, Exercise 1: Handle file uploads'.

Refactor your API application so that:

- Application configuration is accessed via one module (`config.ts`).
- The routes are in their own module and imported into `app.ts`.
- All middleware are organised under a `middleware` directory, and imported where they're needed.

## Exercise 2: Implement authentication

> _After Unit 16, Lesson 8: Associate planets with users_

In this exercise you'll build on what you created in 'Unit 16, Exercise 1: Refactor your application'.

Implement authentication for your API. You should:

- Integrate Passport, the GitHub2 Passport strategy and the Express session middleware.
- Create a GitHub OAuth App and configure your application to use it.
- Add routes for handling the login and logout process.
- Protect the POST, PUT and DELETE routes on your API.
- Set a username on resources when they're created or updated.
- Create a web page for adding a resource, so that you can test the authentication.
