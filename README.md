# Ng2Calender

A simple calender to display some events on particular dates and to perform functions on that dates. This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

### Demo

To run the demo locally follow these steps:

- Clone or fork this repository
- Make sure you have node.js installed
- run npm install to install dependencies
- run npm start or ng serve to fire up dev server
- open browser to http://localhost:4200

### How to use-
- Clone or download the repository.
- Add the directory components into your angular2 app.
- Use it as `<app-ng2-calender></app-ng2-calender>` in the view of the desired component.

### Options-

- To add event details on some date in the calender create an array and pass it as an input to app-ng2-calender component       which contains the data as:
    ```
    public events:events[]=[
    {date:"2017-6-25",price:"Rs.100-Rs.500"},
    {date:"2017-8-11",price:"Rs.100-Rs.500"},
    {date:"2017-10-11",price:"Rs.250-Rs.700"},
    {date:"2018-1-25",price:"Rs.300-Rs.800"},
    {date:"2018-1-10",price:"Rs.100-Rs.500"}
    ]
    ```
  Now use the events array as `<app-ng2-calender [events]="events"></app-ng2-calender>`
  This will highlight the date given in array and show the price details in calender.

- To add event name/label for a particular date you can pass it to the 'label' property as input:
  `<app-ng2-calender [label]="label"></app-ng2-calender>`

- To perform some action on click of the date which displays an event add the function "doSomething()" as: 
 `<app-ng2-calender (clickobject)="doSomething($event)"></app-ng2-calender>`
