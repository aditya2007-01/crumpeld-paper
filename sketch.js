
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var paperObj
function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(800,650);
    paperObj= new Paper(100,100,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObj.display();
}

function keyPressed(){
	if(keyCode==="UP_ARROW"){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:50,y:-50});
	}
}