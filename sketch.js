const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particle;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var gameState = "start";
var score = 0;
var count = 0;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(400,height,width,10);
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j + 50){
    plinkos.push(new Plinko(j,75,10));
  }
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175,10));
  }
  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275,10));
  }
  console.log(plinkos[1])
  
Engine.run(engine);


}



function draw() {
  background(255,255,255); 
  textSize(35);
  text("SCORE : " +score,10,50);
  text(count,width-50,50);
  text(" 500 ", 5, 550); 
  text(" 500 ", 80, 550); 
  text(" 500 ", 160, 550);
   text(" 500 ", 240, 550);
    text(" 100 ", 320, 550); 
   text(" 100 ", 400, 550);
    text(" 100 ", 480, 550);
     text(" 200 ", 560, 550);
   text(" 200 ", 640, 550);
    text(" 200 ", 720, 550);
    if(gameState == "end") {
      text("GAME OVER",150,200);
     }
if(particle!=null){
  particle.display();
if (particle.body.position.y>760) {
  if (particle.body.position.x < 300)
  {
    score=score+500;
    particle=null;
    if (count>= 5) {gameState = "end"};
  }
  else if (particle.body.position.x < 600 && particle.body.position.x>301)
  {
    score=score+100;
    particle=null;
    if (count>= 5) {gameState = "end"};
  }
  else if (particle.body.position.x < 900 && particle.body.position.x>601)
  {
    score=score+200;
    particle=null;
    if (count>= 5) {gameState = "end"};
  }
  
}

}




 /* if(frameCount % 60 === 0){
    particles.push(new Particle(random(50,430),10,10));
  } 
  */
  ground.display();
 for(i = 0; i<divisions.length; i++){
   divisions[i].display();
 } 
for(i = 0; i<plinkos.length;i++){
  plinkos[i].display();
}
/*
for(i = 0; i<particles.length;i++){
  particles[i].display();
} */


}
function  keyPressed() {
if(gameState!== "end") {
  count++;
  particle=new Particle(random(150,750),10,10,10);
}

}




