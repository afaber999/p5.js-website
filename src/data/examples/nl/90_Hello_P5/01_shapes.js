/*
 * @name Eenvoudige (2D) vormen
 * @description Dit voorbeeld bevat een eenvoudig 2D vormen zoals: circel, rechthoek, driehoek en een bloem.
 */
function setup() {
  // Creer het canvas
  createCanvas(720, 400);
  background(200);

  // Stel de kleuren in
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  // Maak een rechthoek
  rect(40, 120, 120, 40);
  // Een circel
  ellipse(240, 240, 80, 80);
  // Een driehoek
  triangle(300, 100, 320, 100, 310, 80);

  // Maake een simpele bloem vorm
  translate(580, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}
