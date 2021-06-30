
let backgroundcol;

var y = 60;
var d = 80; 
var percentage;
var color;

function setup() {
    
    backgroundcol = 'black';
    
    createCanvas(windowWidth, windowHeight);

    color1 = color(255, 0, 0);
    color2 = color(0, 0, 255);

    noFill();
    angleMode(DEGREES);
}

function draw() 
{
    background(backgroundcol);
    translate(width / 2, height / 2);


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
