var bombAmount = 70;
var rows = 16;
var columns = 30;

// onClick (Open squares)
var allBoxes = document.querySelectorAll(".box");
for (var i = 0; i < allBoxes.length; i++){
  allBoxes[i].addEventListener('click', onClick);
}
function onClick(){
  if(this.innerText === ""){
    this.classList.add("empty");
    lookForEmpty();
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
    console.log("Kaboom!!!");
    endGame();
  }
}

// This function will look for empty squares next to an open
// square that has just been clicked and open them as well.
function lookForEmpty(){

}


function endGame(){
  for (var i = 0; i < allBoxes.length; i++){
    if (allBoxes[i].innerText === "B"){
      allBoxes[i].classList.add("bomb");  // Displays remaining bombs
//stop clock
//display bombs marked wrong
//no more clicks allowed
    }
  }
}


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
