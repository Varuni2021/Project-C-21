var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  bullet = createSprite(50,100,50,50);
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(0);  
  wall.shapeColor = (80,80,80);
  bullet.velocityX = speed;
  thickness=random(22,83);
  speed=random(220,320);
  weight=random(30,50);

  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10)
    {
      wall.shpeColor=color(0,255,0);
    }


  }
  hasCollided(bullet,wall)();
  drawSprites();
}

function hasCollided(bullet,wall)
{
  bulletRightEdge= bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}