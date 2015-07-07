var bombAmount = 50;
var rows = 16;
var columns = 30;

// Generating random bomb location.
var bombGenerate = [];

for (var i = 0; i < bombAmount; i++){
  bombGenerate[i] = [
    Math.ceil(Math.random() * rows),
    Math.ceil(Math.random() * columns)];
    if(bombGenerate[i][0].toString().length === 1 && bombGenerate[i][1].toString().length === 1){
      document.querySelector('#_0'+bombGenerate[i][0]+'_0'+bombGenerate[i][1]).innerText = "B";
    } else if (bombGenerate[i][0].toString().length === 1 && bombGenerate[i][1].toString().length === 2){
      document.querySelector('#_0'+bombGenerate[i][0]+'_'+bombGenerate[i][1]).innerText = "B";
    } else if (bombGenerate[i][0].toString().length === 2 && bombGenerate[i][1].toString().length === 1){
      document.querySelector('#_'+bombGenerate[i][0]+'_0'+bombGenerate[i][1]).innerText = "B";
    } else {
      document.querySelector('#_'+bombGenerate[i][0]+'_'+bombGenerate[i][1]).innerText = "B";
    }
  }


//Generating number of bombs surrounding each box.

// var eachBox = [];
//
// for (var i = 0; i < (rows*columns); i++){
//   eachBox[i] = [
//
//   ]
//   }



// document.querySelector("#d24").id.charAt(document.querySelector("#d24").id.length-2);
// document.querySelector("#d24").id.charAt(0);

// onClick
// var allBoxes = document.querySelectorAll(".box");
// for (var i = 0; i < allBoxes.length; i++){
//   allBoxes[i].addEventListener('click', onClick);
// }
// function onClick{
//
// }
