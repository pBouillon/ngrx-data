namespace Api.Models;

public record TodoItem(Guid Id, string Name, bool IsCompleted = false, Priority Priority = Priority.Medium);
