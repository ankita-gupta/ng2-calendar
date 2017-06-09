import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {events} from './demo.interface';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public currentMonth:number;
  public currentYear:number;
  public f:any='dd/mm/yyyy';
  public html:string;
  public dates:Array<any>=[];
  public priceset:boolean=false;
  public datePrice:string;
  public events:events[]=[
    {date:"2017-6-25",price:"Rs.100-Rs.500"},
    {date:"2017-8-11",price:"Rs.100-Rs.500"},
    {date:"2017-10-11",price:"Rs.250-Rs.700"},
    {date:"2018-1-25",price:"Rs.300-Rs.800"},
    {date:"2018-1-10",price:"Rs.100-Rs.500"}
  ]
  @Output() clickobject = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
     let currentDate = new Date();
     this.currentMonth = currentDate.getMonth();
     this.currentYear = currentDate.getFullYear();

     this.showCalender();
  }

  showCalender(){
    let firstDayOfCurrentMonth = new Date(this.currentYear,this.currentMonth, 1).getDay();


      let lastDateOfCurrentMonth = new Date(this.currentYear,this.currentMonth+1, 0).getDate();


      let lastDateOfLastMonth = this.currentMonth == 0 ? new Date(this.currentYear-1, 12, 0).getDate() : new Date(this.currentYear, this.currentMonth, 0).getDate();

      
      if(typeof(this.f) == 'string') {
        this.f  = this.f.charAt(0).toUpperCase();
      } else {
        this.f = 'M';
      }
      let p = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;
      let dm = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;


    for (let d, i=0, z0=0; z0<6; z0++) {


      for (let z0a = 0; z0a < 7; z0a++) {

        let d = i + dm - firstDayOfCurrentMonth;

        // Dates from prev month
        if (d < 1){


          let cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;


              if(this.currentMonth==0){
                let date = new Date(this.currentYear-1,11,cellvalue)
                this.dates.push({"cellvalue":cellvalue,"active":"notactive","month":11,"date":date})                
              
              }
              else{
                let date = new Date(this.currentYear,this.currentMonth-1,cellvalue)
                this.dates.push({"cellvalue":cellvalue,"active":"notactive","month":this.currentMonth-1,"date":date})
              }

        // Dates from next month
        } else if ( d > lastDateOfCurrentMonth){

          if(this.currentMonth == 11){

            let date = new Date(this.currentYear+1,0,p)
            this.dates.push({"cellvalue":p++,"active":"notactive","month":0,"date":date})            
          
        }else{
            let date = new Date(this.currentYear,this.currentMonth+1,p)
            this.dates.push({"cellvalue":p++,"active":"notactive","month":this.currentMonth+1,"date":date})
        
        }

        // Current month dates
        } else {                
                          
          let date = new Date(this.currentYear,this.currentMonth,d);
          this.dates.push({"cellvalue":d,"active":"active","month":this.currentMonth,"date":date})

          p = 1;
        }
        
        if (i % 7 == 6 && d >= lastDateOfCurrentMonth) {
          
          z0 = 10; // no more rows
        }

        i++;

      }
    
  }

  }
  getMonthName(value){
    let monthName = new Array('January', 'Febuary', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December');
    let name = monthName[value];
    return name;
  }
  getShortName(value){
    let monthName = new Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC');
    let name = monthName[value];
    return name;
  }
  previousMonth(){
    this.dates=[];
    // If we have wrapped around to the first month of the next
    // year, then we need to update the year attribute appropriately.
    if (this.currentMonth == 0) {
        this.currentMonth = 11;
        this.currentYear = this.currentYear -1; 
    }
    else{
          this.currentMonth = this.currentMonth - 1;
    }
    this.showCalender();
  }
  nextMonth(){
    this.dates = [];
    if(this.currentMonth == 11){
      this.currentMonth = 0;
      this.currentYear = this.currentYear +1;
    }
    else{
      this.currentMonth = this.currentMonth +1;
    }
    this.showCalender();
  }
  checkPrice(date){
    this.events.map((value) => {
      if(value.date.toDateString() == date.toDateString()){
        this.datePrice = value.price
      }
    })
    return this.datePrice;
  }
  checkDate(date){
    this.priceset= false;
    this.events.map((value) =>
        value.date = new Date(value.date)
    )
    this.events.map(each =>{
      if(each.date.toDateString() == date.toDateString()){
        this.priceset = true;
      }
    })
    let today=new Date();
    let todayDateOnly = new Date(today.getFullYear(),today.getMonth(),today.getDate()); //This will write a Date with time set to 00:00:00 so you kind of have date only
    let dDateOnly = new Date(date.getFullYear(),date.getMonth(),date.getDate());

    if(this.priceset && dDateOnly>=todayDateOnly){
        return true;
      }
  }
checktoday(date){
  if(date.toDateString() == new Date().toDateString()){
    return true;
  }
  else{
    return false;
  }
}
clickevent(value){
  let today=new Date();
    let todayDateOnly = new Date(today.getFullYear(),today.getMonth(),today.getDate()); //This will write a Date with time set to 00:00:00 so you kind of have date only
    let dDateOnly = new Date(value.getFullYear(),value.getMonth(),value.getDate());
    let clickeligible = this.checkDate(value);
    if(clickeligible){
      this.clickobject.emit(value);
    }
   
}
}
