// Images and sound demo

let mario;
let jumpsound;
let backgroundSound;
let scaler = 0.5;

function preload() {
  mario = loadImage("mario.png");
  jumpsound = loadSound("swish.wav");
  backgroundSound = loadSound("awesome.wav");

  backgroundSound.setVolume(0.5);
  jumpsound.setVolume(1.5);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);

  image(mario, mouseX, mouseY, mario.width * scaler, mario.height * scaler);
}

function mousePressed() {
  jumpsound.play();

  if (!backgroundSound.isPlaying()) {
    backgroundSound.loop();
  }
}