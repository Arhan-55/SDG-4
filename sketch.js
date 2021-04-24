var normalmanImg,normalmanleftImg,groudImg,normalmanstandingImg,normalmanJumping;
var JokerImg,JokerleftImg,groudImg,JokerstandingImg,JokerJumping;
var bg1,bg2,bg3,bg4;
var villianGroup1,villianGroup2,villianGroup3;
var Instructions,level1,level2,level3,level4;

var bully_meter = 0;
var bully_meter_1,bully_meter_2,bully_meter_3,bully_meter_4,bully_meter_5;
var bully_meter_6,bully_meter_7,bully_meter_8,bully_meter_9,bully_meter_10;

var fight_smoke_Img;
var normal = 1;
var joker = 100;
var characterState = normal;

var END = 0;
var Level_1 = 1;
var Level_2 = 2;
var Level_3 = 3;
var Level_4 = 4;
var gameState = Level_1;

function preload(){
    normalmanImg = loadAnimation("images/Normal_Arthur(1).png","images/Normal_Arthur(2).png","images/Normal_Arthur(3).png","images/Normal_Arthur(4).png");
    normalmanleftImg = loadAnimation("images/Normal_Arthur_left(1).png","images/Normal_Arthur_left(2).png","images/Normal_Arthur_left(3).png","images/Normal_Arthur_left(4).png")
    normalmanstandingImg = loadAnimation("images/Normal_Arthur_standing.png");
    normalmanJumping = loadAnimation("images/Normal_Arthur_jumping.png")

    JokerImg = loadAnimation("images/joker_walking(1).png","images/joker_walking(2).png","images/joker_walking(3).png","images/joker_walking(4).png");
    JokerleftImg = loadAnimation("images/joker_walking_left(1).png","images/joker_walking_left(2).png","images/joker_walking_left(3).png","images/joker_walking_left(4).png")
    JokerstandingImg = loadAnimation("images/joker_standing.png");
    JokerJumping = loadAnimation("images/joker_jumping.png");

    groundImg = loadImage("images/ground.png");

    bg1 = loadImage("images/bg(1).png");
    bg2 = loadImage("images/bg(2).png");
    bg3 = loadImage("images/bg(3).png");
    bg4 = loadImage("images/bg(4).png");

    villianGroup1 = loadImage("images/villian_group(1).png");

    Instructions = loadImage("images/Instructions.png");
    level1 = loadImage("images/LEVEL(1).png");
    level2 = loadImage("images/LEVEL(2).png");

    fight_smoke_Img = loadImage("images/fight_smoke.png");

    bully_meter_1 = loadImage("images/bully_meter(1).png");
    bully_meter_2 = loadImage("images/bully_meter(2).png");
    bully_meter_3 = loadImage("images/bully_meter(3).png");
    bully_meter_4 = loadImage("images/bully_meter(4).png");
    bully_meter_5 = loadImage("images/bully_meter(5).png");
    bully_meter_6 = loadImage("images/bully_meter(6).png");
    bully_meter_7 = loadImage("images/bully_meter(7).png");
    bully_meter_8 = loadImage("images/bully_meter(8).png");
    bully_meter_9 = loadImage("images/bully_meter(9).png");
    bully_meter_10 = loadImage("images/bully_meter(10).png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    ground = createSprite(displayWidth/2+5780,displayHeight-40);
    ground.addImage(groundImg);
    ground.scale = 5.9;

    Joker = createSprite(displayWidth/2-700,displayHeight-150);
    Joker.addAnimation("standing",normalmanstandingImg);
    Joker.addAnimation("walking",normalmanImg);
    Joker.addAnimation("leftwalking",normalmanleftImg);
    Joker.addAnimation("jumping",normalmanJumping);

    Joker.addAnimation("joker_standing",JokerstandingImg);
    Joker.addAnimation("joker_walking",JokerImg);
    Joker.addAnimation("joker_leftwalking",JokerleftImg);
    Joker.addAnimation("joker_jumping",JokerJumping);

    Joker.scale = 1.5;

    bully_meter_sprite = createSprite(Joker.x + 1100,displayHeight/2-250);
    bully_meter_sprite.addImage(bully_meter_1);

    edge = createSprite(displayWidth/2-890,Joker.y-250,10,880)
    edge.visible = false;

    edge2 = createSprite(12033,Joker.y-250,10,880);
    edge2.visible = false;

    if(gameState === Level_1){
        level_1 = createSprite(displayWidth/2,displayHeight/2);
        level_1.addImage(level1);
        level_1.scale = 0.1;
        level_1.lifetime = 400;
    
        instructions = createSprite(displayWidth/2,displayHeight/2);
        instructions.addImage(Instructions);
        instructions.scale = 0.1;
        instructions.lifetime = 200;
    
        young_boys = createSprite(2683,displayHeight/2+250);
        young_boys.addImage(villianGroup1);
        young_boys.scale = 0.6;
        young_boys.collide(ground);

        young_boys2 = createSprite(4683,displayHeight/2+250);
        young_boys2.addImage(villianGroup1);
        young_boys2.scale = 0.6;
        young_boys2.collide(ground);

        young_boys3 = createSprite(6683,displayHeight/2+250);
        young_boys3.addImage(villianGroup1);
        young_boys3.scale = 0.6;
        young_boys3.collide(ground);

        young_boys4 = createSprite(8683,displayHeight/2+250);
        young_boys4.addImage(villianGroup1);
        young_boys4.scale = 0.6;
        young_boys4.collide(ground);
    }

    if(gameState === Level_2){
        bad_man = createSprite(2683,displayHeight/2+250);
        bad_man.addImage(villianGroup1);
        bad_man.scale = 0.6;
        bad_man.collide(ground);

        bad_man2 = createSprite(4683,displayHeight/2+250);
        bad_man2.addImage(villianGroup1);
        bad_man2.scale = 0.6;
        bad_man2.collide(ground);

        bad_man3 = createSprite(6683,displayHeight/2+250);
        bad_man3.addImage(villianGroup1);
        bad_man3.scale = 0.6;
        bad_man3.collide(ground);

        bad_man4 = createSprite(8683,displayHeight/2+250);
        bad_man4.addImage(villianGroup1);
        bad_man4.scale = 0.6;
        bad_man4.collide(ground);

        
   }
}

function draw(){
    
    if(characterState === normal){
        NormalManControls();
    }

    if(characterState === joker){
        JokerControls();
    }

    if(gameState === Level_1){
        background(bg1);
        if(Joker.isTouching(young_boys)){
         smoke = createSprite(Joker.x,Joker.y);
         smoke.addImage(fight_smoke_Img);
         smoke.scale = 0.5;
         smoke.lifetime = 5;

         young_boys.velocityX = -5;
         bully_meter += 0.1;
      }
        if(Joker.isTouching(young_boys2)){
          smoke = createSprite(Joker.x,Joker.y);
          smoke.addImage(fight_smoke_Img);
          smoke.scale = 0.5;
          smoke.lifetime = 5;
          
          young_boys2.velocityX = -5;
          bully_meter += 0.1;
     }
        if(Joker.isTouching(young_boys3)){
           smoke = createSprite(Joker.x,Joker.y);
           smoke.addImage(fight_smoke_Img);
           smoke.scale = 0.5;
           smoke.lifetime = 5;

           young_boys3.velocityX = -5;
           bully_meter += 0.1;
     }
        if(Joker.isTouching(young_boys4)){
           smoke = createSprite(Joker.x,Joker.y);
           smoke.addImage(fight_smoke_Img);
           smoke.scale = 0.5;
           smoke.lifetime = 5;

           young_boys4.velocityX = -5;
           bully_meter += 0.1;
     }

        if(Joker.isTouching(edge2)){
            gameState = Level_2;
        }
    }

    if(gameState === Level_2){
        background(bg2);

        level_2 = createSprite(displayWidth/2,displayHeight/2);
        level_2.addImage(level2);
        level_2.scale = 0.1;
        level_2.lifetime = 400;

       

        Joker.x = displayWidth/2-700;
        Joker.y = displayHeight-150;

        if(characterState === normal){
            NormalManControls();
        }
    
        if(characterState === joker){
            JokerControls();
        }  
        if(Joker.isTouching(bad_man)){
            smoke = createSprite(Joker.x,Joker.y);
            smoke.addImage(fight_smoke_Img);
            smoke.scale = 0.5;
            smoke.lifetime = 5;
   
            bad_man.velocityX = -5;
            bully_meter += 0.1;
         }
           if(Joker.isTouching(bad_man2)){
             smoke = createSprite(Joker.x,Joker.y);
             smoke.addImage(fight_smoke_Img);
             smoke.scale = 0.5;
             smoke.lifetime = 5;
             
             bad_man2.velocityX = -5;
             bully_meter += 0.1;
        }
           if(Joker.isTouching(bad_man3)){
              smoke = createSprite(Joker.x,Joker.y);
              smoke.addImage(fight_smoke_Img);
              smoke.scale = 0.5;
              smoke.lifetime = 5;
   
              bad_man3.velocityX = -5;
              bully_meter += 0.1;
        }
           if(Joker.isTouching(bad_man4)){
              smoke = createSprite(Joker.x,Joker.y);
              smoke.addImage(fight_smoke_Img);
              smoke.scale = 0.5;
              smoke.lifetime = 5;
   
              bad_man4.velocityX = -5;
              bully_meter += 0.1;
        }
   
           if(Joker.isTouching(edge2)){
               gameState = Level_3;
           }
        
           young_boys.destroy();
           young_boys2.destroy();
           young_boys3.destroy();
           young_boys4.destroy();
        
          

}

    bully_meter_sprite.x = Joker.x + 1000; 

    Joker.velocityY = Joker.velocityY + 0.8;

    Joker.collide(ground);

    camera.position.x = Joker.x+490;
    Joker.bounceOff(edge);

    Bully_Meter();
    drawSprites();

    strokeWeight(1.5);
    stroke("red");
    fill("red");
    textSize(42);
    text("Bully Meter",Joker.x + 900,displayHeight/2-110);
}

function NormalManControls(){
    if(keyWentUp("space")){
        Joker.changeAnimation("standing",normalmanstandingImg);
    }

    if(keyWentDown("space")){
        Joker.changeAnimation("jumping",normalmanJumping);
    }

    if(keyDown("right") && Joker.y <= displayHeight-180){
        Joker.x = Joker.x+20;
    }

    if(keyDown("space") && Joker.y >= displayHeight-180){
        Joker.velocityY = -20;
    }

    if(keyDown("left") && Joker.y <= displayHeight-180){
        Joker.x = Joker.x-20;
    }

    if(Joker.y >= displayHeight-180){
        if(keyWentUp("right")){
        Joker.changeAnimation("standing",normalmanstandingImg);
        }

        if(keyWentDown("right")){
        Joker.changeAnimation("walking",normalmanImg);
        }

    if(keyDown("right")){
        Joker.x = Joker.x+30;
    }

    if(keyWentUp("left")){
        Joker.changeAnimation("standing",normalmanstandingImg);
    }

    if(keyWentDown("left")){
        Joker.changeAnimation("leftwalking",normalmanleftImg);
    }

    if(keyDown("left")){
        Joker.x = Joker.x-30;
    }
  }
}

function JokerControls(){
    if(keyWentUp("space")){
        Joker.changeAnimation("joker_standing",JokerstandingImg);
    }

    if(keyWentDown("space")){
        Joker.changeAnimation("joker_jumping",JokerJumping);
    }

    if(keyDown("right") && Joker.y <= displayHeight-180){
        Joker.x = Joker.x+20;
    }

    if(keyDown("space") && Joker.y >= displayHeight-180){
        Joker.velocityY = -20;
    }

    if(keyDown("left") && Joker.y <= displayHeight-180){
        Joker.x = Joker.x-20;
    }

    if(Joker.y >= displayHeight-180){
        if(keyWentUp("right")){
        Joker.changeAnimation("joker_standing",JokerstandingImg);
        }

        if(keyWentDown("right")){
        Joker.changeAnimation("joker_walking",JokerImg);
        }

    if(keyDown("right")){
        Joker.x = Joker.x+30;
    }

    if(keyWentUp("left")){
        Joker.changeAnimation("joker_standing",JokerstandingImg);
    }

    if(keyWentDown("left")){
        Joker.changeAnimation("joker_leftwalking",JokerleftImg);
    }

    if(keyDown("left")){
        Joker.x = Joker.x-30;
    }
  }
}

function Bully_Meter(){
    if(bully_meter >= 2){
        bully_meter_sprite.addImage(bully_meter_2);
    }
    if(bully_meter >= 4){
        bully_meter_sprite.addImage(bully_meter_3);
    }
    if(bully_meter >= 6){
        bully_meter_sprite.addImage(bully_meter_4);
    }
    if(bully_meter >= 8){
        bully_meter_sprite.addImage(bully_meter_5);
    }
    if(bully_meter >= 10){
        bully_meter_sprite.addImage(bully_meter_6);
    }
    if(bully_meter >= 12){
        bully_meter_sprite.addImage(bully_meter_7);
    }
    if(bully_meter >= 14){
        bully_meter_sprite.addImage(bully_meter_8);
    }
    if(bully_meter >= 16){
        bully_meter_sprite.addImage(bully_meter_9);
    }
    if(bully_meter >= 18){
        bully_meter_sprite.addImage(bully_meter_10);
    }
}