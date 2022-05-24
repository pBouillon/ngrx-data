import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TodoItem } from 'src/app/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem!: TodoItem;

  @Output() onToggleComplete = new EventEmitter<TodoItem>();
  @Output() onRemove = new EventEmitter<TodoItem>();

  ngOnInit(): void {
    if (!this.todoItem) {
      throw new Error('TodoItemComponent: todoItem is required');
    }
  }

  remove(): void {
    this.onRemove.emit(this.todoItem);
  }

  toggleComplete(): void {
    this.onToggleComplete.emit(this.todoItem);
  }
}
