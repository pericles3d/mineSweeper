var bombAmount = 50;
var rows = 16;
var columns = 30;

// Generating random bomb location.
var bombGenerate = [];

for (var i = 0; i < bombAmount; i++){
  bombGenerate[i] = [
    Math.ceil(Math.random() * rows),
    Math.ceil(Math.random() * columns)];
    var bombRows = bombGenerate[i][0].toString().length;
    var bombCols = bombGenerate[i][1].toString().length;
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

var sqRow = document.querySelector("#_07_13").id.charAt(1) + document.querySelector("#_07_13").id.charAt(2);
var sqCol = document.querySelector("#_07_13").id.charAt(4) + document.querySelector("#_07_13").id.charAt(5);
var sqRowUp = ("0" + (Number(sqRow) - 1)).slice(-2);
var sqRowDown = ("0" + (Number(sqRow) + 1)).slice(-2);
var sqColLeft = ("0" + (Number(sqCol) - 1)).slice(-2);
var sqColRight = ("0" + (Number(sqCol) + 1)).slice(-2);

var symbol = 0;
if (document.querySelector("#_" + sqRowUp + "_" + sqColLeft).innerText === "B"){
  symbol += 1;}
if (document.querySelector("#_" + sqRowUp + "_" + sqCol).innerText === "B"){
  symbol += 1;}
if (document.querySelector("#_" + sqRowUp + "_" + sqColRight).innerText === "B"){
  symbol += 1;}
if (document.querySelector("#_" + sqRow + "_" + sqColLeft).innerText === "B"){
  symbol += 1;}
if (document.querySelector("#_" + sqRow + "_" + sqColRight).innerText === "B"){
  symbol += 1;}
if (document.querySelector("#_" + sqRowDown + "_" + sqColLeft).innerText === "B"){
  symbol += 1;}
if (document.querySelector("#_" + sqRowDown + "_" + sqCol).innerText === "B"){
  symbol += 1;}
if (document.querySelector("#_" + sqRowDown + "_" + sqColRight).innerText === "B"){
  symbol += 1;}
if (document.querySelector("#_07_13").innerText === "B"){
  symbol = "B";}
if (symbol === 0){
  symbol = "";}
document.querySelector("#_07_13").innerText = symbol;


// onClick
// var allBoxes = document.querySelectorAll(".box");
// for (var i = 0; i < allBoxes.length; i++){
//   allBoxes[i].addEventListener('click', onClick);
// }
// function onClick{
//
// }
