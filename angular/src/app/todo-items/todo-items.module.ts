import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { TodoItemService } from './todo-item.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodoItemsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [TodoItemsComponent, TodoItemComponent, NewTodoItemComponent],
  providers: [TodoItemService],
})
export class TodoItemsModule {}
