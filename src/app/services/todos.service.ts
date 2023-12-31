import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];

  constructor() {}

  getTodos(): any {
    return this.todos;
  }

  addTodos(taskToAdd: Todo): void {
    this.todos.push(taskToAdd);
  }

  waitResponse(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
}
