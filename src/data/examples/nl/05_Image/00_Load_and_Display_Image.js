/*
 * @name Image laden en weergeven
 * @description Images kunnen wordne geladen en weergegeven op het scherm,
 * zowel de originiele groote of een aangepase grootte.
 * <p><em><span class="small"> Om dit voorbeeld local te kunnen runnen, heeft U een image 
 * bestand nodig, en een lokale javascript server <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * </a>.</span></em></p>
 */
var img;  // Het image object

function setup() {
  createCanvas(720, 400);
  img = loadImage("assets/moonwalk.jpg");  // Inladen van het bestand
}

function draw() {
  // Het image weergeven met de originele afmeting op positie (0,0)
  image(img, 0, 0);
  // Het image weergeven met op positie (0, height/2) met de heflt van de hoogte
  image(img, 0, height/2, img.width/2, img.height/2);
}
