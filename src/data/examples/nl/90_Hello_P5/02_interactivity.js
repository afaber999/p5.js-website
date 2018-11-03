/*
 * @name Interactief 1
 * @frame 720,425
 * @description Als je op de cirkel klikt verandert de kleur.
 * <p><em><span class="small"> Als je dit voorbeeld lokaal wilt runnen, heb je de 
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom bibliotheek ook nodig</a>.
 * </em></p>
 */

// voor rood, groen, en blauwe kleurwaarden
var r, g, b;

function setup() {
  createCanvas(720, 400);
  // Selecteer een willekeurige kleuren
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(127);
  // Teken een cirkel
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
}

// Als de gebruiken op canvas klikt
function mousePressed() {
  // Controleer of de klik binnen de cirkel heeft plaatsgevonden
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Selecteer opnieuw een willekeurige kleur
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
