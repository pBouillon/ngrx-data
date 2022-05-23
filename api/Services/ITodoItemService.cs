using Api.Models;

namespace Api.Services;

public interface ITodoItemService
{
    TodoItem Create(TodoItem todoItem);

    IEnumerable<TodoItem> GetAll();

    TodoItem? GetById(Guid Id);

    void DeleteById(Guid Id);

    TodoItem? Update(TodoItem todoItem);
}
