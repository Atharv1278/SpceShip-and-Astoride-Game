
var Spaceship ,Spaceship_running , Astoride , AstorideGroup , AmmoImage ;
var Space,SpaceImage , score , life

function preload(){
 SpaceImage=loadImage("images/Spacebg.jpg")
 Spaceshipimage=loadImage("images/space_Craft-removebg-preview.png")
 AmmoImage=loadImage("images/Ammo-removebg-preview.png")
 AstorideImage=loadImage("images/Astoride-removebg-preview.png")
 AstorideImage2=loadImage("images/Astoride_2-removebg-preview.png")
 AstorideImage3=loadImage("images/Astoride_3-removebg-preview.png")
 AstorideImage4=loadImage("images/Astoride_4-removebg-preview.png")
 AstorideImage5=loadImage("images/Astoride_5-removebg-preview.png")
 AstorideImage6=loadImage("images/Astoride_6-removebg-preview.png")
}

function setup(){
  createCanvas(1200,800)
  
  bg=createSprite(600,400,1200,800);
  bg.addImage("Space",SpaceImage)
  bg.velocityY-=2;
  //create a trex sprite
  Spaceship=createSprite(500,600,20,90)
  Spaceship.addImage("Spaceship",Spaceshipimage)

  

 score=0

 life=3
 


 
}

function draw(){
  background(SpaceImage);

  //if(keyDown("UP_ARROW")){
  //  Spaceship.velocityY-=0.5
 // }

  if(keyDown("LEFT_ARROW")){
    Spaceship.velocityX-=0.5
  }

  if(keyDown("RIGHT_ARROW")){
    Spaceship.velocityX+=0.5
  }

  

  if(keyDown("Space")){
    Ammo=createSprite(Spaceship.x,Spaceship.y,20,90);
    Ammo.addImage("Ammo",AmmoImage)
    Ammo.scale=0.2
    Ammo.velocityY-=18
    Ammo.lifetime=1200
  }

  if(bg.y<0){
    bg.y=bg.height/2
  }
   
  if(life===0){
    AstorideGroup.velocityY=0
    Spaceship.velocityX=0
    Spaceship.velocityY=0
    Ammo.velocityY=0
  }

    


  //camera.x=width
  //camera.y=Spaceship.y

  if(Ammo.isTouching(AstorideGroup)){
    AstorideGroup.destory()
    score+1
  }
  
  if(AstorideGroup.isTouching(Spaceship)){
    life-1
  }

  

  

  AstorideGroup = new Group();
  
  
 
 
 
  spawnAstoride()
 
  
drawSprites()
fill("Red")
textSize(20)
 text("score"+score,width-100,12)
 fill("Red")
textSize(50)
 text("life"+life,width-1120,12)
    
}


function spawnAstoride(){
 if (frameCount % 60 === 0){
   var Astoride = createSprite(random(100,500),10,20,20);
   Astoride.velocityY= +(6 + score/100);
   
    //generate random Astoride
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: Astoride.addImage(AstorideImage);
              break;
      case 2: Astoride.addImage(AstorideImage2);
              break;
      case 3: Astoride.addImage(AstorideImage3);
              break;
      case 4: Astoride.addImage(AstorideImage4);
              break;
      case 5: Astoride.addImage(AstorideImage5);
              break;
      case 6: Astoride.addImage(AstorideImage6);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the Astoride          
    Astoride.scale = 0.1;
    Astoride.lifetime = 1200;
   
   //add each Astoride to the group
   AstorideGroup.add(Astoride);
 }
}
