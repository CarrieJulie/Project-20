var bgImg, bg;
var bathAnim, bath;
var brushImg, brush;
var eatAnim, eat;
var gymAnim, gym;
var gym2Anim, gym2;
var moveAnim, move;
var sleepImg, sleep;
var astronaut;

function preload(){
  bgImg = loadImage("iss.png");
  brushImg = loadAnimation("brush.png");
  sleepImg = loadAnimation("sleep.png");
  bathAnim = loadAnimation("bath1.png", "bath2.png");
  eatAnim = loadAnimation("eat1.png","eat2.png");
  gymAnim = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  moveAnim = loadAnimation("move.png","move1.png");

}

function setup() {
  createCanvas(800,400);

  bg = createSprite(400,150);
  bg.addImage(bgImg);
  bg.scale = 0.175;

  astronaut = createSprite(420, 230, 50, 50);
  astronaut.addAnimation("sleep", sleepImg);
  astronaut.scale = 0.12;
  

}

function draw() {
  background(255,0,0);  

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("bath",bathAnim);
    astronaut.changeAnimation("bath");
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("eat",eatAnim);
    astronaut.changeAnimation("eat");
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("gym",gymAnim);
    astronaut.changeAnimation("gym");
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("brush",brushImg);
    astronaut.changeAnimation("brush");
  }

  if (keyDown("m")){
    astronaut.addAnimation("move",moveAnim);
    astronaut.changeAnimation("move");
  }
  drawSprites();
}