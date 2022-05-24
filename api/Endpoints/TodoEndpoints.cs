using Api.Models;
using Api.Services;

namespace Api.Endpoints;

public static class TodoEndpoints
{
    public static WebApplication MapTodoEndpoints(this WebApplication app)
    {
        app.MapPost("/api/todoitems", Create)
            .Produces<TodoItem>(StatusCodes.Status200OK);

        app.MapGet("/api/todoitems", GetAll)
            .Produces<IEnumerable<TodoItem>>(StatusCodes.Status200OK);

        app.MapGet("/api/todoitem/{id}", GetById)
            .Produces<TodoItem>(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status400BadRequest);

        app.MapDelete("/api/todoitem/{id}", DeleteById)
            .Produces(StatusCodes.Status204NoContent)
            .Produces(StatusCodes.Status400BadRequest);

        app.MapPut("/api/todoitem/{id}", Update)
            .Produces<TodoItem>(StatusCodes.Status200OK)
            .Produces(StatusCodes.Status400BadRequest)
            .Produces(StatusCodes.Status404NotFound);

        return app;
    }

    private static IResult Create(TodoItem payload, ITodoItemService todoItemService)
    {
        var todoItem = todoItemService.Create(payload);
        return Results.Ok(todoItem);
    }

    internal static IResult GetAll(ITodoItemService todoItemService)
    {
        var todoItems = todoItemService.GetAll();
        return Results.Ok(todoItems);
    }

    internal static IResult GetById(Guid id, ITodoItemService todoItemService)
    {
        var todoItem = todoItemService.GetById(id);

        return todoItem is null
            ? Results.NotFound()
            : Results.Ok(todoItem);
    }

    internal static IResult DeleteById(Guid id, ITodoItemService todoItemService)
    {
        todoItemService.DeleteById(id);
        return Results.NoContent();
    }

    internal static IResult Update(Guid id, TodoItem payload, ITodoItemService todoItemService)
    {
        if (id != payload.Id)
        {
            return Results.BadRequest();
        }

        var todoItem = todoItemService.Update(payload);

        return todoItem is null
            ? Results.NotFound()
            : Results.Ok(todoItem);
    }
}
