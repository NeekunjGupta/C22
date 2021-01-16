const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  
  
   engine=Engine.create();
   world=engine.world;
  
   var ob2={
     restitution:1
   }


  var ob1={
    isStatic:true
  }
  ball=Bodies.circle(200,100,25,ob2);
  World.add(world,ball);
   ground=Bodies.rectangle(200,350,400,30,ob1);
  World.add(world,ground);
}

function draw() {
  background("blue");
  
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
}