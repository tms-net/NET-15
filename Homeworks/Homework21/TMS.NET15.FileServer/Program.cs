var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseDefaultFiles(new DefaultFilesOptions { DefaultFileNames = new[] { "Html/ajax.html" } });

app.UseStaticFiles();


/*app.MapGet("/", async context =>
{
    var fileContent = File.ReadAllText("wwwroot/ajax.html");
    //var fileContent = File.ReadAllText("wwwroot\ajax.html");

    context.Response.Headers.ContentType = "text/html"; // mime type
    context.Response.StatusCode = 200;
    await context.Response.WriteAsync(fileContent);
});*/
app.MapGet("/Text/file", (string file) => File.ReadAllText($"Text/{file}")); // работает без этого, можно отключить

app.Run();