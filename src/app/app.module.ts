import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {Ng2CalendarComponent} from './ng2-calendar/ng2-calendar.component';
import {DemoComponent} from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent, DemoComponent, Ng2CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
