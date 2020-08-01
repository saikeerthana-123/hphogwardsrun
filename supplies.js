//creating tokens
function spawnSupplies(){
    if(frameCount % 90 === 0){
      randome = Math.round(random(100,1000));
      var supply = createSprite(randome,5,10,10);
      supply.scale = 0.4;
      supply.velocityY = 6;
      switch (rand) {
        case 1:
          supply.addImage(s1);
          break;
        case 2:
          supply.addImage(s2);
          break;
        case 3:
          supply.addImage(s3);
          break;
        case 4:
          supply.addImage(s4);
        case 5:
          supply.addImage(s5);
        case 6:
          supply.addImage(s6);
        case 7:
          supply.addImage(s7);
        case 8:
          supply.addImage(s8);
      }
      suppliesGroup.add(supply);
    }
    
  }