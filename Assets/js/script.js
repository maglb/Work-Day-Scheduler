var timeDisplayEl = $("#currentDay");

$(function () {
  // Event Listener on the save buttons to save entry into the local storage and diplay any data that has been already stored
  var dayEvent;
  var saveBtns = $(".save");

  saveBtns.each(function () {
    var key = $(this).parent().attr('id');
    var textArea = ($(this).prev()).children();
    textArea.val(localStorage.getItem(key));
    $(this).on('click', function (event) {
      dayEvent = textArea.val().trim();
      localStorage.setItem(key, dayEvent);
    });
  });

  // Code that changes the background color of each text input according to the current time
  var currentHour = dayjs().get('hour');
  var body = $("body");
  var allDiv = body.children("div").children();

  for (var i = 0; i < allDiv.length; i++) {
    var divItem = allDiv[i];
    var itemId = $(divItem).attr('id');
    var hour = itemId.substring(5)

    if (hour == currentHour) {
      $(divItem).removeClass("past");
      $(divItem).removeClass("future");
      $(divItem).addClass("present");
    }

    else if (hour > currentHour) {
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

  // TODO: Add code to display the current date in the header of the page.
  var currentTime = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(currentTime);
});