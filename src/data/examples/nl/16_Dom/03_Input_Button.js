/*
 * @name Invoer en Button
 * @description U heeft de 
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom bibliotheek nodig</a>
 * om dit voorbeeld te laten functioneren in U eigen project.<br><br>
 * Voer de tekst in en klik op de button, waarna de inhoud van het canvas wordt aangepast.
 */
var input, button, greeting;

function setup() {

  // creer canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('invoeren');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'wat is U naam?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('hallo '+name+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}
