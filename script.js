// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

// handle displaying the time - MOMENT
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
};


setInterval(displayTime, 1000);

