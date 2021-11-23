var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300; 
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //criar objetos de divisão
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 200; k <=200; k = k + 200) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 300; k <=300; k = k + 300) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var k = 400; k <=400; k = k + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 500; k <=500; k = k + 500) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 600; k <=600; k = k + 600) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 720; k <=720; k = k + 720) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 790; k <=800; k = k + 800) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crie a 1ª linha de objetos plinko
  for (var j = 0; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crie a 2ª linha de objetos plinko
  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crie a 3ª linha de objetos plinko
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //crie a 4ª linha de objetos plinko
  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }


  for (var j = 10; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,475));
  }

  //criar objetos de partículas
  
    
}
 


function draw() {
  background("black");
  textSize(20)

  text("score: "+ score,20,30);
 
  Engine.update(engine);
  ground.display();
  
  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //exibir os divisões
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //exibir as partículas
  if(frameCount % 60 === 0){
     
    particles.push(new particle(random(width/2-10, width/2+10), 10,10));
    score = score +1;
  }

  for(var j = 0; j < particles.length; j++ ){

    particles[j].display();
    }
 
}