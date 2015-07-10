var bombAmount = 50;
var rows = 16;
var columns = 30;
var numberOfRightFlags = 0;
var numberOfWrongFlags = 0;
var numberOfBombs = 0;
var playerTurn = 1;
var allBoxes = document.querySelectorAll(".box");


// mouse click and release event (changes the smiley face)
for (var i = 0; i < allBoxes.length; i++){  // when mouse is clicked changes the smiley to scared
  allBoxes[i].addEventListener("mousedown", clickPress);
}

function clickPress(){
  if (gameOver === true){  // checks if game is over to prevent further clicking.
    return false;
  }
  document.querySelector(".smiley").innerHTML = '<img src="images/scared_icon.png">';
}

for (var i = 0; i < allBoxes.length; i++){
  allBoxes[i].addEventListener("mouseup", clickRelease);
}

function clickRelease(){
  if (gameOver === true){  // checks if game is over to prevent further clicking.
    return false;
  }
  document.querySelector(".smiley").innerHTML = '<img src="images/smile_icon.png">';
}

// checking for number of bombs in the board.
function countBombs(){
  for (var i = 0; i < allBoxes.length; i++){
    if(allBoxes[i].lang === "B"){
      numberOfBombs ++;
    }
  }
}

// checking number of flags marked correctly. (Mines succesfully disarmed)
function checkFlags(){
  for (var i = 0; i < allBoxes.length; i++){
    if(allBoxes[i].lang === "rightFlag"){
      numberOfRightFlags ++;
    }
    if(allBoxes[i].lang === "wrongFlag"){
      numberOfWrongFlags ++;
    }
  }
}

// Checking the board for empty squares and opening them.
var checkTimes = 0;
function checkBoard(){
  if (checkTimes <= 4){
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


// onClick (Open squares)
for (var i = 0; i < allBoxes.length; i++){
  allBoxes[i].addEventListener("click", onClick);
}
// On first click. Start game.
var curRow;
var curCol;
var chronoRunning = false;
var gameOver = false;
var gameRunning = false;

function onClick(){
  if (gameRunning === false){
  gameStart();
  gameRunning = true;
  }
  checkTimes = 0; // resets the times it has checked for empty squares.
  // if (gameOver === true){  // checks if game is over to prevent further clicking.
  //   return false;
  // }
  if (chronoRunning === false){  // checks if chrono is already running (true after first click)
    chronoStart();               // checks if chrono is already running (true after first click)
  }                              // checks if chrono is already running (true after first click)
  chronoRunning = true;          // checks if chrono is already running (true after first click)
  if(this.innerHTML === '<img src="images/flag_icon.png">'){    // checks if a bomb is flagged and won't let you click it.
    return false;
  }
  if(this.lang === ""){
    this.classList.add("empty");
    this.innerText = "";
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
  } else if (this.lang === "1"){
    this.classList.add("one");
    this.innerText = "1";
  } else if (this.lang === "2"){
    this.classList.add("two");
    this.innerText = "2";
  } else if (this.lang === "3"){
    this.classList.add("three");
    this.innerText = "3";
  } else if (this.lang === "4"){
    this.classList.add("four");
    this.innerText = "4";
  } else if (this.lang === "5"){
    this.classList.add("five");
    this.innerText = "5";
  } else if (this.lang === "6"){
    this.classList.add("six");
    this.innerText = "6";
  } else if (this.lang === "7"){
    this.classList.add("seven");
    this.innerText = "7";
  } else if (this.lang === "8"){
    this.classList.add("eight");
    this.innerText = "8";
  } else if (this.lang === "B"){
    this.lang = "boom";
    this.classList.add("bombExploded");
    this.innerHTML = '<img src="images/boom_icon.png">';
    endGame();
  }
  numberOfRightFlags = 0; // resets the number before checking again
  numberOfWrongFlags = 0; // resets the number before checking again
  numberOfBombs = 0;  // resets the number before checking again
  checkFlags();
  console.log("Right flags =" +numberOfRightFlags);
  console.log("Wrong Flags = " + numberOfWrongFlags);
  countBombs();
  console.log("Total Bombs = " + numberOfBombs);
  document.querySelector(".bombDisplay").innerText = numberOfBombs - numberOfWrongFlags;
}

//Search Up (search for empty squares)
function searchUp(){
  for (var up = 0; up < (curRow-1); up++){
    var aUp = document.querySelector("#_" + ("0" + ((Number(curRow) - 1) - up)).slice(-2) + "_" + curCol);
    if(aUp.lang === ""){
      aUp.classList.add("empty");
      aUp.innerText = "";
    } else if (aUp.lang === "1"){
        aUp.classList.add("one");
        aUp.innerText = "1";
        up = curRow;
    } else if (aUp.lang === "2"){
        aUp.classList.add("two");
        aUp.innerText = "2";
        up = curRow;
    } else if (aUp.lang === "3"){
        aUp.classList.add("three");
        aUp.innerText = "3";
        up = curRow;
    } else if (aUp.lang === "4"){
        aUp.classList.add("four");
        aUp.innerText = "4";
        up = curRow;
    } else if (aUp.lang === "5"){
        aUp.classList.add("five");
        aUp.innerText = "5";
        up = curRow;
    } else if (aUp.lang === "6"){
        aUp.classList.add("six");
        aUp.innerText = "6";
        up = curRow;
    } else {
        up = curRow;
    }
  }
}
//Search Down (search for empty squares)
function searchDown(){
  for (var down = 0; down < (rows - curRow); down++){
    var aDown = document.querySelector("#_" + ("0" + ((Number(curRow) + 1) + down)).slice(-2) + "_" + curCol);
    if(aDown.lang === ""){
      aDown.classList.add("empty");
      aDown.innerText = "";
    } else if (aDown.lang === "1"){
        aDown.classList.add("one");
        aDown.innerText = "1";
        down = (rows - curRow);
    } else if (aDown.lang === "2"){
        aDown.classList.add("two");
        aDown.innerText = "2";
        down = (rows - curRow);
    } else if (aDown.lang === "3"){
        aDown.classList.add("three");
        aDown.innerText = "3";
        down = (rows - curRow);
    } else if (aDown.lang === "4"){
        aDown.classList.add("four");
        aDown.innerText = "4";
        down = (rows - curRow);
    } else if (aDown.lang === "5"){
        aDown.classList.add("five");
        aDown.innerText = "5";
        down = (rows - curRow);
    } else if (aDown.lang === "6"){
        aDown.classList.add("six");
        aDown.innerText = "6";
        down = (rows - curRow);
    } else {
        down = (rows - curRow);
    }
  }
}

//Search Left (search for empty squares)
function searchLeft(){
  for (var left = 0; left < (curCol - 1); left++){
    var aLeft = document.querySelector("#_" + curRow + "_" + ("0" + ((Number(curCol) - 1) - left)).slice(-2));
    if(aLeft.lang === ""){
      aLeft.classList.add("empty");
      aLeft.innerText = "";
    } else if (aLeft.lang === "1"){
        aLeft.classList.add("one");
        aLeft.innerText = "1";
        left = curCol;
    } else if (aLeft.lang === "2"){
        aLeft.classList.add("two");
        aLeft.innerText = "2";
        left = curCol;
    } else if (aLeft.lang === "3"){
        aLeft.classList.add("three");
        aLeft.innerText = "3";
        left = curCol;
    } else if (aLeft.lang === "4"){
        aLeft.classList.add("four");
        aLeft.innerText = "4";
        left = curCol;
    } else if (aLeft.lang === "5"){
        aLeft.classList.add("five");
        aLeft.innerText = "5";
        left = curCol;
    } else if (aLeft.lang === "6"){
        aLeft.classList.add("six");
        aLeft.innerText = "6";
        left = curCol;
    }  else {
        left = curCol;
    }
  }
}

//Search Right (search for empty squares)
function searchRight(){
  for (var right = 0; right < (columns - curCol); right++){
    var aRight = document.querySelector("#_" + curRow + "_" + ("0" + ((Number(curCol) + 1) + right)).slice(-2));
    if(aRight.lang === ""){
      aRight.classList.add("empty");
      aRight.innerText = "";
    } else if (aRight.lang === "1"){
        aRight.classList.add("one");
        aRight.innerText = "1";
        right = (columns - curCol);
    } else if (aRight.lang === "2"){
        aRight.classList.add("two");
        aRight.innerText = "2";
        right = (columns - curCol);
    } else if (aRight.lang === "3"){
        aRight.classList.add("three");
        aRight.innerText = "3";
        right = (columns - curCol);
    } else if (aRight.lang === "4"){
        aRight.classList.add("four");
        aRight.innerText = "4";
        right = (columns - curCol);
    } else if (aRight.lang === "5"){
        aRight.classList.add("five");
        aRight.innerText = "5";
        right = (columns - curCol);
    } else if (aRight.lang === "6"){
        aRight.classList.add("six");
        aRight.innerText = "6";
        right = (columns - curCol);
    } else {
        right = (columns - curCol);
    }
  }
}

// Search Up Left (search for empty squares)
function searchUpLeft(){
  var maxUpLeft;
  if ((curRow-1) < (curCol - 1)){
    maxUpLeft = (curRow-1);
  } else {
    maxUpLeft = (curCol - 1);
  }
  for (var upLeft = 0; upLeft < maxUpLeft; upLeft++){
    var aUpLeft = document.querySelector("#_" + ("0" + ((Number(curRow) - 1) - upLeft)).slice(-2) + "_" + ("0" + ((Number(curCol) - 1) - upLeft)).slice(-2));
    if(aUpLeft.lang === ""){
      aUpLeft.classList.add("empty");
      aUpLeft.innerText = "";
    } else if (aUpLeft.lang === "1"){
        aUpLeft.classList.add("one");
        aUpLeft.innerText = "1";
        upLeft = maxUpLeft;
    } else if (aUpLeft.lang === "2"){
        aUpLeft.classList.add("two");
        aUpLeft.innerText = "2";
        upLeft = maxUpLeft;
    } else if (aUpLeft.lang === "3"){
        aUpLeft.classList.add("three");
        aUpLeft.innerText = "3";
        upLeft = maxUpLeft;
    } else if (aUpLeft.lang === "4"){
        aUpLeft.classList.add("four");
        aUpLeft.innerText = "4";
        upLeft = maxUpLeft;
    } else if (aUpLeft.lang === "5"){
        aUpLeft.classList.add("five");
        aUpLeft.innerText = "5";
        upLeft = maxUpLeft;
    } else if (aUpLeft.lang === "6"){
        aUpLeft.classList.add("six");
        aUpLeft.innerText = "6";
        upLeft = maxUpLeft;
    } else {
        upLeft = maxUpLeft;
    }
  }
}

// Search Up Right (search for empty squares)
function searchUpRight(){
  var maxUpRight;
  if ((curRow-1) < (columns - curCol)){
    maxUpRight = (curRow-1);
  } else {
    maxUpRight = (columns - curCol);
  }
  for (var upRight = 0; upRight < maxUpRight; upRight++){
    var aUpRight = document.querySelector("#_" + ("0" + ((Number(curRow) - 1) - upRight)).slice(-2) + "_" + ("0" + ((Number(curCol) + 1) + upRight)).slice(-2));
    if(aUpRight.lang === ""){
      aUpRight.classList.add("empty");
      aUpRight.innerText = "";
    } else if (aUpRight.lang === "1"){
        aUpRight.classList.add("one");
        aUpRight.innerText = "1";
        upRight = maxUpRight;
    } else if (aUpRight.lang === "2"){
        aUpRight.classList.add("two");
        aUpRight.innerText = "2";
        upRight = maxUpRight;
    } else if (aUpRight.lang === "3"){
        aUpRight.classList.add("three");
        aUpRight.innerText = "3";
        upRight = maxUpRight;
    } else if (aUpRight.lang === "4"){
        aUpRight.classList.add("four");
        aUpRight.innerText = "4";
        upRight = maxUpRight;
    } else if (aUpRight.lang === "5"){
        aUpRight.classList.add("five");
        aUpRight.innerText = "5";
        upRight = maxUpRight;
    } else if (aUpRight.lang === "6"){
        aUpRight.classList.add("six");
        aUpRight.innerText = "6";
        upRight = maxUpRight;
    } else {
        upRight = maxUpRight;
    }
  }
}

// Search Down Left (search for empty squares)
function searchDownLeft(){
  var maxDownLeft;
  if ((rows - curRow) < (curCol - 1)){
    maxDownLeft = (rows - curRow);
  } else {
    maxDownLeft = (curCol - 1);
  }
  for (var downLeft = 0; downLeft < maxDownLeft; downLeft++){
    var aDownLeft = document.querySelector("#_" + ("0" + ((Number(curRow) + 1) + downLeft)).slice(-2) + "_" + ("0" + ((Number(curCol) - 1) - downLeft)).slice(-2));
    if(aDownLeft.lang === ""){
      aDownLeft.classList.add("empty");
      aDownLeft.innerText = "";
    } else if (aDownLeft.lang === "1"){
        aDownLeft.classList.add("one");
        aDownLeft.innerText = "1";
        downLeft = maxDownLeft;
    } else if (aDownLeft.lang === "2"){
        aDownLeft.classList.add("two");
        aDownLeft.innerText = "2";
        downLeft = maxDownLeft;
    } else if (aDownLeft.lang === "3"){
        aDownLeft.classList.add("three");
        aDownLeft.innerText = "3";
        downLeft = maxDownLeft;
    } else if (aDownLeft.lang === "4"){
        aDownLeft.classList.add("four");
        aDownLeft.innerText = "4";
        downLeft = maxDownLeft;
    } else if (aDownLeft.lang === "5"){
        aDownLeft.classList.add("five");
        aDownLeft.innerText = "5";
        downLeft = maxDownLeft;
    } else if (aDownLeft.lang === "6"){
        aDownLeft.classList.add("six");
        aDownLeft.innerText = "6";
        downLeft = maxDownLeft;
    } else {
        downLeft = maxDownLeft;
    }
  }
}

// Search Down Right (search for empty squares)
function searchDownRight(){
  var maxDownRight;
  if ((rows - curRow) < (columns - curCol)){
    maxDownRight = (rows - curRow);
  } else {
    maxDownRight = (columns - curCol);
  }
  for (var downRight = 0; downRight < maxDownRight; downRight++){
    var aDownRight = document.querySelector("#_" + ("0" + ((Number(curRow) + 1) + downRight)).slice(-2) + "_" + ("0" + ((Number(curCol) + 1) + downRight)).slice(-2));
    if(aDownRight.lang === ""){
      aDownRight.classList.add("empty");
      aDownRight.innerText = "";
    } else if (aDownRight.lang === "1"){
        aDownRight.classList.add("one");
        aDownRight.innerText = "1";
        downRight = maxDownRight;
    } else if (aDownRight.lang === "2"){
        aDownRight.classList.add("two");
        aDownRight.innerText = "2";
        downRight = maxDownRight;
    } else if (aDownRight.lang === "3"){
        aDownRight.classList.add("three");
        aDownRight.innerText = "3";
        downRight = maxDownRight;
    } else if (aDownRight.lang === "4"){
        aDownRight.classList.add("four");
        aDownRight.innerText = "4";
        downRight = maxDownRight;
    } else if (aDownRight.lang === "5"){
        aDownRight.classList.add("five");
        aDownRight.innerText = "5";
        downRight = maxDownRight;
    } else if (aDownRight.lang === "6"){
        aDownRight.classList.add("six");
        aDownRight.innerText = "6";
        downRight = maxDownRight;
    } else {
        downRight = maxDownRight;
    }
  }
}

// Making the clock that times the game.
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

// Winning the game by flagging all mines.

function winner(){
  if(numberOfBombs === 0 && numberOfWrongFlags === 0 && playerTurn === 1){
    document.querySelector(".smiley").innerHTML = '<img src="images/win_icon.png">';
    document.querySelector(".a04").innerText = document.querySelector("#chronotime").innerText;
    document.querySelector(".a06").innerText = document.querySelector(".bombDisplay").innerText;
    document.querySelector(".a02").innerText = "Yeah!!!";
    chronoStop();
    chronoRunning = false;
    gameOver = true;

  } else if (numberOfBombs === 0 && numberOfWrongFlags === 0 && playerTurn === 2){
    document.querySelector(".smiley").innerHTML = '<img src="images/win_icon.png">';
    document.querySelector(".b04").innerText = document.querySelector("#chronotime").innerText;
    document.querySelector(".b06").innerText = document.querySelector(".bombDisplay").innerText;
    document.querySelector(".b02").innerText = "Yeah!!!";
    chronoStop();
    chronoRunning = false;
    gameOver = true;
    if(document.querySelector(".a02").innerText === "Kabooom!" && document.querySelector(".b02").innerText === "Yeah!!!"){
      document.querySelector(".a02").innerText = "Kabooom!";
      document.querySelector(".b02").innerText = "Winner";
    } else if(document.querySelector(".a02").innerText === "Yeah!!!" && document.querySelector(".b02").innerText === "Yeah!!!"){
      var minutesPlayer01 = document.querySelector(".a04").innerText.slice(0,2);
      var secondsPlayer01 = document.querySelector(".a04").innerText.slice(3,5);
      var minutesPlayer02 = document.querySelector(".b04").innerText.slice(0,2);
      var secondsPlayer02 = document.querySelector(".b04").innerText.slice(3,5);
      var timePlayer01 = minutesPlayer01 + secondsPlayer01;
      var timePlayer02 = minutesPlayer02 + secondsPlayer02;
      console.log(timePlayer01);
      console.log(timePlayer02);
      if (timePlayer01 === timePlayer02){
        document.querySelector(".a02").innerText = "Tie!!!";
        document.querySelector(".b02").innerText = "Tie!!!";
      } else if (timePlayer01 < timePlayer02){
        document.querySelector(".a02").innerText = "Winner";
        document.querySelector(".b02").innerText = "";
      } else if (timePlayer01 > timePlayer02){
        document.querySelector(".a02").innerText = "";
        document.querySelector(".b02").innerText = "Winner";
      } else {
        document.querySelector(".a02").innerText = "Error";
        document.querySelector(".b02").innerText = "Error";
      }
    }
  }
}

// Ending the game by explosion. Showing all bombs and resetting stuff.
function endGame(){
  if(playerTurn === 1){
    document.querySelector(".a02").innerText = "Kabooom!";
    document.querySelector(".a06").innerText = document.querySelector(".bombDisplay").innerText;
  } else if (playerTurn === 2){
    document.querySelector(".b02").innerText = "Kabooom!";
    document.querySelector(".b06").innerText = document.querySelector(".bombDisplay").innerText;
  }
  document.querySelector(".smiley").innerHTML = '<img src="images/lost_icon.png">';
  chronoStop();
  chronoRunning = false;
  gameOver = true;
  for (var i = 0; i < allBoxes.length; i++){
    if (allBoxes[i].lang === "B"){
      allBoxes[i].classList.add("bomb");  // Displays remaining bombs
      allBoxes[i].innerHTML = '<img src="images/bomb_icon.png">';
    } else if (allBoxes[i].lang === "wrongFlag"){
      allBoxes[i].innerHTML = '<img src="images/bombMiss_icon.png">';
    }
  }
  if (document.querySelector(".a02").innerText === "Yeah!!!" && document.querySelector(".b02").innerText === "Kabooom!"){
    document.querySelector(".a02").innerText = "Winner";
    document.querySelector(".b02").innerText = "Kabooom!";
  }
}


// Right click to flag bombs. on Right click (Add flag to where you think a bomb is. Remove flag as well)
  for (var i = 0; i < allBoxes.length; i++){
    allBoxes[i].addEventListener('contextmenu', onRightClick);
  }
  function onRightClick(ev){
    ev.preventDefault();  // prevents a window popup when right mouse is clicked
    if(this.innerText === "" && this.innerHTML === ""){  //if square is clean, ready to flag
      this.innerHTML = '<img src="images/flag_icon.png">'; // adds the flag on right click
      if(this.lang === ""){  // if that's an empty square and you missed,
        this.classList.add("0"); // add a 0 to classList so we know how to revert it later.
        this.lang = "wrongFlag"; // lang = wrong flag for flag tracking
      } else if(this.lang !== "B"){ // else if the square holds any number that's not a bomb you missed as well
        this.classList.add(this.lang); //add the number to classList so we know how to revert it later.
        this.lang = "wrongFlag"; // lang = wrong flag for flag tracking.
      } else {
        this.classList.add(this.lang); //You flagged a bomb. add "B" to classList in case we need to revert it later
        this.lang = "rightFlag"; // lang = right flag for flag tracking
      }
    } else if (this.innerHTML === '<img src="images/flag_icon.png">'){ //if the square contains a flag
        this.innerHTML = "";  // change innerHTML back to "" to remove the flag
        if (this.classList.item(2) === "0"){ //if there is a "0" in classList
          this.lang = ""; //change lang value to "" because it's an empty square
          this.classList.remove("0"); //remove the "0" from classList
        } else {
          this.lang = this.classList.item(2); //add the number back to the square.
          this.classList.remove(this.lang); //remove the number from classList.
        }
      }
    numberOfRightFlags = 0; // resets the number before checking again
    numberOfWrongFlags = 0; // resets the number before checking again
    checkFlags();
    console.log("Right flags =" +numberOfRightFlags);
    console.log("Wrong Flags = " + numberOfWrongFlags);
    numberOfBombs = 0; // resets the number before checking again
    countBombs();
    console.log("Total Bombs = " + numberOfBombs);
    document.querySelector(".bombDisplay").innerText = numberOfBombs - numberOfWrongFlags;
    winner();
  }


  // Generating random bomb location.
function gameStart(){
  var bombGenerate = [];

  for (var i = 0; i < bombAmount; i++){
    bombGenerate[i] = [
      Math.ceil(Math.random() * rows),  //generates a number from 1 to number of rows
      Math.ceil(Math.random() * columns)];  //generates a number from 1 to the number of columns.


      var bombRows = bombGenerate[i][0].toString().length;  //finds out if the number is 1 or 2 digits.
      var bombCols = bombGenerate[i][1].toString().length;  //finds out if the number is 1 or 2 digits.
      if(bombRows === 1 && bombCols === 1){
        document.querySelector('#_0'+bombGenerate[i][0]+'_0'+bombGenerate[i][1]).lang = "B";
      } else if (bombRows === 1 && bombCols === 2){
        document.querySelector('#_0'+bombGenerate[i][0]+'_'+bombGenerate[i][1]).lang = "B";
      } else if (bombRows === 2 && bombCols === 1){
        document.querySelector('#_'+bombGenerate[i][0]+'_0'+bombGenerate[i][1]).lang = "B";
      } else {
        document.querySelector('#_'+bombGenerate[i][0]+'_'+bombGenerate[i][1]).lang = "B";
      }
    }

  // Generating number of bombs surrounding each box.
  function bombsSurrounding(a, b){
    if(document.querySelector("#_" + a + "_" + b)){
      if (document.querySelector("#_" + a + "_" + b).lang === "B"){
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

      if (document.querySelector("#_" + sqRow + "_" + sqCol).lang === "B"){
        symbol = "B";
      }
      if (symbol === 0){
        symbol = "";}
      document.querySelector("#_" + sqRow + "_" + sqCol).lang = symbol;
      }
  }
}

// Reset game
var myResetButton = document.querySelector('.smiley');
myResetButton.addEventListener('click', changePlayers);

function changePlayers(){
  if(playerTurn === 1){
    document.querySelector(".player1").style.backgroundColor = 'rgb(225, 225, 225)';
    document.querySelector(".player2").style.backgroundColor = 'rgb(239, 238, 169)';
    playerTurn = 2;
    console.log(playerTurn);
  } else {
    document.querySelector(".player1").style.backgroundColor = 'rgb(239, 238, 169)';
    document.querySelector(".player2").style.backgroundColor = 'rgb(225, 225, 225)';
    playerTurn = 1;
    console.log(playerTurn);
    document.querySelector(".a02").innerText = "";
    document.querySelector(".b02").innerText = "";
    document.querySelector(".a04").innerText = "00:00";
    document.querySelector(".b04").innerText = "00:00";
    document.querySelector(".a06").innerText = "0";
    document.querySelector(".b06").innerText = "0";
  }
  for (var i = 0; i < allBoxes.length; i++){
    allBoxes[i].classList.remove("empty");
    allBoxes[i].classList.remove("one");
    allBoxes[i].classList.remove("two");
    allBoxes[i].classList.remove("three");
    allBoxes[i].classList.remove("four");
    allBoxes[i].classList.remove("five");
    allBoxes[i].classList.remove("six");
    allBoxes[i].classList.remove("seven");
    allBoxes[i].classList.remove("eight");
    allBoxes[i].classList.remove("bomb");
    allBoxes[i].classList.remove("bombExploded");
    allBoxes[i].classList.remove("b");
    allBoxes[i].classList.remove("1");
    allBoxes[i].classList.remove("2");
    allBoxes[i].classList.remove("3");
    allBoxes[i].classList.remove("4");
    allBoxes[i].classList.remove("5");
    allBoxes[i].classList.remove("6");
    allBoxes[i].classList.remove("7");
    allBoxes[i].classList.remove("8");
    allBoxes[i].classList.remove("9");
    allBoxes[i].classList.remove("0");
    allBoxes[i].lang = "";
    allBoxes[i].innerText = "";
    allBoxes[i].innerHTML = "";
  }
  numberOfRightFlags = 0;
  numberOfWrongFlags = 0;
  numberOfBombs = 0;
  curRow = "";
  curCol = "";
  chronoStop();
  chronoRunning = false;
  gameOver = false;
  gameRunning = false;
  document.querySelector(".smiley").innerHTML = '<img src="images/smile_icon.png">';
  document.querySelector(".bombDisplay").innerText = "00";
  document.querySelector("#chronotime").innerText = "00:00";
}
