using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authentication;
using System.Threading.Tasks;
using System.Net.Http;
using Microsoft.Extensions.Configuration;
using System.Net.Http.Headers;

namespace BackendForFrontend.Controllers
{
    [ApiController]
    [Authorize]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly Uri _apiEndpoint;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, 
            IHttpClientFactory httpClientFactory,
            IConfiguration configuration)
        {
            _logger = logger;
            _httpClientFactory = httpClientFactory;

            if (configuration["WeatherApiEndpoint"] == null)
                throw new ArgumentNullException("The Weather Api Endpoint is missing from the configuration");

            _apiEndpoint = new Uri(configuration["WeatherApiEndpoint"], UriKind.Absolute);
        }

        [HttpGet]
        public async Task Get()
        {
            var accessToken = await HttpContext.GetTokenAsync("Auth0", "access_token");

            var httpClient = _httpClientFactory.CreateClient();

            var request = new HttpRequestMessage(HttpMethod.Get, new Uri(_apiEndpoint, "WeatherForecast"));
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            var response = await httpClient.SendAsync(request);

            response.EnsureSuccessStatusCode();

            await response.Content.CopyToAsync(HttpContext.Response.Body);

            
        }
    }
}
