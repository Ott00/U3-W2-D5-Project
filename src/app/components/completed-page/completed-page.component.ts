import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-completed-page',
  templateUrl: './completed-page.component.html',
  styleUrls: ['./completed-page.component.scss'],
})
export class CompletedPageComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.updateTodos();
  }

  updateTodos(): void {
    //aggiorno l'array in questo componente
    this.todos = this.todoService.getTodos();
    // console.log(this.todos);
  }
}
