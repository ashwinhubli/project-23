var packageIMG,package,helicopter,helicopterIMG;
var packageBody,groundSprite;
var wall1;

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload ()
{
helicopterIMG = loadImage("helicopter.png");
packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(1000,700);
  rectMode(CENTER);


  package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale = 0.2;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale = 0.8;

	wall1 = new Wall(200,200,50,50);

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody,false);
	    
	 }
   }
function display()
{
  wall1.display();


}