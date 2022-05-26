import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewTodoItemComponent {
  @Output() onCreate = new EventEmitter();

  create(): void {
    this.onCreate.emit();
  }
}
