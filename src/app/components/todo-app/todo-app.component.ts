import { Component } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  providers: [TodoListService]
})
export class TodoAppComponent {
  public tasks : string[] = [];

  constructor (private todoService : TodoListService) {
    this.todoService.tasks$.subscribe(tasks => this.tasks = tasks);
  }
}
