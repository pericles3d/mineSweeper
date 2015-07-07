// var s = {
//   rows: 16,
//   cols: 30,
//   width: 32,
//   height: 32,
// };
//
// var c;
//
// window.onload = function(){
//   var canvas = document.querySelector('#mineField');
//   c = canvas.getContext("2d");
//   init();
// };
//
// var box;
//
// function init(){
//   box = new Image();
//   box.src = "images/squareImg.jpg";
//   drawCanvas();
// }
//
// function drawCanvas(){
//   c.clearRect(0,0,400,400);
//   for(var i = 0; i < s.rows; i++){
//     for(var n = 0; n < s.cols; n++){
//       var x = n * s.width;
//       var y = i * s.height;
//       c.drawImage(box, x, y);
//     }
//   }
// }
