/*
 * @name Conditionals 1
 * @description Condities zijn vergelijkbaar met vragen. 
 * Ze maken het mogelijk dat het programma een beslissing kan
 * nemen om iets uit te voeren als het antwoord op een vraag
 * waar is (true), en voer een ander stuk code uit als het antwoord
 * niet waar is (false)
 * De vragen die gesteld worden zijn altijd van logische of 
 * rationele aard. Bijvoorbeeld, als de variable 'i' gelijk is
 * aan nul teken dan een lijn
 */
function setup() {

  createCanvas(720, 360); 
  background(0);

  for(var i = 10; i < width; i += 10) {
    // Als 'i' deelbaar is door 20 (zonder restwaarde), teken dan de eerste lijn
    // anders teken de tweede lijn
    if(i%20 == 0) {
      stroke(255);
      line(i, 80, i, height/2);
    } else {
      stroke(153);
      line(i, 20, i, 180); 
    }
  }
}