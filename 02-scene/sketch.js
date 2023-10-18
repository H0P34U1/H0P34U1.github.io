/*
Abdul Frimpong
10/17/2023
click spacebar to activate the pencil.
click e to erase everything on screen.
Scroll with your mouse to increase/decrease pencil thickness
*/

let pencilColor;
let thickness;
let isDrawingEnabled;

function colorCode(){
  noStroke();
  fill(200, 200, 200);
  rect(0, 0, 40, height/6);
  fill("black");
  rect(0, 50, 40, height/6);
  fill("red");
  rect(0, 100, 40, height/6);
  fill(153, 51, 0);
  rect(0, 150, 40, height/6);
  fill("orange");
  rect(0, 200, 40, height/6);
  fill("yellow");
  rect(0, 250, 40, height/6);
  fill("lime");
  rect(0, 300, 40, height/6);
  fill("green");
  rect(0, 350, 40, height/6);
  fill("aqua"); 
  rect(0, 400, 40, height/6);
  fill("blue");
  rect(0, 450, 40, height/6);
  fill("purple");
  rect(0, 500, 40, height/6);
  fill(255, 102, 255);
  rect(0, 550, 40, height/6);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);

  pencilColor = color(0, 0, 0);
  thickness = 5;
  isDrawingEnabled = false;
}

function draw() {
  if (isDrawingEnabled) {
    trail();
  }

  noStroke();
  fill(50, 50, 50);
  rect(windowWidth/2, 0, 550, 50, 80);
  fill(pencilColor);
  ellipse(650, 22, 25);
  fill("white");
  ellipse(600, 22, thickness);

  
  noStroke();
  textSize(26);
  fill("white");
  text("Drawing Game", 750, 30);  
  
  colorCode();
}

function mousePressed() {
  if (mouseX < 20) {
    if (mouseY < 50) {
      pencilColor = color(250, 250, 250);
    }
    else if (mouseY < 100) {
      pencilColor = color("black");
    }
    else if (mouseY < 150) {
      pencilColor = color("red");
    }
    else if (mouseY < 200) {
      pencilColor = color(153, 51, 0);
    }
    else if (mouseY < 250) {
      pencilColor = color("orange");
    }
    else if (mouseY < 300) {
      pencilColor = color("yellow");
    }
    else if (mouseY < 350) {
      pencilColor = color("lime");
    }
    else if (mouseY < 400) {
      pencilColor = color("green");
    }
    else if (mouseY < 450) {
      pencilColor = color("aqua");
    }
    else if (mouseY < 500) {
      pencilColor = color("blue");
    }
    else if (mouseY < 550) {
      pencilColor = color("purple");
    }
    else if (mouseY < 600) {
      pencilColor = color(255, 102, 255);
    }
  }
}

function trail() {
  if (mouseIsPressed) {
    stroke(pencilColor);
    strokeWeight(thickness);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function mouseWheel(event) {
  thickness += event.delta / 100; 
  thickness = constrain(thickness, 1, 20);
  return false; 
}

function keyPressed() {
  if (key === " ") {
    isDrawingEnabled = !isDrawingEnabled;
  } 
  else if (isDrawingEnabled) {
    if (key === "e") {
      background(250); // erase everything
    } 
  }
}
