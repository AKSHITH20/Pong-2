var compPaddle,playerPaddle, Ball;
var bottomEdge,topEdge;

function preload() {
  compPaddleimg=loadImage("Sprites/Doctor.jpg");
  playerPaddleimg=loadImage("Sprites/Boy.jpg");
}

function setup() {  
  createCanvas(800,800);
  compPaddle=createSprite(80, 400, 10, 100);
  compPaddle.addImage("Doc",compPaddleimg);
  compPaddle.scale = 0.2;
  //compPaddle.shapeColor = "cyan";
  playerPaddle=createSprite(720, 400, 10, 100);
  playerPaddle.addImage("Boc",playerPaddleimg);
  playerPaddle.scale=0.18;
  //playerPaddle.shapeColor = "cyan";
  Ball=createSprite(400, 400, 20, 20);
  Ball.shapeColor = "magenta";
  Ball.velocityX = 3;
  Ball.velocityY = 3;
  
  bottomEdge=createSprite(400,800,800,10);
  topEdge=createSprite(400,0,800,10);

  }

function draw() {
  background(100,200,mouseY); 
  createEdgeSprites();
  
  playerPaddle.y = World.mouseY;
  compPaddle.y = Ball.y;

  //fill("white");
  //for(var y=0; y>400; y=y+20){
  //line(this.position.x, this.position.y, this.position.x, this.position.y+10);
  //}

  Ball.bounceOff(bottomEdge);
  Ball.bounceOff(topEdge);
  Ball.bounceOff(playerPaddle);
  Ball.bounceOff(compPaddle); 

  if(Ball.x>800||Ball.x<0){
    compPaddle.x=80;
    compPaddle.y=400;
  }

  drawSprites();
}