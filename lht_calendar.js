"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Samuel Harris
   Date: 01/27/20 

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

//set the date displayed in the calendar
var thisDay = new Date("August 24, 2018");

//write the calendar to the element with the id calendar
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//
function createCalendar(calDate){
   var calendarHTML = "<table id = 'calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

function calCaption(calDate){
   var monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
   

   //determines the current month
   var thisMonth = calDate.getMonth();

   //determines the current year
   var thisYear = calDate.getFullYear();

   //writes out the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}