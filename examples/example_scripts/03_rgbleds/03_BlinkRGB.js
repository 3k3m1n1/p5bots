// RGB LED: Blink the RGB LED
// Diagram: diagrams/rgb

// Board setup — you may need to change the port
var b = p5.board( 'COM3', 'arduino' );

// RGB LED On/Off/Blink
var rgb, c;

function setup() {

  createCanvas( 300, 200 );

  var innerStr = '<p style="font-family:Arial;font-size:12px">'
  innerStr += '<b>&larr;</b> LED on &nbsp; | &nbsp;';
  innerStr += '<b>&rarr;</b> LED off &nbsp; | &nbsp;';
  innerStr += '<b>&uarr;</b> Blink LED &nbsp; | &nbsp;';
  innerStr += '<b>&darr;</b> Stop Blinking </p>';

  createDiv( innerStr );

  rgb = b.pin( { r: 9, g: 10, b: 11 }, b.RGBLED );
  c = color( Math.floor( Math.random() * 255 ), Math.floor( Math.random() * 255 ), Math.floor( Math.random() * 255 ) );
  rgb.write( c );
  fill( c );
  noStroke();
  ellipse( 150, 100, 40, 40 );
}

function keyPressed() {
  if ( keyCode === LEFT_ARROW ) {
    rgb.on();
  }
  else if ( keyCode === RIGHT_ARROW ) {
    rgb.off();
  }
  else if ( keyCode === UP_ARROW ) {
    rgb.blink();
  }
  else if ( keyCode === DOWN_ARROW ) {
    rgb.noBlink();
  }
}
