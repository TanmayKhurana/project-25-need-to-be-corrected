
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(1100, 475, 10000, 20)
	groundSprite.shapeColor = color("red")
	//Create the Bodies Here.

	

	ground = Bodies.rectangle(100, 430, 10000, 20, {isStatic:true})
	World.add(world, ground)

	side1 = new Dustbin(940, 400, 150, 130)
	

	ball = new Paper(90, 150, 2)

	Engine.run(engine);

	
 
}	


function draw() {
  rectMode(CENTER);
  background("pink");

  side1.display()
  
  ball.display()
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{
			x:0.76,
			y:-0.76
		}
		)
	}
}