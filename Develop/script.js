// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// VARIABLES //
var saveBtn = $(".saveBtn");
var currentDay = $('#currentDay');
var saveValues = JSON.parse(localStorage.getItem('UserInput')) || [];
var timeBlock = $('.timeBlock');
var userInput = {
  blockId: $(this).parent().attr("id"),
  text: $(this).parent().find(".description").val(),

};


// WHEN I open the planner
function setColor() {
  var currentTime = dayjs();
  const formattedTime = currentTime.format('MM-DD-YYYY HH:mm:ss A');

  // THEN the current day is displayed at the top of the calendar
  $('#currentDay').text(formattedTime);

  $(".time-block").each(function () {
    var blockNum = parseInt(this.id.split("-")[1]);
    var testHour = currentTime.$H

    if (blockNum === testHour) {
      $(this).removeClass("past future").addClass("present");
    } else if (blockNum < testHour) {
      $(this).removeClass("present future").addClass("past")
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });
};
setColor();

// add a set interval so the program knows to run second by second
setInterval(setColor, 1000);

// WHEN I click the save button for that timeblock
$('.saveBtn').on('click', function (event) {
  event.preventDefault();
  saveValues.push(timeBlock);
  localStorage.setItem('UserInput', JSON.stringify(saveValues));
  addPlan(timeBlock);
  timeBlock = ' ';
  
  
});

saveValues.forEach(addPlan);
function addPlan(text) {
  const p = document.createElement('p')
  p.textContent = text;
  timeBlock.append(p);
};

addPlan();

// for loop to get saved items out of local storage 



























// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });



// Save data i local storage needs a for loop referencing how many hours 
// we're using (9-17 etc) to function inside the storage