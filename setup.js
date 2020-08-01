//function setup
function setting(){
    //background
   backgroundSprite = createSprite(windowWidth/2,windowHeight/2);
   backgroundSprite.addImage(backgroundimg1);
   
   backgroundSprite.scale = 2.5;

  //creating canvas
  createCanvas(windowWidth,windowHeight);
  //creating characters
  //ron 
  ronWeasley = createSprite(300,80,10,10);
  ronWeasley.addImage(ron);
  ronWeasley.scale = 0.6;
  ronWeasley.setCollider("circle",0,0,150);
  //Hermoine
  hermoineGranger = createSprite(500,80,10,10);
  hermoineGranger.addImage(hermoine)
  hermoineGranger.setCollider("circle",10,0,100);
  //harry
  harryPotter = createSprite(700,80,10,10);
  harryPotter.addImage(harryPotterImage)
  harryPotter.setCollider("circle",20,0,100);

  //creating engine and world
  engine = Engine.create();
  world = engine.world;
  //creating obstacles group
  obstaclesGroup = createGroup();
  //creating supplies group
  suppliesGroup = createGroup();
  collectedSupplies = 0;
  //creating nimbus group
  nimbusGroup = createGroup();
   //player
  player = createSprite(windowWidth/2 - 300,windowHeight/2+100,300,300);
  //adding default image
  player.addImage(harryPotterImage);
  //setting collider for player
  player.setCollider('circle',10,0,100);
  //voldemort
  vold = createSprite(150,500,50,50);
  vold.velocityY = 6;  
  vold.addImage(voldemort);
  //Play button
  startbutton = createSprite(windowWidth/2,windowHeight/2,50,50);
  startbutton.addImage(startbuttonImage);
  startbutton.scale = 0.5;

  restart = createSprite(windowWidth/2,windowHeight/2,50,50);
  restart.addImage(rs);
  restart.visible = false;
  //ocean
  bg2.scale = 10;

  state0Sprites = createGroup();
  state1Sprites = createGroup();
  state2Sprites = createGroup();

  state0Sprites.add(player)
  state0Sprites.add(startbutton)
  state0Sprites.add(hermoineGranger)
  state0Sprites.add(ronWeasley)
  state0Sprites.add(harryPotter);

  //state1Sprites.add(obstaclesGroup);
  //state1Sprites.add(suppliesGroup)
  state1Sprites.add(player)
  state1Sprites.add(backgroundSprite)
  state1Sprites.add(vold)
  //state1Sprites.add(nimbus2001)
  //state1Sprites.add(dobby)

  state2Sprites.add(player)
  state2Sprites.add(backgroundSprite)
  state2Sprites.add(restart)
  
}