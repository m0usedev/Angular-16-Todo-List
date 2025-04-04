import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-to-do-element',
  templateUrl: './to-do-element.component.html',
  styleUrls: ['./to-do-element.component.css']
})
export class ToDoElementComponent {
  @Input() taskIndex : number | null = null

  constructor (private todoService : TodoListService) {}

  delTask(): void {
    if (this.taskIndex != null &&
      Number.isInteger(this.taskIndex) &&
      this.taskIndex >= 0) {
        this.todoService.delTask(this.taskIndex);
      }
  }
}