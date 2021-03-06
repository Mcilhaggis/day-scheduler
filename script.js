//Setting global variables 
const dateDisplay = document.getElementById("currentDay");
const today = moment();
const hour = moment().format("Ha");
const hoursInt = parseInt(moment().format("Ha"));

//Pushing the current time to dispaly at the top of the HTML page
dateDisplay.innerHTML = (today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

//Creating the time block elements dynamically
$(document).ready(function(){

    var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
    for (i = 0; i < hours.length; i++){
        //create main row div that holds everything
        var timeSlot = $("<div>");
        timeSlot.addClass("row time-block");

        //creates block on left that holds the time
        var leftBlock = $("<div>");
        leftBlock.addClass("hour col-md-1");

        //storing hour in div in moment format to compare to actual hour
        leftBlock.attr("data-time", moment(hours[i], "hh:mm a").format("H"));
        leftBlock.text(hours[i]);
        timeSlot.append(leftBlock);

        //creates the text input area in the middle
        var middleBlock = $("<textarea>");
        middleBlock.addClass("col-md-8 description");
        timeSlot.append(middleBlock);

        //Creates save button
        var btn = $("<button>");
        btn.addClass("saveBtn col-md-1");

            //LOCAL STORAGE SAVING STEPS - creating in save button before appending to the page
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

        //ADDING BUTTONS TO TIME SLOT
        timeSlot.append(btn);
        
        //creates the floppy disc icon dn appends to button
        var floppy = $("<img>");
        floppy.addClass("floppy");
        floppy.attr("src", "assets/save.png")
        floppy.attr("alt", "icon of floppy disc");
        btn.append(floppy);
        
        //appending everything to the container
        $("#container").append(timeSlot); 
    }

//LOCAL STORAGE RETRIEVING DATA FUNCTION - Pulling and filling previously stored data to middleBlock
renderBlocks(); 

//Checking that the inner text matches the data attribute assigned and parsing it to an integer
$(".description").each(function(){
    var blockTime = ($(this).siblings(".hour").attr("data-time"));
    var blockTimeInt = parseInt(blockTime);
    if (blockTimeInt === hoursInt){
        $((this)).addClass("present"); 
    }
    if (blockTimeInt < hoursInt){
        $((this)).addClass("past"); 
    } 
    if(blockTimeInt > hoursInt){
        $((this)).addClass("future"); 
    }  
});

//LOCAL STORAGE RETRIEVAL 
function renderBlocks(){
    //looping over blocks on the left 
    $(".hour").each(function(i, obj){
        //the current div has a time 
       var hourValueAsKey = $(obj).attr("data-time")
       //check the local storage for if the current time has a key, and therefor a value
        var storageKeyCheck = localStorage.getItem(hourValueAsKey);
        //if null return
        if (storageKeyCheck === null){
            return;
        } else {
        //push the key value to the description box
        ($(this).siblings(".description").append(storageKeyCheck));
        };
    });
}
})
