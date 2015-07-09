var bombAmount = 70;
var rows = 16;
var columns = 30;

// onClick (Open squares)
var allBoxes = document.querySelectorAll(".box");
for (var i = 0; i < allBoxes.length; i++){
  allBoxes[i].addEventListener('click', onClick);
}

// Checking the board for empty squares and opening them.
var checkTimes = 0;
function checkBoard(){
  if (checkTimes <= 2){
    for (x = 1; x <= rows; x++){
      for (y = 1; y <= columns; y++){
        curRow = ("0" + x).slice(-2);
        curCol = ("0" + y).slice(-2);
        if(document.querySelector("#_" + curRow + "_" + curCol).classList.contains("empty")){
          console.log("current row = " + curRow);
          console.log("current col = " + curCol);
          searchUp();
          searchDown();
          searchLeft();
          searchRight();
          searchUpLeft();
          searchUpRight();
          searchDownLeft();
          searchDownRight();
        }
      }
    } checkTimes = checkTimes + 1;
      console.log(checkTimes);
      checkBoard();
  }
}


// On first click. Start game.
var curRow;
var curCol;
var chronoRunning = false;
var gameOver = false;
function onClick(){
  checkTimes = 0; // resets the times it has checked for empty squares.
  if (gameOver === true){  // checks if game is over to prevent further clicking.
    return false;
  }
  if (chronoRunning === false){  // checks if chrono is already running (true after first click)
    chronoStart();
  }
  chronoRunning = true;
  if(this.innerText === ""){
    this.classList.add("empty");
    var curSquare = this.id;
    curRow = curSquare.slice(1,3); //assigns current row number to a variable.
    curCol = curSquare.slice(4,6); //assigns current col number to a variable.
    console.log("curRow: " + curRow);
    console.log("curCol: " + curCol);
    searchUp();
    searchDown();
    searchLeft();
    searchRight();
    searchUpLeft();
    searchUpRight();
    searchDownLeft();
    searchDownRight();
    checkBoard();
  } else if (this.innerText === "1"){
    this.classList.add("one");
  } else if (this.innerText === "2"){
    this.classList.add("two");
  } else if (this.innerText === "3"){
    this.classList.add("three");
  } else if (this.innerText === "4"){
    this.classList.add("four");
  } else if (this.innerText === "5"){
    this.classList.add("five");
  } else if (this.innerText === "6"){
    this.classList.add("six");
  } else if (this.innerText === "7"){
    this.classList.add("seven");
  } else if (this.innerText === "8"){
    this.classList.add("eight");
  } else if (this.innerText === "B"){
    this.classList.add("bomb");
    endGame();
  }
}

//Search Up
function searchUp(){
  for (var up = 0; up < (curRow-1); up++){
    var aUp = document.querySelector("#_" + ("0" + ((Number(curRow) - 1) - up)).slice(-2) + "_" + curCol);
    if(aUp.innerText === ""){
      aUp.classList.add("empty");
    } else if (aUp.innerText === "1"){
        aUp.classList.add("one");
        up = curRow;
    } else if (aUp.innerText === "2"){
        aUp.classList.add("two");
        up = curRow;
    } else if (aUp.innerText === "3"){
        aUp.classList.add("three");
        up = curRow;
    } else if (aUp.innerText === "4"){
        aUp.classList.add("four");
        up = curRow;
    } else if (aUp.innerText === "5"){
        aUp.classList.add("five");
        up = curRow;
    } else if (aUp.innerText === "6"){
        aUp.classList.add("six");
        up = curRow;
    } else {
        up = curRow;
    }
  }
}
//Search Down
function searchDown(){
  for (var down = 0; down < (rows - curRow); down++){
    var aDown = document.querySelector("#_" + ("0" + ((Number(curRow) + 1) + down)).slice(-2) + "_" + curCol);
    if(aDown.innerText === ""){
      aDown.classList.add("empty");
    } else if (aDown.innerText === "1"){
        aDown.classList.add("one");
        down = (rows - curRow);
    } else if (aDown.innerText === "2"){
        aDown.classList.add("two");
        down = (rows - curRow);
    } else if (aDown.innerText === "3"){
        aDown.classList.add("three");
        down = (rows - curRow);
    } else if (aDown.innerText === "4"){
        aDown.classList.add("four");
        down = (rows - curRow);
    } else if (aDown.innerText === "5"){
        aDown.classList.add("five");
        down = (rows - curRow);
    } else if (aDown.innerText === "6"){
        aDown.classList.add("six");
        down = (rows - curRow);
    } else {
        down = (rows - curRow);
    }
  }
}

//Search Left
function searchLeft(){
  for (var left = 0; left < (curCol - 1); left++){
    var aLeft = document.querySelector("#_" + curRow + "_" + ("0" + ((Number(curCol) - 1) - left)).slice(-2));
    if(aLeft.innerText === ""){
      aLeft.classList.add("empty");
    } else if (aLeft.innerText === "1"){
        aLeft.classList.add("one");
        left = curCol;
    } else if (aLeft.innerText === "2"){
        aLeft.classList.add("two");
        left = curCol;
    } else if (aLeft.innerText === "3"){
        aLeft.classList.add("three");
        left = curCol;
    } else if (aLeft.innerText === "4"){
        aLeft.classList.add("four");
        left = curCol;
    } else if (aLeft.innerText === "5"){
        aLeft.classList.add("five");
        left = curCol;
    } else if (aLeft.innerText === "6"){
        aLeft.classList.add("six");
        left = curCol;
    }  else {
        left = curCol;
    }
  }
}

//Search Right
function searchRight(){
  for (var right = 0; right < (columns - curCol); right++){
    var aRight = document.querySelector("#_" + curRow + "_" + ("0" + ((Number(curCol) + 1) + right)).slice(-2));
    if(aRight.innerText === ""){
      aRight.classList.add("empty");
    } else if (aRight.innerText === "1"){
        aRight.classList.add("one");
        right = (columns - curCol);
    } else if (aRight.innerText === "2"){
        aRight.classList.add("two");
        right = (columns - curCol);
    } else if (aRight.innerText === "3"){
        aRight.classList.add("three");
        right = (columns - curCol);
    } else if (aRight.innerText === "4"){
        aRight.classList.add("four");
        right = (columns - curCol);
    } else if (aRight.innerText === "5"){
        aRight.classList.add("five");
        right = (columns - curCol);
    } else if (aRight.innerText === "6"){
        aRight.classList.add("six");
        right = (columns - curCol);
    } else {
        right = (columns - curCol);
    }
  }
}

// Search Up Left
function searchUpLeft(){
  var maxUpLeft;
  if ((curRow-1) < (curCol - 1)){
    maxUpLeft = (curRow-1);
  } else {
    maxUpLeft = (curCol - 1);
  }
  for (var upLeft = 0; upLeft < maxUpLeft; upLeft++){
    var aUpLeft = document.querySelector("#_" + ("0" + ((Number(curRow) - 1) - upLeft)).slice(-2) + "_" + ("0" + ((Number(curCol) - 1) - upLeft)).slice(-2));
    if(aUpLeft.innerText === ""){
      aUpLeft.classList.add("empty");
    } else if (aUpLeft.innerText === "1"){
        aUpLeft.classList.add("one");
        upLeft = maxUpLeft;
    } else if (aUpLeft.innerText === "2"){
        aUpLeft.classList.add("two");
        upLeft = maxUpLeft;
    } else if (aUpLeft.innerText === "3"){
        aUpLeft.classList.add("three");
        upLeft = maxUpLeft;
    } else if (aUpLeft.innerText === "4"){
        aUpLeft.classList.add("four");
        upLeft = maxUpLeft;
    } else if (aUpLeft.innerText === "5"){
        aUpLeft.classList.add("five");
        upLeft = maxUpLeft;
    } else if (aUpLeft.innerText === "6"){
        aUpLeft.classList.add("six");
        upLeft = maxUpLeft;
    } else {
        upLeft = maxUpLeft;
    }
  }
}

// Search Up Right
function searchUpRight(){
  var maxUpRight;
  if ((curRow-1) < (columns - curCol)){
    maxUpRight = (curRow-1);
  } else {
    maxUpRight = (columns - curCol);
  }
  for (var upRight = 0; upRight < maxUpRight; upRight++){
    var aUpRight = document.querySelector("#_" + ("0" + ((Number(curRow) - 1) - upRight)).slice(-2) + "_" + ("0" + ((Number(curCol) + 1) + upRight)).slice(-2));
    if(aUpRight.innerText === ""){
      aUpRight.classList.add("empty");
    } else if (aUpRight.innerText === "1"){
        aUpRight.classList.add("one");
        upRight = maxUpRight;
    } else if (aUpRight.innerText === "2"){
        aUpRight.classList.add("two");
        upRight = maxUpRight;
    } else if (aUpRight.innerText === "3"){
        aUpRight.classList.add("three");
        upRight = maxUpRight;
    } else if (aUpRight.innerText === "4"){
        aUpRight.classList.add("four");
        upRight = maxUpRight;
    } else if (aUpRight.innerText === "5"){
        aUpRight.classList.add("five");
        upRight = maxUpRight;
    } else if (aUpRight.innerText === "6"){
        aUpRight.classList.add("six");
        upRight = maxUpRight;
    } else {
        upRight = maxUpRight;
    }
  }
}

// Search Down Left
function searchDownLeft(){
  var maxDownLeft;
  if ((rows - curRow) < (curCol - 1)){
    maxDownLeft = (rows - curRow);
  } else {
    maxDownLeft = (curCol - 1);
  }
  for (var downLeft = 0; downLeft < maxDownLeft; downLeft++){
    var aDownLeft = document.querySelector("#_" + ("0" + ((Number(curRow) + 1) + downLeft)).slice(-2) + "_" + ("0" + ((Number(curCol) - 1) - downLeft)).slice(-2));
    if(aDownLeft.innerText === ""){
      aDownLeft.classList.add("empty");
    } else if (aDownLeft.innerText === "1"){
        aDownLeft.classList.add("one");
        downLeft = maxDownLeft;
    } else if (aDownLeft.innerText === "2"){
        aDownLeft.classList.add("two");
        downLeft = maxDownLeft;
    } else if (aDownLeft.innerText === "3"){
        aDownLeft.classList.add("three");
        downLeft = maxDownLeft;
    } else if (aDownLeft.innerText === "4"){
        aDownLeft.classList.add("four");
        downLeft = maxDownLeft;
    } else if (aDownLeft.innerText === "5"){
        aDownLeft.classList.add("five");
        downLeft = maxDownLeft;
    } else if (aDownLeft.innerText === "6"){
        aDownLeft.classList.add("six");
        downLeft = maxDownLeft;
    } else {
        downLeft = maxDownLeft;
    }
  }
}

// Search Down Right
function searchDownRight(){
  var maxDownRight;
  if ((rows - curRow) < (columns - curCol)){
    maxDownRight = (rows - curRow);
  } else {
    maxDownRight = (columns - curCol);
  }
  for (var downRight = 0; downRight < maxDownRight; downRight++){
    var aDownRight = document.querySelector("#_" + ("0" + ((Number(curRow) + 1) + downRight)).slice(-2) + "_" + ("0" + ((Number(curCol) + 1) + downRight)).slice(-2));
    if(aDownRight.innerText === ""){
      aDownRight.classList.add("empty");
    } else if (aDownRight.innerText === "1"){
        aDownRight.classList.add("one");
        downRight = maxDownRight;
    } else if (aDownRight.innerText === "2"){
        aDownRight.classList.add("two");
        downRight = maxDownRight;
    } else if (aDownRight.innerText === "3"){
        aDownRight.classList.add("three");
        downRight = maxDownRight;
    } else if (aDownRight.innerText === "4"){
        aDownRight.classList.add("four");
        downRight = maxDownRight;
    } else if (aDownRight.innerText === "5"){
        aDownRight.classList.add("five");
        downRight = maxDownRight;
    } else if (aDownRight.innerText === "6"){
        aDownRight.classList.add("six");
        downRight = maxDownRight;
    } else {
        downRight = maxDownRight;
    }
  }
}

// Making the clock to time the game.
var startTime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;
function chrono(){
	end = new Date();
	diff = end - start;
	diff = new Date(diff);
	var sec = diff.getSeconds();
	var min = diff.getMinutes();
	if (min < 10){
		min = "0" + min;
	}
	if (sec < 10){
		sec = "0" + sec;
	}
	document.querySelector("#chronotime").innerHTML = min + ":" + sec;
	timerID = setTimeout("chrono()", 10);
}
function chronoStart(){
	start = new Date();
	chrono();
}
function chronoReset(){
	start = new Date();
}
function chronoStop(){
	clearTimeout(timerID);
}

// Ending the game by explosion. Showing all bombs and resetting stuff.
function endGame(){
  console.log("Kaboom!!!");
  chronoStop();
  chronoRunning = false;
  gameOver = true;
  event.stopPropagation();
  for (var i = 0; i < allBoxes.length; i++){
    if (allBoxes[i].innerText === "B"){
      allBoxes[i].classList.add("bomb");  // Displays remaining bombs
    }
  }
}

//display bombs marked wrong


// on Right click (Add flag to where you think a bomb is)
// Still need flag icon.
for (var i = 0; i < allBoxes.length; i++){
  allBoxes[i].addEventListener('contextmenu', onRightClick);
}
function onRightClick(ev){
ev.preventDefault();
  this.innerText = "X";
}


// Generating random bomb location.
var bombGenerate = [];

for (var i = 0; i < bombAmount; i++){
  bombGenerate[i] = [
    Math.ceil(Math.random() * rows),  //generates a number from 1 to number of rows
    Math.ceil(Math.random() * columns)];  //generates a number from 1 to the number of columns.
    var bombRows = bombGenerate[i][0].toString().length;  //finds out if the number is 1 or 2 digits.
    var bombCols = bombGenerate[i][1].toString().length;  //finds out if the number is 1 or 2 digits.
    if(bombRows === 1 && bombCols === 1){
      document.querySelector('#_0'+bombGenerate[i][0]+'_0'+bombGenerate[i][1]).innerText = "B";
    } else if (bombRows === 1 && bombCols === 2){
      document.querySelector('#_0'+bombGenerate[i][0]+'_'+bombGenerate[i][1]).innerText = "B";
    } else if (bombRows === 2 && bombCols === 1){
      document.querySelector('#_'+bombGenerate[i][0]+'_0'+bombGenerate[i][1]).innerText = "B";
    } else {
      document.querySelector('#_'+bombGenerate[i][0]+'_'+bombGenerate[i][1]).innerText = "B";
    }
  }

// Generating number of bombs surrounding each box.
function bombsSurrounding(a, b){
  if(document.querySelector("#_" + a + "_" + b)){
    if (document.querySelector("#_" + a + "_" + b).innerText === "B"){
      symbol += 1;
      }
  }
}

for (var x = 1; x <= rows; x++){
  for (var y = 1; y <= columns; y++){
    var sqRow = ("0" + x).slice(-2);
    var sqCol = ("0" + y).slice(-2);
    var sqRowUp = ("0" + (Number(sqRow) - 1)).slice(-2);
    var sqRowDown = ("0" + (Number(sqRow) + 1)).slice(-2);
    var sqColLeft = ("0" + (Number(sqCol) - 1)).slice(-2);
    var sqColRight = ("0" + (Number(sqCol) + 1)).slice(-2);
    var symbol = 0;
    bombsSurrounding(sqRowUp, sqColLeft);
    bombsSurrounding(sqRowUp, sqCol);
    bombsSurrounding(sqRowUp, sqColRight);
    bombsSurrounding(sqRow, sqColLeft);
    bombsSurrounding(sqRow, sqColRight);
    bombsSurrounding(sqRowDown, sqColLeft);
    bombsSurrounding(sqRowDown, sqCol);
    bombsSurrounding(sqRowDown, sqColRight);

    if (document.querySelector("#_" + sqRow + "_" + sqCol).innerText === "B"){
      symbol = "B";
      }
    if (symbol === 0){
      symbol = "";}
    document.querySelector("#_" + sqRow + "_" + sqCol).innerText = symbol;
      }
}
