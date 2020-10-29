//Setting variables 
const dateDisplay = document.getElementById("currentDay");
const today = moment();

//Pushing the current time to dispaly at the top of the HTML page
dateDisplay.innerHTML = (today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

