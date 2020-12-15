
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=0;
var ground;


function preload(){
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png",   "sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 

  bananaImage = loadImage("banana.png");

  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
 ground = createSprite(400,350,1000,10);
  ground.velocityX=-4;
console.log(ground.x);
  ground.x = ground.width/2;
  
  
}


function draw() {
background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
 
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  
    
    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
    
   monkey.collide(ground);
    
      Bananas();
      Obstacle();
 
  
  
 
  
  drawSprites();
  
}
 function Bananas() {
  
  if (frameCount % 120 === 0) {
    var banana = createSprite(600,600,5,10);
    banana.y = Math.round(random(250,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
    banana.lifetime = 200;
    
    }
  
}

function Obstacle() {
  
  if (frameCount % 120 === 0) {
    var obstacle = createSprite(400,325,5,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     
    obstacle.lifetime = 200;
    
    }
  
}


