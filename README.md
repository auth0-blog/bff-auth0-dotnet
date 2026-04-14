This repository contains a React SPA supported by an ASP.NET Core backend to implement authentication and authorization with [Auth0](https://auth0.com/) through the Backend For Frontend (BFF) pattern.

The following article describes the implementation details: [Backend For Frontend Authentication Pattern with Auth0 and ASP.NET Core](https://auth0.com/blog/backend-for-frontend-pattern-with-auth0-and-dotnet/)

## To run this application:

1. Clone the repo: `git clone https://github.com/auth0-blog/bff-auth0-dotnet.git`.
2. Move to the `bff-auth0-dotnet/WeatherForecastAPI` folder.
3. Replace the `YOUR_DOMAIN` and `YOUR_API_AUDIENCE` placeholders in the `appsettings.json` configuration file with the Auth0 domain and audience for your API.
4. Launch the API with the `dotnet run` command.
5. Move to the `bff-auth0-dotnet/BackendForFrontend.Server` folder.
6. Add the Auth0 credentials for your Regular Web Application to the `appsettings.json` configuration file, as described in [the *Create an application in the Auth0 Dashboard* subsection](https://auth0.com/blog/backend-for-frontend-pattern-with-auth0-and-dotnet/#Create-an-application-in-the-Auth0-Dashboard).
7. While in the `bff-auth0-dotnet/BackendForFrontend.Server` folder, type `dotnet run` in a terminal window to launch the web application.
8. Point your browser to `https://localhost:7158` to interactively test your application.

## Requirements:

- [.NET Core 10.0](https://dotnet.microsoft.com/download/dotnet-core/10.0) installed on your machine.
- An [Auth0](https://auth0.com/) account.

