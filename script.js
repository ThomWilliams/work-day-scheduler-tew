// REFERENCES TO KEY DOM ELEMENTS
var timeDisplayEl = $('#time-display');
var workHourEl = $('#working-hour');
var diaryEl = $('#diary-input');


// TIME FUNCTIONALITY FEATURES - USING MOMENT

// Time Display
function displayTime() {

  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);


  // Diary Elements Colour-coded accoridng to time of day
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


// SAVE BUTTON FUNCTION
$('.saveBtn').on('click', function () {
  var entry = $(this).siblings(".form-input").val();
  var time = $(this).parent().attr('id');
  $(this).css('color', '#00FF00');
  console.log(entry, time)
  localStorage.setItem(time, entry);
})

// Saves text to local storage for each dairy entry
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

// Time Interval runs every second
setInterval(displayTime, 1000);