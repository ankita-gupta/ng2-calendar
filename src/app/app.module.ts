import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {Ng2CalenderComponent} from './ng2-calender/ng2-calender.component';
import {DemoComponent} from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent, DemoComponent, Ng2CalenderComponent
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
