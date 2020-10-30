//Setting global variables 
const dateDisplay = document.getElementById("currentDay");
const today = moment();
const hour = moment().format("Ha");
const hoursInt = parseInt(moment().format("Ha"));

//Pushing the current time to dispaly at the top of the HTML page
dateDisplay.innerHTML = (today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Creating the time block elements dynamically
$(document).ready(function(){
    var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

    for (i = 0; i < hours.length; i++){
        //create main row div that holds everything
        var timeSlot = $("<div>");
        timeSlot.addClass("row time-block");

        //creates block on left that holds the time
        var leftBlock = $("<div>");
        leftBlock.addClass("hour col-md-2");

        //storing hour in div in moment format to compare to actual hour
        leftBlock.attr("data-time", moment(hours[i], "hh:mm a").format("H"));
        leftBlock.text(hours[i]);
        timeSlot.append(leftBlock);

        //creates the text input area in the middle
        var middleBlock = $("<textarea>");
        middleBlock.addClass("col-md-9 description");
        $(timeSlot).append(middleBlock);
        //Creates save button

        var btn = $("<button>");
        btn.addClass("saveBtn col-md-1");
        $(timeSlot).append(btn);

        //creates the floppy disc icon
        var floppy = $("<img>");
        floppy.addClass("floppy");
        floppy.attr("src", "assets/save.png")
        floppy.attr("alt", "icon of floppy disc");
        $(btn).append(floppy);
        
        //appending everything to the container
        $("#container").append(timeSlot); 
    }

    
console.log(today.format("hA"));

//Checking that the inner text matches the data attribute assigned and parsing it to an integer
$(".hour").each(function(){
    var blockTime = ($(this).attr("data-time"));
    console.log(blockTime);
    var blockTimeInt = parseInt(blockTime);
    console.log(blockTimeInt);
    console.log(hoursInt);

    if (blockTimeInt === hoursInt){
        console.log("match");
    } else if (blockTimeInt < hoursInt){
        console.log("earlier");
    } else (blockTimeInt > hoursInt)
        console.log("later");
    


});

//Parsing the time object given by moment into an integer
// for (i= 0; i < hours.length; i++){


//Comparing the data attribute with the current time and applying a class based on that. 

    // if (blockTimeInt === hoursInt){
    //     console.log("match");
    //     middleBlock.addClass("present");
    // }else (blockTimeInt < hoursInt){
    //     console.log("earlier");
    //     middleBlock.addClass("past")
    // }else (blockTimeInt > hoursInt){
    //     console.log("later");
    //     middleBlock("later");
    // }





//if currentTime === blockTime add "present class"


//LOCAL STORAGE SAVING STEPS
//on save button click 
//set hour variable to select the data-time
//set task variable that holds the value of the text input area 
//save to local storage with localStorage.setItem(hour, task)

//Create function to populate the input values with stored data





})


    
//changing the Colour of the block based on the time 





    // if (today.format("Ha").isBefore(innerHTML)){
    //     console.log("earlier");



//adding data attr of time each block represents to use to communicate with the local storage?
//timeSlot.attr("data-time", hours[i]);