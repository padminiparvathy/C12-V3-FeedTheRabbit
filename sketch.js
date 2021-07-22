var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves;
var appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  var select_sprites=Math.round(random(1,2));

  if(frameCount%100==0){
    if(select_sprites==1){
      createApple();
    }
    else{
      createLeaves();
    }
  }
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApple(){
apple = createSprite(random(50,340),40,10,10);
apple.addImage(appleImg);
apple.scale = .05;
apple.velocityY = 3;
apple.lifeTime = 250;
}

function createLeaves(){
  leaves = createSprite(random(50,340),40,10,10);
  leaves.addImage(leafImg);
  leaves.scale = .05;
  leaves.velocityY = 3;
  leaves.lifeTime = 250;
  }