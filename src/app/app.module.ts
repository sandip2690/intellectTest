import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from './app.routing';
import { AppComponent } from './userList/app.component';
import { TOdo } from './todoList/todo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TOdo
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
