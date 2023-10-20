// Arrays and Object Notation Assignment

let colors = {
  r: 0,
  g: 0,
  b: 0,
};

let ballArray = [];
let boxArray = [];

function setup() {
  createCanvas(1000, 600);
  for (let q = 0; q < 4; q++) {
    ballArray[q] = new ball();
  }
  for (let w = 0; w < 4; w++) {
    boxArray[w] = new boxx();
  }
}

function mouseDragged() {
  ballArray.push(new ball(mouseX, mouseY));
  boxArray.push(new boxx(mouseX, mouseY));
}

// function mouse() {
//   boxArray.push(new boxx(mouseX, mouseY));
// }
  
function draw() {
  background(0);
  for (let q = 0; q < ballArray.length; q++) {
    ballArray[q].move();
    ballArray[q].display();
  }
  
  for (let w = 0; w < boxArray.length; w++) {
    boxArray[w].move();
    boxArray[w].display();
  }

  if (ballArray.length > 200) {
    ballArray.splice(0, 1);
  }
  
  if (boxArray.length > 102) {
    boxArray.splice(0, 1);
  }
  
}


function ball(mouseX, mouseY) {
  this.x = random(0, width);
  this.y = random(0, height);

  (this.display = function () {
    noStroke();
    colors.r = random(100, 255);
    colors.g = 0;
    colors.b = random(0, 255);
    fill(colors.r, colors.g, colors.b, 100);
    ellipse(this.x, this.y, random(0, 30), random(0, 30));
  }),
    (this.move = function () {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    });
}

function boxx(mouseX, mouseY) {
  this.x = random(0, width);
  this.y = random(0, height);

  (this.display = function () {
    noStroke();
    colors.r = 0;
    colors.g = random(0, 216);
    colors.b = random(100, 240);
    fill(colors.r, colors.g, colors.b, 100);
    rect(this.x, this.y, random(0, 30));
  }),
    (this.move = function () {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    });
}
