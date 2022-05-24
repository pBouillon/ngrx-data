import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { TodoItem } from '../core';

@Injectable({ providedIn: 'root' })
export class TodoItemService extends EntityCollectionServiceBase<TodoItem> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('TodoItem', serviceElementsFactory);
  }
}
