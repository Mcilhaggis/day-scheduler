//Setting variables 
const dateDisplay = document.getElementById("currentDay");
const today = moment();
const hour = [];

//Pushing the current time to dispaly at the top of the HTML page
dateDisplay.innerHTML = (today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//changing the Colour of the block based on the time 

console.log(today.format("hA"));
console.log(hour.innerText);
//if the above matches the inner text of the time block change colour of the text area
if (today.format("hA") == hour.innerText) { // put the hours into an array to search for a match
    console.log("match!");
    hour.classList.add("present");
}