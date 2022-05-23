using Api.Models;

namespace Api.Services;

public class TodoItemService : ITodoItemService
{
    private IEnumerable<TodoItem> _todoItems = new[]
    {
        new TodoItem(Id: Guid.NewGuid(), Name: "Make coffee", IsCompleted: true),
        new TodoItem(Id: Guid.NewGuid(), Name: "Water the plants", Priority: Priority.High),
        new TodoItem(Id: Guid.NewGuid(), Name: "Fix those bugs", Priority: Priority.Low),
    };

    public TodoItem Create(TodoItem todoItem)
    {
        var created = todoItem with { Id = Guid.NewGuid() };
        _todoItems = _todoItems.Append(created);

        return created;
    }

    public void DeleteById(Guid Id)
        => _todoItems = _todoItems.Where(item => item.Id != Id);

    public IEnumerable<TodoItem> GetAll()
        => _todoItems.OrderBy(item => item.Priority).ToList();

    public TodoItem? GetById(Guid Id)
        => _todoItems.FirstOrDefault(item => item.Id == Id);

    public TodoItem? Update(TodoItem todoItem)
    {
        var existingTodoItem = _todoItems.FirstOrDefault(item => item.Id == todoItem.Id);

        if (existingTodoItem is null)
        {
            return null;
        }

        var todoItems = _todoItems.ToList();

        var index = todoItems.IndexOf(existingTodoItem);

        todoItems[index] = existingTodoItem with
        {
            IsCompleted = todoItem.IsCompleted,
            Name = todoItem.Name,
            Priority = todoItem.Priority,
        };

        _todoItems = todoItems;

        return todoItems[index];
    }
}
