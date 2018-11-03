/*
 * @name Coordinates
 * @description Alle vormen die op het scherm worden getekend, hebben een 
 * positie die wordt beschreven als een coördinaat. Alle coördinaten worden 
 * gemeten ten opzichte oorsprong, de eenheid is een pixel. De oorsprong 
 * [0, 0] is de coördinaat in de linkerbovenhoek van het venster en de 
 * c in de rechterbenedenhoek is [breedte-1, hoogte-1].
 */
function setup() {
  // Zet het de grootte van het canvas naar 
  // een breedte 720 pixels en een hoogte van 400 pixels
  createCanvas(720, 400);
}

function draw() {
  // Zet de achtergrondkleur naar zwart en zet de vulkleur uit
  background(0);
  noFill();

  // De twee parameters van een punt (point()) specificeren de  
  // coordinates.
  // The eerste parameter is het x-coördinate en het tweede 
  // parameter het y-coördinate.
  stroke(255);
  point(width * 0.5, height * 0.5);
  point(width * 0.5, height * 0.25); 

  // Coördinaten worden gebruikt bij het tekenen van alle vormen,
  // niet alleen van punten. Parameters voor verschillende vormen
  // hebben voor iedere vorm een andere betekenis. Bijvoorbeeld, 
  // de 1e/2e parameters van een lijn ( line() ) specificeren
  // het coördinaat van het eerste eindpunt en de 3e/4e parameters  
  // specificeren het coördinaten van het tweede eindpunt.
  stroke(0, 153, 255);
  line(0, height*0.33, width, height*0.33);

  // Standaard beschrijven de eerste twee parameters van de rechthoek 
  // functie ( rect() ) het coördinaat van de linkerbovenhoek, terwijl
  // de 3e parameter de breedte van de rechtoek beschrijft en de 4e
  // parameter de hoogte van de rechthoek beshrijft
  stroke(255, 153, 0);
  rect(width*0.25, height*0.1, width * 0.5, height * 0.8);
}
