var bombAmount = 50;
var rows = 16;
var columns = 30;

// Generating random bomb location.
var bombGenerate = [];

for (var i = 0; i < bombAmount; i++){
  bombGenerate[i] = [
    Math.ceil(Math.random() * rows),
    Math.ceil(Math.random() * columns)];
}

for (var i = 0; i < bombAmount; i++){
  document.querySelector('#_'+bombGenerate[i][0]+'_'+bombGenerate[i][1]).innerText = "B";
}



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
