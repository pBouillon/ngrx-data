using Api.Endpoints;
using Api.Services;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin();
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    });
});

builder.Services.AddSingleton<ITodoItemService, TodoItemService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options => options.SwaggerDoc("v1", new OpenApiInfo
{
    Title = "Todo API",
    Version = "1.0.0",
}));

var app = builder.Build();
app.UseCors();

app.UseSwagger();
app.UseSwaggerUI();

app.MapTodoEndpoints();

app.Run();
