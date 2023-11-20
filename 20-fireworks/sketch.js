// Fireworks


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

class Particles {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = 255;
    this.g = 0;    
    this.b = 0;
    this.alpha = 0;
  }

  display () {
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius*2); 
  }
}
