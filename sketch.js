
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone
var ground	
var mango1,mango2,mango3,mango4,mango5
var detectollision

function preload()
{
	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=createSprite(235,620,30)

ground=createSprite(300,700,1000,40)
tree=createSprite(500,620,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)

tree.display();
  stone.display();
  drawSprites();
 
}



