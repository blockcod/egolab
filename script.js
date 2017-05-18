
// JavaScript/Jquery code goes here 
/*global $*/
// Arrays to create grid
// Assigning each room true/false
// JavaScript/Jquery code goes here 
/*global $*/
// Arrays to create grid
// Assigning each room true/false
// JavaScript/Jquery code goes here 
/*global $*/
// Arrays to create grid
// Assigning each room true/false
var room1 = [
    [true, true, true, true, true],
    [true, false, true, true, true],
    ["cam", false, true, true, false],
    [true, true, true, true, true],
    [true, true, "exit", true, true]
];

var room2 = [
    [true, true, true, true, true],
    [true, false, true, false, true],
    [true, true, true, true, true],
    [true, false, true, false, true],
    [true, true, true, true, true],
];

var room3 = [
    [true, true, true, true, false],
    [true, true, true, true, false],
    [true, true, false, true, false],
    [true, true, true, true, true],
    [true, true, true, true, true]
];

var room4 = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, false, false, false, true],
    [true, true, true, true, true],
    [true, true, true, true, true]
];

var room5 = [
    [true, true, true, true, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, false, false, false, true],
    [true, true, true, true, true]
];

var room6 = [
    [true, true, true, true, true],
    [true, false, false, false, true],
    [true, true, true, true, true],
    [true, false, false, false, true],
    [true, true, true, true, true]
];

var room7 = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true]
];

var room8 = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, false],
    [true, true, true, true, true],
    [true, false, false, false, true]
];

var room9 = [
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, false, false, false, false],
    [true, false, false, false, false]
];

var currentX = 0;
var currentY = 0;
var WCHAR = 87;
var DCHAR = 68;
var SCHAR = 83;
var ACHAR = 65;
var cam_break = 0;
var activeSquareId = "#x0y0";
$(document).ready(function() {
    $(activeSquareId).show();
});

$(document).keydown(function(e) {
    if(e.keyCode === WCHAR) {
        console.log("up");
        var nextX = currentX - 1;
        }
        if(nextX >= 0 && nextX < 5) {
            if (room1[nextX][currentY] === true || room1[nextX][currentY] === "door1" || room1[nextX][currentY] === "door2" || room1[nextX][currentY] === "cam") {
                currentX = currentX - 1;
        }
        
        
    }


    else if(e.keyCode === DCHAR) {
        console.log("right");
         var nextY = currentY + 1;
        if(currentY >= 0 && currentY < 5) {
             if(room1[currentX][currentY] === "door"){
            //change html page
            currentY = currentY -4;
        }
            else if (room1[currentX][nextY] === true ||room1[currentX][nextY] === "door1" ||room1[currentX][nextY] === "door2" ||room1[currentX][nextY] === "cam" ||room1[currentX][nextY] === "exit") {
                currentY = currentY + 1;
                }
            }
        }
    
    else if(e.keyCode === SCHAR) {
        console.log("down");
        var nextX = currentX + 1;
        if(room1[currentX][currentY] === "exit" && cam_break === 1){
            alert("You have destroyed the camera collecting data on ScriptEd! Now Egolog can’t sell that information to third party companies. By continuing to oppose these actions online you can help keep the internet safe for all users in the near future!");
        }
        if(nextX >= 0 && nextX < 5) {
            if(room1[nextX][currentY] === true || room1[nextX][currentY] === "door1" || room1[nextX][currentY] === "door2" || room1[nextX][currentY] === "cam" || room1[nextX][currentY] === "exit") {
                currentX = currentX + 1;
            }
          }
        }
    
    else if(e.keyCode === ACHAR) {
        console.log("left");
        var nextY = currentY - 1;
        if(room1[currentX][currentY] === "door1"){
  // window.history.pushState = "https://preview.c9users.io/e_josue/egolog_remake/index_2.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io"

           // document.location.assign('https://preview.c9users.io/e_josue/egolog_remake/index_2.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io');
            room1=room2;
             currentY = currentY + 4;
        }
        else if(currentY >= 0 && currentY < 5) {
            if (room1[currentX][nextY] === true || room1[currentX][nextY] === "door1" ||
            room1[currentX][nextY] === "door2" || room1[currentX][nextY] === "cam"||room1[currentX][nextY] === "exit") {
                currentY = currentY - 1;
            }
             
            
        }
    }
if(room1[currentX][currentY] === "cam" && cam_break === 0) {
    cam_break = 1;
                alert("Begone Cameras!!!");
}
    console.log("x: " + currentX + " y: " + currentY);



        
        var nextActiveSquareId = '#x' + currentX + 'y' + currentY;
        console.log(activeSquareId);
        $(activeSquareId).find(".hero").addClass("hidden");

        activeSquareId = nextActiveSquareId;
        console.log($(nextActiveSquareId).find(".hero"));
        $(activeSquareId).find(".hero").removeClass("hidden");

    });