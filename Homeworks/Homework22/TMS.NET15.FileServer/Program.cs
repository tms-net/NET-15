
using TMS.NET15.FileServer;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.Add<CsvConfigurationSource>(sourse => { });

builder.Logging.ClearProviders();

builder.Logging.AddConsole();

builder.Logging.AddProvider(new FileLoggerProvider());

var app = builder.Build();


app.Use(async (context, next) =>
{
    var logger = context.RequestServices.GetService<ILogger<Program>>();

    logger.LogInformation($"Request:{context.Request.Path}");

    await next();
});

app.UseDefaultFiles();

app.UseStaticFiles();

app.MapGet("/config", async context =>
{
    IConfiguration config = context.RequestServices.GetService<IConfiguration>();

    //var admin = context.RequestServices.GetService<IOptions<Person>>().Value;
    string nameEnviroment = app.Environment.EnvironmentName;

    await context.Response.WriteAsync(nameEnviroment);

    await context.Response.WriteAsync(config["NameEnviroment"]);

    //var section = config.GetSection("Admin:Name");

    //await context.Response.WriteAsync(config[app.Environment.EnvironmentName]);
});

app.MapGet("/page2", async context =>
    {
        await context.Response.WriteAsync("You watch page #2");
});

app.Run();


