import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoItem } from 'src/app/core';

@Component({
  selector: 'app-todo-creation',
  templateUrl: './todo-creation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCreationComponent {
  @Output() onCreate = new EventEmitter<TodoItem>();
  @Output() onClose = new EventEmitter();

  todoItemCreationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(32)]],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  close(): void {
    this.onClose.emit();
  }

  create(): void {
    this.onCreate.emit({ ...this.todoItemCreationForm.value });
    this.close();
  }
}
