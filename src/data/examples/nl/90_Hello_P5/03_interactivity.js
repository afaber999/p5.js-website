/*
 * @name Interctief 2
 * @frame 720,425
 * @description De kleur van de cirkel varandert als de positie van de slider wordt verplaatst.
 * <p><em><span class="small"> Als je dit voorbeeld lokaal wilt runnen, heb je de 
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom bibliotheek ook nodig</a>.
 * </em></p>
 */

// Een HTML slider
var slider;

function setup() {
  createCanvas(720, 400);
  // HSB kleur mode
  colorMode(HSB, 255);
  // slider bereiek is tussen 0 and 255, bij aanvang is de waarde 127
  slider = createSlider(0, 255, 127);
}

function draw() {
  background(127);
  strokeWeight(2);

  //  Wijzig de kleur op basis van de slider positie
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  ellipse(360, 200, 200, 200);
}