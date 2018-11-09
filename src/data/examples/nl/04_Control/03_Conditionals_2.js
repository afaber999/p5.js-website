/*
 * @name Conditionals 2
 * @description We extend the language of conditionals from the previous
 * example by adding the keyword "else". This allows conditionals 
 * to ask two or more sequential questions, each with a different
 * action. 
 */
function setup() {

  createCanvas(720, 360); 
  background(0);

  for(var i = 2; i < width-2; i += 4) {
    // Als 'i' deelbaar is door 20 (zonder rest)
    if((i % 20) == 0) {
      stroke(255);
      line(i, 80, i, height/2);
    // Als 'i' deelbaar is door 10 (zonder rest)
    } else if ((i % 10) == 0) {
      stroke(153);
      line(i, 20, i, 180); 
    // In alle andere situaties, teken een lijn
    } else {  
      stroke(102);
      line(i, height/2, i, height-20);
    }
  }
}