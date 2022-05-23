import { Priority } from './priority';

export interface TodoItem {
  id: string;
  name: string;
  isCompleted: boolean;
  priority: Priority;
}
