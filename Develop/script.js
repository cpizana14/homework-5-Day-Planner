
$(document).ready(function() {
  // save button clicks
  $(".saveBtn").on("click", function() {
    // set values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save to localStorage
    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    // current hour number
    var currentHour = moment().hours();

    // loop for time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // Where the current time lies
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  // variable checking if time needs updating
  var interval = setInterval(hourUpdater, 15000);

  // localStorage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
