// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var workHourEl = $('#working-hour');
var diaryEl = $('#diary-input');
var saveEl = $('#save');



// MOMENT to handle displaying the time 
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
  

  // COlOUR ELEMENTS ACCORDING TO HOUR OF DAY

  var time =  queryselector.document("time");
  var hour = moment().format("HH");

  for (i=0; i < workHourEL.length; i++); {

    if (hour === time);
  diaryEl.setAttribute("background-color", "red");
  }
  { if (hour < time);
    diaryEl.setAttribute("background-color", "grey");
  }
  { if (hour > time); 
  diaryEl.setAttribute.color("background-color", "green"); 
}

};


// SAVE DIARY ENTRY TO LOCAL STORAGE
function diaryEntry (event) {
  event.preventDefault();
  
  var diaryItem = $('input[name="diary-input"]').val();

  var saveDateEL = document.getElementById("#diary-input");
  function savelocal () {
  var datasave = saveDateEl.value.trim();
  localStorage.setItem("savelocal"),JSON.stringify(savelocal);

}
}

// Displays Time
setInterval(displayTime, 1000);

// Saves 
saveEl.addEventListener("click", function() {
  savelocal();
})



/*
PSEUDOCODE
insert timer
create 3 column layout using bootstrap
  -  define time ranges for workHourEl - create array of times and loop through?
  -  create user text input for diaryEl
  -  create saveEl Button
Local storage / JSON function to save data after a refresh 
define colour coding by past, present and future classes on the rows..... if (timeDisplay = rightnow)




NOTES....

// function colour change for past, present, future 
// Time boxes
// https://stackoverflow.com/questions/62925657/can-anyone-help-me-colorcode-my-time-blocks-using-jquery

// Save Glyph from font awesome or another API - google?...

BOOT STRAP - lists - https://getbootstrap.com/docs/4.5/components/list-group/

*/