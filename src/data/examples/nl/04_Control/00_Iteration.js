/*
 * @name Iteratie
 * @description Voorbeeld met een "for" lus om wit en zwarte balken te tekenen.
 */
var y;
var num = 14;

function setup() {

  createCanvas(720, 360);
  background(102);
  noStroke();
     
  // Teken de witte balken 
  fill(255);
  y = 60;
  for(var i = 0; i < num/3; i++) {
    rect(50, y, 475, 10);
    y+=20;
  }

  // Teken de grijze balken
  fill(51);
  y = 40;
  for(var i = 0; i < num; i++) {
    rect(405, y, 30, 10);
    y += 20;
  }
  y = 50;
  for(var i = 0; i < num; i++) {
    rect(425, y, 30, 10);
    y += 20;
  }
    
  // Teken de dunne lijnen
  y = 45;
  fill(0);
  for(var i = 0; i < num-1; i++) {
    rect(120, y, 40, 1);
    y+= 20;
  }
}