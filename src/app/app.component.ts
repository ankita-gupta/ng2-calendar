import { Component } from '@angular/core';
// import {events} from '/ng2-calender.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public events:any[]=[
    {date:"2017-6-25",detail:"Event Detail"},
    {date:"2017-8-11",detail:"Event Detail"},
    {date:"2017-10-11",detail:"Event Detail"},
    {date:"2018-1-25",detail:"Event Detail"},
    {date:"2018-3-10",detail:"Event Detail"},
    {date:"2018-1-10",detail:"Event Detail"}
  ]
  public label="Label";

  constructor(){

  }
  doSomething(date){
     let alertstring = "Date Clicked:"+date;
     alert(alertstring);
  }
}
