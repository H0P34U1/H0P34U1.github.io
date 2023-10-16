/*
Abdul Frimpong
10/2/2023
click m to activate the pencil to start drawing.
to change the pencil color click the keys r,o,y,g,b,v.
click q to switch to the eraser.
click w to switch back the normal pencil.
click e to erase everything on screen.
click p to spawn rectangles directly on the cursor.
click n then e to erase the rectangles.
Scroll with your mouse to increase/decrease pencil and eraser thickness
The header will fill with which ever color you are using.

Extra For Experts:
Using the trail to draw
using the mouse scroll
spawning and erasing rectangles

Also i am confused as to how to add the start screen with a click to play 
button because i need to background to not loop to draw, I couldnt get it
to work on this.

*/

let rectangles = [];
let pencilColor;
let state;
let thickness;
let isDrawingEnabled;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);

  pencilColor = color(0, 0, 0);
  state = "drawing";
  thickness = 5;
  isDrawingEnabled = false;
}

function draw() {
  if (isDrawingEnabled) {
    trail();
  } 

  textAlign(CENTER, CENTER);
  textSize(26);
  text("Drawing Game", width/2, 30);
  
  
  rectangles.forEach(rectangle => {
    rectangle.display();
  });    
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
  thickness = constrain(thickness, 1, 30);
  return false; 
}

function keyPressed() {
  if (key === "m") {
    isDrawingEnabled = !isDrawingEnabled;
  } else if (isDrawingEnabled) {
    if (key === "r") {
      pencilColor = color(255, 0, 0);  // Change color to red
    } else if (key === "g") {
      pencilColor = color(0, 255, 0); // Change color to green
    } else if (key === "b") {
      pencilColor = color(0, 0, 255); // Change color to blue
    } else if (key === "y") {
      pencilColor = color(255, 255, 0); // Change color to yellow
    } else if (key === "o") {
      pencilColor = color(255, 127, 0); // Change color to orange
    } else if (key === "v") {
      pencilColor = color(148, 0, 211); // Change color to violet  
    } else if (key === "q") {                                 
      pencilColor = color(250, 250, 250); // Change color to white 
    } else if (key === "w") {                               
      pencilColor = color(0, 0, 0); // Change color to black     
    } else if (key === "e") {                                   
      background(250); // erase everything                    
    } else if (key === "P") {                               
      rectangles.push(new Rectangle(mouseX, mouseY, 50, 50)); //creates rectangle
    } else if (key === "n") {                              
      eraseRectangles(); // erase rect                         
    }
  }
}

function eraseRectangles() {
  rectangles = []; 
}

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
  }

  display() {
    noFill();
    rect(this.x, this.y, 50, 50);
  }   
}
