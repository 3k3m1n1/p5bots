// RGB LED: Write
// Diagram: diagrams/rgb

// Board setup — you may need to change the port
var b = p5.board( 'COM3', 'arduino' );

function setup() {
  var rgb = b.pin( { r: 9, g: 10, b: 11 }, 'RGBLED' );
  var c = color( 0, 255, 0 );
  rgb.write( c );
  fill( c );
  noStroke();
  ellipse( 80, 80, 40, 40 );
}
