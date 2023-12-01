import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';
import { ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('remove') private draggableElement!: ElementRef;

  constructor(private todoService: TodosService) {}

  async ngOnInit() {
    await this.todoService.waitResponse();
    this.draggableElement.nativeElement.remove();
    this.updateTodos();
  }

  async addTask() {
    await this.todoService.waitResponse();
    if (this.inputValue != '') {
      const obj: Todo = {
        id: this.counter++,
        title: this.inputValue,
        completed: false,
      };
      // console.log(obj);
      this.todoService.addTodos(obj);
      this.updateTodos();
      this.inputValue = '';
    } else {
      console.log('Non hai inserito nulla');
    }
  }

  async setCompleted(index: number) {
    await this.todoService.waitResponse();
    //aggiorno l'array sul service
    this.todoService.todos[index].completed = true;
    this.updateTodos();
  }

  async removeTask(index: number) {
    await this.todoService.waitResponse();
    //aggiorno l'array sul service
    this.todoService.todos.splice(index, 1);
    this.updateTodos();
  }

  updateTodos(): void {
    //aggiorno l'array in questo componente
    this.todos = this.todoService.getTodos();
    //controllo se almeno uno degli elementi del array ha il valore completed a true
    this.isThereTasks = this.todos.every((todo) => todo.completed === true);
    // console.log(this.isThereTasks);
  }
}
