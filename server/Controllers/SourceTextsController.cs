using System.Diagnostics;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;
using Npgsql.Replication;

[ApiController]
[Route("api/sourcetexts")]

public class SourceTextsController : ControllerBase
{

    //query and save to postgres via entity
    private readonly ZonetyperDbContext _db;
    //make HTTP calls
    private readonly IHttpClientFactory _httpClientFactory;
    //read config/secrets
    private readonly IConfiguration _config;


    public SourceTextsController(ZonetyperDbContext db, IHttpClientFactory httpClientFactory, IConfiguration config)
    {
        _db = db;
        _httpClientFactory = httpClientFactory;
        _config = config;
    }

    [HttpGet("random")]
    public async Task<IActionResult> GetRandom()
    {
        try
        {
            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Add("X-Api-Key", _config["ApiNinja:Key"]);
            var response = await client.GetAsync("https://api.api-ninjas.com/v2/randomquotes");

            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                var quotes = JsonSerializer.Deserialize<List<NinjaQuote>>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

                if (quotes?.Count > 0)
                    return Ok(new { text = quotes[0].Quote });
            }

            return StatusCode(502, "Failed to fetch quote");
        }
        catch (Exception ex)
        {
            return StatusCode(502, ex.Message);
        }
    }

    record NinjaQuote(string Quote);

}

