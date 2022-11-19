//contribution: https://github.com/mmeii/work-day-scheduler
//contribution: https://github.com/sylviaprabudy/work-day-scheduler

  //TODO: dayjs, display current date, sets interval every second
function displayTime(){
  $("#currentDay").text(moment().format("dddd MMMM Do YYYY hh:mm:ss A"));
  }

//TODO: wrapping function to ensure code doesn't run until browser renders
$(function () {

  //variables
  var saveBtn = $(".saveBtn");
  
  //functions
  function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function () {
      var currHour = parseInt($(this).attr("id"));
      // TODO: Adding past, present, or future class to each time
      if (currHour > hour) {
        $(this).addClass("future");
      } else if (currHour === hour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    });
  }

  //TODO: click event listener using 'this'
  saveBtn.on("click", function () {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    var toDoList = $('#toDo');
    localStorage.setItem(time, plan);
    $('#toDoHeader').show();
    toDoList.append('<li>' + time + " " + plan + '</li>');
  });

  function usePlanner() {
    //TODO: setting value of local storage
    $(".hour").each(function () {
      var currHour = $(this).text();
      var currPlan = localStorage.getItem(currHour);

      if (currPlan !== null) {
        $(this).siblings(".plan").val(currPlan);
      }
    });
  }

  timeBlockColor();
  usePlanner();

});
setInterval(displayTime, 1000);