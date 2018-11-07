/*
 * @name Slider
 * @description U heeft de 
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom bibliotheek nodig</a>
 * om dit voorbeeld te laten functioneren in U eigen project.<br><br>
 * Verplaats de slider om de Rood, Groen en Blauw waarden van de achtergrond aan te passen.
 */
var rSlider, gSlider, bSlider;

function setup() {
  // creer hat canvas
  createCanvas(710, 400);
  textSize(15);
  noStroke();

  // creer sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  background(r, g, b);
  text("red", rSlider.x * 2 + rSlider.width, 35);
  text("green", gSlider.x * 2 + gSlider.width, 65);
  text("blue", bSlider.x * 2 + bSlider.width, 95);
}
