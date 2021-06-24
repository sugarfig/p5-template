// let colorlist = ['gold', 'yellow', 'turquoise', 'red']

let backgroundcol;
// let osc;
var y = 60; // 100
var d = 80; // 130
var percentage;
var color;

function setup() {
    // TRY CHANGING the following variable:
    backgroundcol = 'black';
    // color(245, 224, 66);
    createCanvas(windowWidth, windowHeight);

    // osc = new p5.Oscillator();
    // osc.setType('sawtooth');
    // osc.freq(220);
    // osc.amp(0.5);
    // osc.start();

    color1 = color(255, 0, 0);
    color2 = color(0, 0, 255);

    // percentage = map(mouseY, 0, height, 0, 1);
    // // colorMode(HSB);
    // color = lerpColor(color1, color2, percentage);
    // stroke(245, 66, 173);
    // stroke(random(colorlist));

    noFill();
    angleMode(DEGREES);
}

function draw() 
{
    background(backgroundcol);
    // osc.freq(map(mouseX, 0, width, 100, 1000));
    // osc.amp(map(mouseY, 0, height, 0, 1));
    translate(width / 2, height / 2);

    // TRY CHANGING the following three variables:

    let length = 1;
    let angle = 30;
    let loops = 500;

    percentage = map(mouseY, 0, height, 0, 1);
    colorMode(HSB);
    color = lerpColor(color1, color2, percentage);
    stroke(color);



    for(var i = 0; i < loops; i++) 
    {
      rotate(angle);
      ellipse(-length/2, -length/2, mouseX, mouseY);
      length = length + 1;
    }

 
}
