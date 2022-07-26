var box; 

function setup() {
  createCanvas(1200,400);
  box = createSprite(200,200,50,50);
}

function draw() 
{
  background(30);
  text (World.mouseX+","+World.mouseY,50,50);

if(keyIsDown(RIGHT_ARROW)){
  box.x = box.x +4;
}
  drawSprites();
}




