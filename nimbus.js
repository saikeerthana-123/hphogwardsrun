//creating nimbus 2001
function spawnNimbus(){
    if(frameCount % 100 === 0){
    var nimbus2001 = createSprite(randome,200,50,50) ;
    nimbus2001.addImage(nimbus);
    nimbus2001.scale = 0.4;
    nimbus2001.lifetime = 100;
    nimbus2001.velocityY = 6;
    nimbus2001.setCollider('rectangle',0,0,200,30);
    //dobby
    dobby = createSprite(0,0,40,40);
    dobby.visible = false;
    dobby.scale = 0.4;
    nimbusGroup.add(nimbus2001);
    //dobby.visible = true;
    if(save.isPlaying() == false)
      save.play()
    }
  }
  
