var bombAmount = 10;
var rows = 16;
var columns = 30;

// onClick (Open squares)
var allBoxes = document.querySelectorAll(".box");
for (var i = 0; i < allBoxes.length; i++){
  allBoxes[i].addEventListener('click', onClick);
}

function searchUp(){

}

function onClick(){
  if(this.innerText === ""){
    this.classList.add("empty");
    var curSquare = this.id;
    var curRow = curSquare.slice(1,3); //assigns current row number to a variable.
    var curCol = curSquare.slice(4,6); //assigns current col number to a variable.
    console.log("curRow: " + curRow);
    console.log("curCol: " + curCol);
    var curRowUp = ("0" + (Number(curRow) - 1)).slice(-2);
    var curRowDown = ("0" + (Number(curRow) + 1)).slice(-2);
    var curColLeft = ("0" + (Number(curCol) - 1)).slice(-2);
    var curColRight = ("0" + (Number(curCol) + 1)).slice(-2);
    // console.log("curRowUp: " + curRowUp);
    // console.log("curRowDown: " + curRowDown);
    // console.log(document.querySelector("#_" + curRowUp + "_" + curCol).innerText);

    //Search Up
    for (var up = 0; up < (curRow-1); up++){
    var aUp = document.querySelector("#_" + ("0" + (Number(curRowUp) - up)).slice(-2) + "_" + curCol);
    if(aUp.innerText === ""){
       aUp.classList.add("empty");
    } else {
      up = curRow;
    }
  }
    //Search Down
    for (var down = 0; down < (rows - curRow); down++){
    var aDown = document.querySelector("#_" + ("0" + (Number(curRowDown) + down)).slice(-2) + "_" + curCol);
    if(aDown.innerText === ""){
       aDown.classList.add("empty");
    } else {
      down = (rows - curRow);
    }
  }

    //Search Left
    for (var left = 0; left < (curCol - 1); left++){
    var aLeft = document.querySelector("#_" + curRow + "_" + ("0" + (Number(curColLeft) - left)).slice(-2));
    if(aLeft.innerText === ""){
       aLeft.classList.add("empty");
    } else {
      left = curCol;
    }
  }

    //Search Right
    for (var right = 0; right < (columns - curCol); right++){
    var aRight = document.querySelector("#_" + curRow + "_" + ("0" + (Number(curColRight) + right)).slice(-2));
    if(aRight.innerText === ""){
       aRight.classList.add("empty");
    } else {
      right = (columns - curCol);
    }
  }
    // console.log("curRowUp: " + curRowUp);
    // console.log("rowUp - i: " + ("0" + (Number(curRowUp) - i)).slice(-2));
    // console.log("i: " + i);
    // console.log("a: " + a.innerText);
    // document.querySelector("#_" + )
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
