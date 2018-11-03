/*
 * @name No Loop
 * @description Als de noLoop() functie is aangroepen, dan zal de draw() functie
 * slechts eenmaal worden uitgevoerd. 
 * Zonder aanroep van noLoop(), zal het programma de draw functie continue aanroepen.
 */
var y;

// The programma code in the setup() functie 
// wordt slechts eenmaal uitgevoerd aan het begin van het programma
function setup() 
{
  // Maak een canvas
  createCanvas(720, 400);  
   // Set line tekenkleur naar wit
  stroke(255); 

  // roep noLoop() functie aan aan, dit zorgt evrvoor dat draw() 
  // functie slechts eenmaal wordt aangeroepen.
  noLoop();
  
  y = height * 0.5;
}

// The programma code in draw() wordt normaal gesproken
// continue aangeroepen totdat het programma is gestopt.
// Maar omdat de noLoop() is aangeroepen wordt de draw() functie
// slechts eenmaal uitgevoerd.
function draw() 
{ 
  background(0);   // Set the background to black
  y = y - 1; 
  if (y < 0) { y = height; } 
  line(0, y, width, y);  
} 
