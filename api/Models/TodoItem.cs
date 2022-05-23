namespace Api.Models;

public record TodoItem(Guid Id, string Name, bool IsCompleted, Priority Priority = Priority.Medium);
