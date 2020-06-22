const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1,box3,box4,pig2,log2,box5,log3,log4,bird1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(550,300,50,50);
    box2 = new Box(650,300,50,50);
    log1 = new Log(600,250,200,PI/2);
    pig1 = new Pig(600,300);

    box3 = new Box(555,200,50,50);
    box4 = new Box(645,200,50,50);
    log2 = new Log(600,170,200,PI/2);
    pig2 = new Pig(603,200);

    box5 = new Box(600,160,50,50);
    log3 = new Log(565,160,100,PI/6);
    log4 = new Log(625,160,100,-(PI/6));

    bird1 = new Bird(50,50);

    ground = new Ground(400,height,800,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(mouseX+"y"+mouseY);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}