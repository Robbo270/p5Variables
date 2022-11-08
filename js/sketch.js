// Variables List - Top of Code = Global Scope
var firstName = 'Luke';
var thisIsAStrig = 'Hello';
var ThisIsAInteger = 100;
var ThisIsAnUndefinedVar;
var thisIsNull = null;
var ellipseX = 400;
var ellipseY = 400;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    console.log(ThisIsAInteger);
    background(220);
}

function draw() {
    

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 100);

    console.log(width, height);
}