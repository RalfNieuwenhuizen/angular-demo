import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { ListComponent }  from './list.component';
import { IntroductionComponent }  from './introduction.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/introduction',
        pathMatch: 'full'
      },
      {
        path: 'introduction',
        component: IntroductionComponent
      },
      {
        path: 'lists',
        component: ListComponent
      },
    ])],
  declarations: [ AppComponent, ListComponent, IntroductionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


