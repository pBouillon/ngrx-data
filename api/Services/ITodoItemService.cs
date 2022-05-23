using Api.Models;

namespace Api.Services;

public interface ITodoItemService
{
    Task<IEnumerable<TodoItem>> GetAllAsync(CancellationToken cancellationToken);

    Task<TodoItem?> GetByIdAsync(Guid Id, CancellationToken cancellationToken);

    Task DeleteByIdAsync(Guid Id, CancellationToken cancellationToken);
}
