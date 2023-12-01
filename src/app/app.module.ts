import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { CompletedPageComponent } from './components/completed-page/completed-page.component';

const routes: Route[] = [
  {
    path: 'todos',
    component: TodoPageComponent,
  },
  {
    path: 'completed',
    component: CompletedPageComponent,
  },
  {
    path: '**',
    redirectTo: 'todos',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    CompletedPageComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
