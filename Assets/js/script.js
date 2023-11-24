var timeDisplayEl = $("#currentDay");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});

function displayTime() {
  var currentTime = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(currentTime);
}
displayTime();

// var key;
var dayEvent;

var saveBtns = $(".save");
saveBtns.each(function() {
  var key = $(this).parent().attr('id');
  var textArea = ($(this).prev()).children();
  textArea.val(localStorage.getItem(key));
  $(this).on('click', function(event) {
    console.log(this);
    console.log(key);
     dayEvent = textArea.val().trim();
    localStorage.setItem(key, dayEvent);
    // (($(event.target).prev()).children()).textContent = dayEvent;
  });
});


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

//   function checkHour {
// var currentHour = dayjs().format() 

var currentHour = dayjs().get('hour');
//   }

//   function convertTime {

//   }
var calendarEl = $("calendar");
var getId = $("calendar").children(0).attr('id');

var body = $("body");

var allDiv = body.children("div").children();

for ( var i=0; i < allDiv.length; i++) {
  var divItem = allDiv[i];
  var itemId = $(divItem).attr('id');
  var hour = itemId.substring(5)

  if (hour==currentHour){
    $(divItem).removeClass("past");
    $(divItem).removeClass("future");
    $(divItem).addClass("present");
  }

   else if ( hour > currentHour ){
    $(divItem).addClass("future");
    $(divItem).removeClass("present");
    $(divItem).removeClass("past");
  }
else {
  $(divItem).addClass("past");
  $(divItem).removeClass("future");
  $(divItem).removeClass("present");
}
};