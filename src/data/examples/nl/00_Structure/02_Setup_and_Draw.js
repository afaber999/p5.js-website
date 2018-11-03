/*
 * @name Setup en Draw funties
 * @description De code binnen de draw() functie wordt continue uitgevoerd van
 * boven naar onder, zolang het programm niet is gestopt.
 */
var y = 100;

// De programma code in de setup() functie 
// wordt eenmalig aan het begin van het programma uitgevoerd.
function setup() {
	// createCanvas must be the first statement
  createCanvas(720, 400);  
  stroke(255);     // Set line drawing color to white
  frameRate(30);
}
// De programma code in de draw() functie wordt continue aangeroepem
// totad het programma wordt gestopt. Each rege code wordt in volgorde
// uitgevoerd. Nadat de laaste line van draw is uitgevoerd, wordt de draw()
// funcie weer opnieuw uitgevoerd.
function draw() { 

  background(0);
  // verhoog y iedere keer als draw wordt aangroepen
  y = y - 1; 
  if (y < 0) { 
    y = height; 
  } 
  line(0, y, width, y);  
} 