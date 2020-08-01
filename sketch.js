//creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Detector = Matter.Detector;

//creating variables
var engine, world;
var player, backgroundimg1, bg2;
var backgroundSprite;
var rand, randome, randomee;
var obs1,obs2,obs3,obs4;
var s1,s2,s3,s4,s5,s6,s7,s8;
var obstaclesGroup;
var suppliesGroup, collectedSupplies;
var out;
var slow,normal,fast,save,pup;
var voldemort;
var vold;
var nimbus;
var db;
var edges;
var dobby;
var riddle;
var nimbusGroup;
var gameState = 0;
var score = 0;
var hermoine,ron;
var hermoineGranger,ronWeasley,harryPotter;
var startbutton, startbuttonImage;
var rs;
var state0Sprites, state1Sprites, state2Sprites;
var restart;

function preload(){
  //loading images
  loadImages();
  //loading sounds
  loadSounds();
 }

function setup() {
   setting();
}

function draw() {
  //background
  background("white"); 
  //creating edges
  edges = createEdgeSprites();
  if(gameState === 0){
    drawSprites(state0Sprites);
    out.stop();
    text("PowerUp.It is thanks to this item",windowWidth/2,windowHeight/2+80);
    text("That you can sweep the floor",windowWidth/2,windowHeight/2+100);
    text("It’s also used by witches",windowWidth/2,windowHeight/2+120);
    text(" So they can fly and soar",windowWidth/2,windowHeight/2+140);
    text("also collect school supplies on your way",windowWidth/2,windowHeight/2+160);
    if(mousePressedOver(harryPotter)){
      player.addImage(harryPotterImage);
      player.scale = 0.8;
    }
    if(mousePressedOver(hermoineGranger)){
      player.addImage(hermoine);
    }
    if(mousePressedOver(ronWeasley)){
      player.addImage(ron);
    }
    if(mousePressedOver(startbutton)){
      gameState = "play";
      //removing play and characters
      startbutton.visible = false
      hermoineGranger.visible = false;
      ronWeasley.visible = false
      harryPotter.visible = false
      backgroundSprite.addImage(backgroundimg1);
    }
  }
  if(gameState === "play"){
    
    backgroundSprite.velocityY = 3;
    //setting background sprite
    if (backgroundSprite.y >= windowHeight) {
      backgroundSprite.y = windowHeight/2;
    }
     //creating obstacles
    if(frameCount % 100 === 0){
        randome = Math.round(random(400,900));
        var obs = createSprite(randome,5,10,10);
        rand = Math.round(random(1,4));
        obs.velocityY = 6;
        obs.setCollider("circle",0,0,150)
        switch (rand) {
          case 1:
            obs.addImage(obs1);
            break;
          case 2:
            obs.addImage(obs2);
            break;
          case 3:
            obs.addImage(obs3);
            break;
          case 4:
            obs.addImage(obs4);
        }
          obs.scale = 0.5;
        obstaclesGroup.add(obs);
      }
      //allowing player to jump over obstacles
      if (keyDown("space")) {
        player.velocityY = -6;
      }
      //allowing player to move toward left or right
      if(keyCode === 37){
        player.x = player.x - 10;
      }
      if(keyCode === 39){
        player.x = player.x + 10;
      }
      player.velocityY = player.velocityY + 0.8;
      //powerup with nimbus2001
      if(player.isTouching(nimbusGroup)){
        dobby.visible = true;
        dobby.x = player.x + 20;
        dobby.y = player.y - 200;
        dobby.addImage(db);
        dobby.lifetime = 700;
        //destroying obstacles when dobby hits;
        if(dobby.isTouching(obstaclesGroup)){
          obstaclesGroup.destroyEach();
        }
      }
            //score
      if(player.isTouching(suppliesGroup)) {
        score += 1;
        powerUp.play();
        suppliesGroup.destroyEach();
        
      }
      //calling spawnNimbus function
      spawnNimbus();
      //calling spawnSupplies function
      spawnSupplies();
      //play music if level up
      if(score <= 10){
        if (slow.isPlaying() == false)
          slow.loop();
      }
      else if(score >10 && score <40){
        slow.loop();
        if (normal.isPlaying() == false)
          normal.play();
      }
      else {
        normal.loop();
        if (fast.isPlaying() == false)
          fast.play();
      }
      //camera
         // camera.position.x = player.x;
         // camera.position.y = player.y;

      //making player collide with edges
      player.collide(edges);
      //drawing sprites
    
      //ending game when player is touching obstacles
      if (obstaclesGroup.isTouching(player)){
        gameState = "end";
      }
      drawSprites();

  }
    if(gameState === "end"){
        //state1Sprites.setVisibleEach(false);
        backgroundSprite.addImage(bg2);
        restart.visible = true;
        backgroundSprite.velocityY = 0;
        obstaclesGroup.destroyEach();
        
        player.velocityX = 0;
        player.velocityY = 0;
        slow.stop();
        normal.pause();
        fast.pause();
        if (out.isPlaying() == false)
          out.play();
        
        drawSprites(state2Sprites);
        if(mousePressedOver(restart)){
          gameState = 0;
          restart.visible = false
          startbutton.visible = true
          hermoineGranger.visible = true;
          ronWeasley.visible = true
          harryPotter.visible = true
        }
      }
    
}

