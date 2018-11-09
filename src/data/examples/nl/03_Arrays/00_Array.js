/*
 * @name Array
 * @description Een array is een lijst met data. Alle data in de 
 * aarray heeft een unieke positie in de array, deze positie  
 * is een geheel positief nummer.
 * Arrays zijn z.g. 'zero based', wat inhoud dat het eerste data 
 * element zicht bevindt op positie [0], en het tweede data
 * element zicht bevindt op positie [0], enzovoort. 
 * In dit voorbeeld wordt er er een array, genaamd "coswave", aangemaakt
 * en wordt gevuld met de cosinus waarden. De data wordt op drie verschillende
 * manieren getekend op het scherm.  
 */
var coswave = [];

function setup() {

  createCanvas(720, 360);
  for (var i = 0; i < width; i++) {
    var amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(cos(amount));
  }
  background(255);
  noLoop();
}

function draw() {
  var y1 = 0;
  var y2 = height/3;
  for (var i = 0; i < width; i+=3) {
    stroke(coswave[i]*255);
    line(i, y1, i, y2);
  }

  y1 = y2;
  y2 = y1 + y1;
  for (var i = 0; i < width; i+=3) {
    stroke(coswave[i]*255 / 4);
    line(i, y1, i, y2);
  }
  
  y1 = y2;
  y2 = height;
  for (var i = 0; i < width; i+=3) {
    stroke(255 - coswave[i]*255);
    line(i, y1, i, y2);
  }
}
