// Project Title

class Dog {
  constructor() {
    this.color = "black";
    this.breed = "poodle";
    this.age = 13;
    this.size = "smallish";
  }

  bark() {
    console.log("Arf!");
  }
}

let spot = new Dog();

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
