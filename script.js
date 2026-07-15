/* 
  script.js
  handles: 
  live date/time display, trip countdown,
  form submission confirmation 
 */


// live day & time display 
// function that tracks the current day and time
function updateDateTime() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  document.getElementById("current-datetime").textContent = dateString + "  " + timeString;
}

updateDateTime();

// run a command at a specified interval
setInterval(updateDateTime, 1000);

// trip countdown 
// countdown function
document.getElementById("countdown-button").addEventListener("click", function () {
  const tripDateValue = document.getElementById("trip-date").value;

  if (!tripDateValue) {
    alert("Please pick a date first!");
    return;
  }

  const tripDate = new Date(tripDateValue);
  const today = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  // Math method: round to nearest full day
  const diffInDays = Math.ceil((tripDate - today) / msPerDay );

  // convert a number to text for display
  document.getElementById("countdown-result").textContent = "Your trip is in " + String(diffInDays) + " days!";
});

// form submission confirmation 
// send an alert
document.getElementById("partner-form").addEventListener("submit", function (event) {
  const form = event.target;
  form.classList.add("submitted");
  
  alert("Thanks! We'll be in touch to match you with a climbing partner.");
});