import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-completed-page',
  templateUrl: './completed-page.component.html',
  styleUrls: ['./completed-page.component.scss'],
})
export class CompletedPageComponent implements OnInit {
  todos: Todo[] = [];
  isThereTasks!: boolean;

  @ViewChild('remove') private draggableElement!: ElementRef;

  constructor(private todoService: TodosService) {}

  async ngOnInit() {
    await this.todoService.waitResponse();
    this.draggableElement.nativeElement.remove();
    this.updateTodos();
  }

  updateTodos(): void {
    //aggiorno l'array in questo componente
    this.todos = this.todoService.getTodos();
    //controllo se almeno uno degli elementi del array ha il valore completed a true
    this.isThereTasks = this.todos.every((todo) => todo.completed === false);
  }
}
