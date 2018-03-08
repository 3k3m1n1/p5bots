// RGB LED: Fade the RGB LED
// Diagram: diagrams/rgb

// Board setup — you may need to change the port
var b = p5.board( 'COM3', 'arduino' );

var rgb;

function setup() {

  createCanvas( 300, 200 );

  var innerStr = '<p style="font-family:Arial;font-size:12px">'
  innerStr += '<b>&darr;</b> Fade </p>';

  createDiv( innerStr );

  rgb = b.pin( { r: 9, g: 10, b: 11 }, 'RGBLED' );
  var c = color( Math.floor( Math.random() * 255 ), Math.floor( Math.random() * 255 ), Math.floor( Math.random() * 255 ) );
  rgb.write( c );
  fill( c );
  noStroke();
  ellipse( 80, 80, 40, 40 );
}

function keyPressed() {
  if ( keyCode === DOWN_ARROW ) {
    rgb.write( [ 200, 200, 200 ] );
    rgb.fade( [ 200, 0, 3000 ], [ 200, 0, 5000, 50 ], [ 200, 0, 1000, 50 ] );
  }
}
