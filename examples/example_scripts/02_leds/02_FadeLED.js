// LED: Fade the LED
// Diagram: diagrams/led

// Board setup — you may need to change the port
var b = p5.board( 'COM3', 'arduino' );

// Fade LED

var led;

function setup() {
  led = b.pin( 9, 'LED' );

  createCanvas( 300, 200 );

  var innerStr = '<p style="font-family:Arial;font-size:12px">';
  innerStr += '<b>&darr;</b> Fade </p>';

  createDiv( innerStr );
}

function keyPressed() {
  if ( keyCode === DOWN_ARROW ) {
    led.write( 200 );
    led.fade( 200, 0 );
  }
}
