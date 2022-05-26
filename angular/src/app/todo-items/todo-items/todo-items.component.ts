import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../../core';
import { TodoItemService } from '../todo-item.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
})
export class TodoItemsComponent implements OnInit {
  loading$: Observable<boolean>;
  todoItems$: Observable<TodoItem[]>;

  constructor(private readonly todoItemService: TodoItemService) {
    this.loading$ = this.todoItemService.loading$;
    this.todoItems$ = this.todoItemService.entities$;
  }

  ngOnInit(): void {
    this.todoItemService.getAll();
  }

  openCreationModal(): void {
  }

  remove(todoItem: TodoItem): void {
    this.todoItemService.delete(todoItem);
  }

  toggleComplete(todoItem: TodoItem): void {
    this.todoItemService.update({
      ...todoItem,
      isCompleted: !todoItem.isCompleted,
    });
  }
}
