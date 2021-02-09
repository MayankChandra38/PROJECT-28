//for name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
//for defining variables
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var obj;

function preload(){
	//for loading boy image
	boy=loadImage("boy.png");
  }

function setup() {
	//for creating canvas
	createCanvas(1300, 600);
	//for creating engine and world
	engine = Engine.create();
	world = engine.world;

	//for mango creating
	mango1=new mango(1000,100,30);
	mango2 = new mango(1150,100,30);
	mango3 = new mango(900,170,30);
	mango4 = new mango(1000,250,30);

	//for creating tree
	treeObj=new tree(1050,580);

	//for creating ground
	groundObject=new ground(width/2,600,width,20);

	//for creating stones
	stone = new Stone(0,10,50,50);

	//for creating object
	obj = createSprite(240,420,10,10);
	obj.visible = false;

	//for creating rope
	Rope = new rope(stone.body,{x:250,y:430});

	//for running engine
	Engine.run(engine);

}

function draw() {

  //for setting background
  background(230);
  //Add code for displaying text here

  //for drawing boy image
  image(boy ,200,340,200,300);
  
  //for displaying tree
  treeObj.display();

  //for displaying mango
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  //for displaying stone
  stone.display();

  //for displaying ground
  groundObject.display();

  //for displaying rope
  Rope.display();

  //for displaying sprites
  drawSprites();
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	Rope.fly();
}