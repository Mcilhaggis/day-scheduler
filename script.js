//Setting global variables 
const dateDisplay = document.getElementById("currentDay");
const today = moment();
const hour = moment().format("Ha");
const hoursInt = parseInt(moment().format("Ha"));


//Pushing the current time to dispaly at the top of the HTML page
dateDisplay.innerHTML = (today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Creating the time block elements dynamically
$(document).ready(function(){

    //Pulling previously stored data
    renderBlocks();    

    var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
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
        timeSlot.append(middleBlock);
        //Creates save button

        var btn = $("<button>");
        btn.addClass("saveBtn col-md-1");

            //LOCAL STORAGE SAVING STEPS
            btn.on("click", function(event){
            console.log("I'm clicked");
            event.preventDefault();

            var blockHour = ($(this).siblings(".hour").attr("data-time"));
            console.log(blockHour);

            var task = $(this).siblings(".description").val();
            console.log(middleBlock);

            if (task === ""){
                return;
            }
            localStorage.setItem(blockHour, task);


})
        timeSlot.append(btn);
        

        //creates the floppy disc icon
        var floppy = $("<img>");
        floppy.addClass("floppy");
        floppy.attr("src", "assets/save.png")
        floppy.attr("alt", "icon of floppy disc");
        btn.append(floppy);
        
        //appending everything to the container
        $("#container").append(timeSlot); 

        
    }

    
console.log(today.format("hA"));

//Checking that the inner text matches the data attribute assigned and parsing it to an integer
$(".description").each(function(){
    var blockTime = ($(this).siblings(".hour").attr("data-time"));
    var blockTimeInt = parseInt(blockTime);
    console.log(blockTimeInt);

    if (blockTimeInt === hoursInt){
        $((this)).addClass("present"); //to fix
    }
    
    if (blockTimeInt < hoursInt){
        $((this)).addClass("past"); //to fix
    } 
    
    if(blockTimeInt > hoursInt){
        $((this)).addClass("future"); //to fix
    }  
});

//LOCAL STORAGE RETRIEVAL 

function renderBlocks(){
    //looping over blocks on the left 
    $(".hour").each(function(){
    //grabbing the hour value and placing in a variable 
    var hourBlock = ($(this).attr("data-time"));
    console.log(hourBlock);
        //checking if the hour value is stored in local storage
        //if not there, return
        // if (hourBlock === ""){
        //     return;
        // }
        //retrieve data if stored
        //populate the middle block 
    });
}
//adds value from !how to select particular mid block! .val(localstorage.getItem(i)) 
})
