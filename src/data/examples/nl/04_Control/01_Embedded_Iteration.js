/*
 * @name Embedded Iteratie
 * @description Een "for" loop in een for loop om door een twee dimensionale structuur te itereren.
 */
function setup() {

  createCanvas(720, 360); 
  background(0); 
  noStroke(); 

  var gridSize = 35;

  for (var x = gridSize; x <= width - gridSize; x += gridSize) {
    for (var y = gridSize; y <= height - gridSize; y += gridSize) {
      noStroke();
      fill(255);
      rect(x-1, y-1, 3, 3);
      stroke(255, 50);
      line(x, y, width/2, height/2);
    }
  }

}