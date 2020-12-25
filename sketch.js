const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2
var log1,log2,log3,log4
var bird;
var ground;

function setup() {  
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;

  //ground
  ground=new Ground(600,390,1200,10);

  //create box1 and box2 using Box class
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  pig1=new Pig(810,350,50,50);

  log1=new Log(810,260,300,PI/2);

  /*
  box3=new Box(700,220,70,70);
  box4=new Box(920,220,70,70);
  pig2=new Pig(810,200,50,50);
  log2=new Log(810,190,300,PI/2);


  box5=new Box(810,170,70,70);
  log3=new Log(750,170,150,PI/4);
  log4=new Log(870,170,150,-PI/4);
  //create bird
  bird=new Bird(100,100,50,50);
   */
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();

  pig1.display();

 log1.display();
/* 
  box3.display();
  box4.display();
  pig2.display();

  log2.display();
  
  box5.display();
  
  log3.display();
  log4.display();
  bird.ddisplay(); */
}
