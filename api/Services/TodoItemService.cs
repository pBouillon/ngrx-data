using Api.Models;

namespace Api.Services;

public class TodoItemService : ITodoItemService
{
    private IReadOnlyList<TodoItem> _todoItems;

    public TodoItemService()
        => _todoItems = Array.Empty<TodoItem>();

    public Task DeleteByIdAsync(Guid Id, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<TodoItem>> GetAllAsync(CancellationToken cancellationToken)
        => Task.FromResult(_todoItems.AsEnumerable());

    public Task<TodoItem?> GetByIdAsync(Guid Id, CancellationToken cancellationToken)
    {
        var item = _todoItems.FirstOrDefault(item => item.Id == Id);
        return Task.FromResult(item);
    }
}
