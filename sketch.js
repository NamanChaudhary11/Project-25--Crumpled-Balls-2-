const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1008,610);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   ground=new Ground(400,600,1215,20);
   dustbin1 = new Dustbin(595,541,30,180); 
   dustbin2 = new Dustbin(655,603,110,58);
   dustbin3 = new Dustbin(715,541,30,180);
   paper=new Paper(85,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  
 ground.display();
 paper.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}

function keyPressed(){
	if (keyCode===UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-300});

}


	
