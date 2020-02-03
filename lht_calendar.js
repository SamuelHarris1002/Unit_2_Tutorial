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
var thisDay = new Date();

//write the calendar to the element with the id calendar
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//
function createCalendar(calDate){
   var calendarHTML = "<table id = 'calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
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


//function to write a table row weekday abbreviations
function calWeekdayRow(){
   //array to hold the weekday abbr.
   var dayName = ["SUN","MON","TUES","WED","THU","FRI","SAT"];
   var rowHTML = "<tr>";

   //look through the dayName array
   for (var i = 0; i < dayName.length; i++){
      rowHTML += "<th class = 'calendar_weekdays'>" + dayName[i] + "</th>";
   }

   rowHTML += "</tr>";
   return rowHTML;
}

//function to calculate the number of days in the events
function daysInMonth(calDate){
   
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31]

//revise the day countfor leapyears
if(thisYear % 4 === 0){
   if((thisYear % 100 != 0 )|| (thisYear % 400 !==0)){
      dayCount[1] = 29;
   }
}

   //extra the four digit year and month values
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   //return the number of days in the month
   return dayCount[thisMonth];
}

//function to write table rows row each day of the month
function calDays(calDate){
   //determine the starting day
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1)
   var weekDay = day.getDay();

   //write blank spaces preceding the starting day
   var htmlCode = "<tr>";
   for(var i = 0; i < weekDay; i++){
      htmlCode += "<td></td>";
   }

   //write calls for each day of the month
   var totalDays = daysInMonth(calDate);

   var highlightedDay = calDate.getDate();

   for(var i = 1; i <= totalDays; i++){
      day.setDate(i);
      weekDay = day.getDay();

      if(weekDay === 0){
         htmlCode += "<tr>"
      }

      if(i === highlightedDay){
         htmlCode += "<td class='calendardates' id='calendar_today'>" + i + dayEvent[i] + "</td>";
      }else{
         htmlCode += "<td class='calendar_dates'>" + i +  dayEvent[i] + "</td>";
      }



      if(weekDay === 6){
         htmlCode += "</tr>";
      }
   }
   return htmlCode;
}