This repository contains a React SPA supported by an ASP.NET Core backend to implement authentication and authorization with [Auth0](https://auth0.com/) through the Backend For Frontend (BFF) pattern.

The following article describes the implementation details: [Backend For Frontend Authentication Pattern with Auth0 and ASP.NET Core](https://auth0.com/blog/backend-for-frontend-pattern-with-auth0-and-dotnet/)

## To run this application:

1. Clone the repo: `git clone https://github.com/auth0-blog/bff-auth0-dotnet.git`.
2. Move to the `bff-auth0-dotnet/Api` folder.
3. Add the Auth0 domain and audience for your API to the `appsettings.json` configuration file, as described in [the *Create an API in the Auth0 Dashboard* subsection](http://localhost:4000/blog/backend-for-frontend-pattern-with-auth0-and-dotnet/#Create-an-api-in-the-Auth0-Dashboard).
4. Move to the `bff-auth0-dotnet/BFF` folder.
5. Add the Auth0 credentials for your Regular Web Application to the `appsettings.json` configuration file, as described in [the *Create an application in the Auth0 Dashboard* subsection](http://localhost:4000/blog/backend-for-frontend-pattern-with-auth0-and-dotnet/#Create-an-application-in-the-Auth0-Dashboard).
6. While in the `bff-auth0-dotnet/BFF` folder, type `dotnet run` in a terminal window to launch the web application.
7. Point your browser to `https://localhost:5001` to interactively test your application.

## Requirements:

- [.NET Core 5.0](https://dotnet.microsoft.com/download/dotnet-core/5.0) installed on your machine.
- An [Auth0](https://auth0.com/) account.

