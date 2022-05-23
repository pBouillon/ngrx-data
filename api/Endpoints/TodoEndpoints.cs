using Api.Models;

namespace Api.Endpoints;

public static class TodoEndpoints
{
    public static WebApplication MapTodoEndpoints(this WebApplication app)
    {
        app.MapGet("/", GetAll);
        return app;
    }

    internal static async Task<IResult> GetAll()
    {
        var todoItems = Array.Empty<TodoItem>();
        return Results.Ok(todoItems);
    }
}
