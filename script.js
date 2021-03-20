// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var workHourEl = $('#working-hour');
var diaryEl = $('#diary-input');




$('.saveBtn').on('click', function () {
  var entry = $(this).siblings(".form-input").val();
  var time = $(this).parent().attr('id');
  $(this).css('color', '#00FF00');
  console.log(entry, time)
  localStorage.setItem(time, entry);
})

// MOMENT to handle displaying the time 
function displayTime() {
  console.log("Working time")
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);


  // COlOUR ELEMENTS ACCORDING TO HOUR OF DAY

  $(".time-block").each(function () {
    var entryHourString = $(this).attr('id');
    var entryHourNum = parseInt(entryHourString);
    var currentHour = moment().hours();

    if (entryHourNum < currentHour) {
      $(this).addClass("past")
    } else if (entryHourNum === currentHour) {
      $(this).addClass("present")
    } else {
      $(this).addClass("future")
    }

  })

};


// SAVE DIARY ENTRY TO LOCAL STORAGE

setInterval(displayTime, 1000);


$("#9 .form-input").val(localStorage.getItem("9"))
$("#10 .form-input").val(localStorage.getItem("10"))
$("#11 .form-input").val(localStorage.getItem("11"))
$("#12 .form-input").val(localStorage.getItem("12"))
$("#13 .form-input").val(localStorage.getItem("13"))
$("#14 .form-input").val(localStorage.getItem("14"))
$("#15 .form-input").val(localStorage.getItem("15"))
$("#16 .form-input").val(localStorage.getItem("16"))
$("#17 .form-input").val(localStorage.getItem("17"))
$("#18 .form-input").val(localStorage.getItem("18"))


// TO DO

// Add Save Glyph 
// Readme
// Colour Code middle column, not left hand column

/*
PSEUDOCODE
insert timer
create 3 column layout using bootstrap
  -  define time ranges for workHourEl - create array of times and loop through?
  -  create user text input for diaryEl
  -  create saveEl Button
Define colour coding by past, present and future classes on the rows..... if (timeDisplay = rightnow)
Local storage / JSON function to save data after a refresh
d




NOTES....

// function colour change for past, present, future
// Time boxes
// https://stackoverflow.com/questions/62925657/can-anyone-help-me-colorcode-my-time-blocks-using-jquery

// Save Glyph from font awesome or another API - google?...

BOOT STRAP - lists - https://getbootstrap.com/docs/4.5/components/list-group/

*/