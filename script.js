// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var workHourEl = $('#working-hour');
var diaryEl = $('#diary-input');
var saveEl = $('#save');

// var input diary text 
// funtion - on click + enter text

// var save data - 
// function - on click 

// JSON data


// function colour change for past, present, future 
// Time boxes
// https://stackoverflow.com/questions/62925657/can-anyone-help-me-colorcode-my-time-blocks-using-jquery

// Save Glyph from font awesome or another API - google?...



// function diaryEntry (event) {
//   event.preventDefault();
  
//   var diaryItem = 


// }

// handle displaying the time - MOMENT
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
};

// Displays Time
setInterval(displayTime, 1000);


/*
insert timer
create 3 column layout using bootstrap
  -  define time ranges for workHourEl - create array of times and loop through?
  -  create user text input for diaryEl
  -  create saveEl Button
Local storage / JSON function to save data after a refresh 
define colour coding by past, present and future classes on the rows..... if (timeDisplay = rightnow)



BOOT STRAP - lists - https://getbootstrap.com/docs/4.5/components/list-group/



*/