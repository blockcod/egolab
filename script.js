// JavaScript/Jquery code goes here 
/*global $*/
// Arrays to create grid
// Assigning each room true/false
var room1 = [
    [true, true, true, true, true],
    [true, false, true, true, true],
    [true, false, true, true, false],
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
var activeSquareId = "#x0y0";
$(document).ready(function() {
    $(activeSquareId).show();
});

$(document).keydown(function(e) {
        if (e.keyCode === WCHAR) {
            console.log("up");
            var nextX = currentX - 1;
            if (nextX >= 0 && nextX < 5) {
                if (room1[nextX][currentY] === true) {
                    currentX = currentX - 1;
                }
                //door code
                else if (room1[currentX][currentY] === "door") {
                    //change html page
                }
            }

        }
        else if (e.keyCode === DCHAR) {
            console.log("right");
            var nextY = currentY + 1;
            if (currentY >= 0 && currentY < 5) {
                console.log("inbounds");

                if (room1[currentX][nextY] === true) {
                    currentY = currentY + 1;
                }
                //door code
                else if (room1[currentX][currentY] === "door") {
                    //change html page
                }
            }
        }
        else if (e.keyCode === SCHAR) {
            console.log("down");
            var nextX = currentX + 1;
            if (nextX >= 0 && nextX < 5) {
                if (room1[nextX][currentY] === true) {
                    currentX = currentX + 1;
                }
                //door code
                else if (room1[currentX][currentY] === "door") {
                    //change html page
                }
            }
        }
        else if (e.keyCode === ACHAR) {
            console.log("left");
            var nextY = currentY - 1;
            if (currentY >= 0 && currentY < 5) {
                if (room1[currentX][nextY] === true) {
                    currentY = currentY - 1;
                }
                //door code
                else if (room1[currentX][currentY] === "door") {
                    //change html page
                }
            }
        }

        
        var nextActiveSquareId = '#x' + currentX + 'y' + currentY;
        console.log(activeSquareId);
        $(activeSquareId).find(".hero").addClass("hidden");

        activeSquareId = nextActiveSquareId;
        console.log($(nextActiveSquareId).find(".hero"));
        $(activeSquareId).find(".hero").removeClass("hidden");

    });
