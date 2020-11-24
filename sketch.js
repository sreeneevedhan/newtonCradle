
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Ground(400,200,600,50);

	bob=new Bob(400,350,30);
	rope=new Rope(bob.body,{x:400,y:200});

	bob1=new Bob(340,350,30);
	rope1=new Rope(bob1.body,{x:340,y:200});

	bob2=new Bob(280,350,30);
	rope2=new Rope(bob2.body,{x:280,y:200});	

	bob3=new Bob(460,350,30);
	rope3=new Rope(bob3.body,{x:460,y:200});

	bob4=new Bob(520,350,30);
	rope4=new Rope(bob4.body,{x:520,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100,40,40);

  roof.display();
  bob.display();
  rope.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  
  drawSprites();
 
}

function keyPressed() {
	
	if (keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:100,y:0} );
		
	    
		} 
}


