const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fundoa;

function preload(){
  chachimage = loadImage("chach.png")
  perapera = loadImage("pera.png")
  fundoa = loadImage("CREEPEROHMAN.jpeg")
}
function setup() 
{
  createCanvas(452,453);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(0,503,490,80);
  corrrrda = new Rope(7,{x:250,y:30})
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)











  









  var peraperapera = {
    density: 0.002

  }
  peraarep = Bodies.circle(100,100,17,peraperapera)
  //]
  Matter.Composite.add(corrrrda.body,peraarep)
















  aepprrrrrrroedaacape = new Link(corrrrda.body,peraperapera)
}

function draw() 
{
  background(fundoa);
  ground.show();
  image(chachimage,0,380,490,80)
  Engine.update(engine);
  corrrrda.show()
  ellipse(peraarep.position.x,peraarep.position.y,17,17)
  image(perapera, 202, 303,51,51) 
   
}
