import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoItemService } from "./todo-item.service";
import { TodoItemsComponent } from './todo-items/todo-items.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodoItemsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [TodoItemsComponent],
  providers: [TodoItemService],
})
export class TodoItemsModule { }
