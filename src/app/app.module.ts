import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ToDoElementComponent } from './components/to-do-element/to-do-element.component';
import { TodoAppComponent } from './components/todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAllComponent,
    TodoAppComponent,
    AddTaskComponent,
    ToDoElementComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
