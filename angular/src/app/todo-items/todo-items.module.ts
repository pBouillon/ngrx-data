import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemService } from './todo-item.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodoItemsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [TodoItemsComponent, TodoItemComponent],
  providers: [TodoItemService],
})
export class TodoItemsModule {}
