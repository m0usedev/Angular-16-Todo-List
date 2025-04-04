import { Component } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor (private todoService : TodoListService) {}

  addTask (input: HTMLInputElement) {
    let title = input.value.trim();
    input.value = ""
    if (title.length > 0)
      this.todoService.addTask(title);
  }
}
