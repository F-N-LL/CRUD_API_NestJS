<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```


### CRUD API Project Using NestJS

This project is a step-by-step guide to building a CRUD API using NestJS, focusing on various essential topics such as authentication, database setup, testing, and more.

### Part 1: Setting Up the Project

1. **Modules and Dependency Injection**:
    - Utilize NestJS modules for organizing code and managing dependencies.
    - Leverage NestJS's built-in dependency injection for efficient component management.

2. **Setting Up PostgreSQL in Docker**:
    - Use Docker to set up a PostgreSQL database for your project.

3. **Setting Up Prisma**:
    - Integrate Prisma as an ORM for database interactions.

4. **Running Prisma Migrations**:
    - Run Prisma migrations to synchronize your database schema with your code.

### Part 2: Authentication

5. **Auth Module**:
    - Create an authentication module to handle user authentication.

6. **Auth Controller**:
    - Develop controllers to handle authentication logic.

7. **Hashing User Password with Argon**:
    - Implement password hashing using Argon2 for security.

8. **Sign Up Logic**:
    - Define logic for user registration.

9. **Sign In Logic**:
    - Implement logic for user authentication.

### Part 3: Authorization and Security

10. **Using Passport.js & JWT Module with NestJS**:
    - Utilize Passport.js and JWT for authentication and authorization.

11. **NestJS Guards**:
    - Implement guards to restrict access to certain routes.

12. **Get Current User with Access Token**:
    - Extract user information from the access token.

### Part 4: Testing and Deployment

13. **E2E Tests with Pactum.js**:
    - Write end-to-end tests using Pactum.js for API endpoints.

14. **Setting Up Test Database**:
    - Configure a separate test database for running tests.

15. **Automate Test Database Restart & Migrations**:
    - Automate the process of resetting and migrating the test database.

16. **Auth E2E Tests, User E2E Tests, Bookmarks E2E Test**:
    - Write E2E tests to ensure the functionality of authentication, user operations, and bookmark management.

### Additional Features and Enhancements

17. **NestJS Global Pipe**:
    - Implement global pipes for request validation and transformation.

18. **NestJS Custom Param Decorator**:
    - Create custom parameter decorators to simplify request handling.

19. **NestJS Config Module**:
    - Utilize NestJS configuration module for managing environment variables.

20. **Prisma Module**:
    - Organize Prisma related logic into a separate module for better maintainability.

21. **Using Auth DTOs**:
    - Utilize Data Transfer Objects (DTOs) for handling authentication-related data.

22. **Prisma Database Teardown Logic**:
    - Implement logic to tear down the test database after running tests.

### Conclusion

This README serves as a guide to building a CRUD API project using NestJS, covering essential topics such as authentication, authorization, testing, and deployment. Feel free to explore each section in detail to understand the project's architecture and implementation. Happy coding!


## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
