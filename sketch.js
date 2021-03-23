
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(400,680,width,20,{isStatic:true})
	World.add(world,ground);
	Cbody=Bodies.circle(100,10,20,{restitution:1})
	World.add(world,Cbody);
	b1 = new Box(400,400);
	b2 = new Box(440,400);
	b3 = new Box(480,400);
	b4 = new Box(520,400);
	b5 = new Box(560,400);
	
	
	R1= new Rope (b1.bodie,{x:400,y:350})
	R2= new Rope (b2.bodie,{x:440,y:350})
	R3= new Rope (b3.bodie,{x:480,y:350})
	R4= new Rope (b4.bodie,{x:520,y:350})
	R5= new Rope (b5.bodie,{x:560,y:350})
	Engine.run(engine);
  
}


function draw() {
	background(250,250,250);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,20)
  ellipseMode(CENTER);
  ellipse(Cbody.position.x,Cbody.position.y,40,40);
  console.log(ground);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  R1.display();
  R2.display();
  R3.display();
  R4.display();
  R5.display();
}


function keyPressed(){
	if(keyCode==32){
		Matter.Body.applyForce(b1.bodie,b1.bodie.position,{x:-40,y:-40});
	}
}

