import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  inputValue: string = '';
  todos: Todo[] = [];
  counter: number = 0;
  isThereTasks!: boolean;
  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.updateTodos();
  }

  addTask(): void {
    if (this.inputValue != '') {
      const obj: Todo = {
        id: this.counter++,
        title: this.inputValue,
        completed: false,
      };
      console.log(obj);
      this.todoService.addTodos(obj);
      this.inputValue = '';

      this.updateTodos();
    } else {
      console.log('Non hai inserito nulla');
    }
  }

  setCompleted(index: number): void {
    //aggiorno l'array sul service
    this.todoService.todos[index].completed = true;
    this.updateTodos();
  }

  removeTask(index: number): void {
    //aggiorno l'array sul service
    this.todoService.todos.splice(index, 1);
    this.updateTodos();
  }

  updateTodos(): void {
    //aggiorno l'array in questo componente
    this.todos = this.todoService.getTodos();
    //controllo se almeno uno degli elementi del array ha il valore completed a true
    this.isThereTasks = this.todos.every((todo) => todo.completed === true);
    console.log(this.isThereTasks);
  }
}
