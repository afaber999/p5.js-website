/*
 * @name Logische Operatoren
 * @description De logische operatoren EN (&&) en OF (||) kunnen gebruik
 * worden om complexere expressies samen te stellen uit eenvoudige(re) expressies.
 * De NIET (!) operator kan gebruikt worden om eem booleanse waarde om te keren. 
 */
var test = false;

function setup() {

  createCanvas(720, 360); 
  background(126);

  for (var i = 5; i <= height; i += 5) {
    // Logische AND
    stroke(0);
    if((i > 35) && (i < 100)) {
      line(width/4, i, width/2, i);
      test = false;
    }
    
    // Logische OR
    stroke(76);
    if ((i <= 35) || (i >= 100)) {
      line(width/2, i, width, i);
      test = true;
    }
    
    // Testen dat een booleanse waarde waar is ("true")
    // De expressie "if(test)" is hetzelfde als "if(test == true)"
    if (test) {
      stroke(0);
      point(width/3, i);
    }
      
    // Testen dat een booleanse waarde niet waar is ("false")
    // De expressie "if(!test)" is hetzelfde als "if(test == false)"
    if (!test) {
      stroke(255);
      point(width/4, i);
    }
  }
}