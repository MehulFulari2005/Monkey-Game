
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  FoodGroup=new Group()
  obstacle=new Group()

}



function setup() {
createCanvas(720,600); 

score=0
survivalTime=0
  
ground=createSprite(50,500,850,20)
  
monkey=createSprite(100,500,10,10)
monkey.addAnimation("monkeyrunning",monkey_running)
monkey.scale=0.1  

}




function draw() {
background("lightgreen")
drawSprites()  

monkey.velocityY=monkey.velocityY+0.3
monkey.collide(ground)  
  
ground.velocityX=-7
ground.x=ground.width/2;  
  
if(keyDown("space")&&monkey.y >= 350){
  monkey.velocityY=-10
} 


if(World.frameCount%200===0){
  fruits()
}

if(World.frameCount%250===0){
  stones()
}

if(monkey.isTouching(FoodGroup)){
  FoodGroup.destroyEach()
  score=score+1
}

fill("white")
text("Score:"+ score,500,50)

fill("black")
var survivalTime=Math.round(frameCount/frameRate());
text("Survival Time:"+ survivalTime,150,50)
}



function fruits(){

banana=createSprite(800,Math.round(random(150,300)),10,10)
banana.addImage(bananaImage)  
banana.scale=0.1  
banana.velocityX=-3
banana.lifetime=-1
FoodGroup.add(banana)

}



function stones(){
  
obstacle=createSprite(800,465,10,10)  
obstacle.addImage(obstaceImage)  
obstacle.velocityX=-4  
obstacle.scale=0.2
obstacle.lifetime=-1
}





