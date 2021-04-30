const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall,ground;
var box1, box2, box3;



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = new Box(width/2, 670, width, 20);

	box1=new Box(560,610,20,100);
	box2=new Box(670,650,202,20);
	box3=new Box(780,610,20,100);

	//Create paper ball
	paperBall = new Ball(100, 640, 30);
	
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  drawSprites();

  box1.display();
  box2.display();
  box3.display();

  fill("brown");
  ground.display();

  fill("white")
  paperBall.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:300, y:-200})
	}
}




