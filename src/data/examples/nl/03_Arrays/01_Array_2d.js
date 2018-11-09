/*
 * @name Array 2D
 * @description De voorbeeld laat zien hoe je een twee-demensionale (2D) array
 * kunt aanmaken en gebruiken. De waarden in een 2D array worden geindexeerd dmv
 * 2 index waarden. Een 2D array kan heel handig zijn als je je werkt met 
 * het creeren/bewerken van images. In dit voorbeeld, de kleur van ieder punt 
 * is afhankelijk van de afstand van de positie tot het centrum van het image. 
 */
var distances = [];
var maxDistance;
var spacer;

function setup() {
  createCanvas(720, 360);
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (var y = 0; y < height; y++) {
      var distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
  spacer = 10;
  noLoop();  // Run once and stop
}

function draw() {
  background(0);
  // Iedere spacer pixel wordt getekend, dus er zijn meer waarden
  // in de array dan dat er punten op het scherm worden getekend.
  // Deze dichtheid van punten kan worden aangepast door de spacer 
  // variable te veranderen.
  for (var x = 0; x < width; x += spacer) {
    for (var y = 0; y < height; y += spacer) {
      stroke(distances[x][y]);
      point(x + spacer/2, y + spacer/2);
    }
  }
}