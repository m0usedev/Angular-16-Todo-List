import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoElementComponent } from '../to-do-element/to-do-element.component';
import { ViewAllComponent } from './view-all.component';



@NgModule({
  declarations: [
    ViewAllComponent,
    ToDoElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewAllComponent
  ]
})
export class ViewAllModule { }
