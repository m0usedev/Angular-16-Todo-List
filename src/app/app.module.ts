import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoElementComponent } from './components/to-do-element/to-do-element.component';
import { ViewAllComponent } from './components/view-all/view-all.component';
import { ViewAllModule } from './components/view-all/view-all.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
