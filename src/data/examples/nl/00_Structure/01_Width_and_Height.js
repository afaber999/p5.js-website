/*
 * @name Width en Height variabelen
 * @description The 'width' and 'height' variabelen bevatten de
 * waarde van de breedte (width) en de hoogte (height) van het 
 * canvas, zoals deze gespecifieerd zijn bij het aanmaken van het
 * canvas mbv de createCanvas()functie.
 */
function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(127);
  noStroke();
  for (var i = 0; i < height; i += 20) {
    fill(129, 206, 15);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}