var board 
var row1 = 0;
var snake1;

function preload(){

  snake1Image = loadImage("capture.PNG");

}


function setup() {
  createCanvas(800,800);
  //board = createSprite(400,400,600,600);
  //board.shapeColor ="white";
  for(var i = 30; i<600; i=i+120){
   var box = createSprite(i,30,60,60);
   box.shapeColor = "red";
   row1=row1+1;
   fill("black")
   text(row1,i+10,40)
   console.log(row1)
   snake1 = createSprite(150,200,100,100);
   snake1.addImage("Capture.PNG",snake1Image);
  }
  
  

  for(var i = 30; i<600; i=i+120){
    var box2 = createSprite(i,90,60,60);
    box2.shapeColor = "blue";
  }
  for(var i = 30; i<600; i=i+120){
    var box3 = createSprite(i,150,60,60);
    box3.shapeColor = "red";
  }
  for(var i = 30; i<600; i=i+120){
    var box4 = createSprite(i,210,60,60);
    box4.shapeColor = "blue";
  }
  for(var i = 30; i<600; i=i+120){
    var box5 = createSprite(i,270,60,60);
    box5.shapeColor = "red";
  }
  for(var i = 30; i<600; i=i+120){
    var box6 = createSprite(i,330,60,60);
    box6.shapeColor = "blue";
  }
  for(var i = 30; i<600; i=i+120){
    var box7 = createSprite(i,390,60,60);
    box7.shapeColor = "red";
  }
  for(var i = 30; i<600; i=i+120){
    var box8 = createSprite(i,450,60,60);
    box8.shapeColor = "blue";
  }
  for(var i = 30; i<600; i=i+120){
    var box9 = createSprite(i,510,60,60);
    box9.shapeColor = "red";
  }
  for(var i = 30; i<600; i=i+120){
    var box10 = createSprite(i,570,60,60);
    box10.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box11 = createSprite(i,30,60,60)
    box11.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box12 = createSprite(i,90,60,60)
    box12.shapeColor = "red";
  }
  for(var i = 90; i<600; i=i+120){
    var box13 = createSprite(i,150,60,60)
    box13.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box14 = createSprite(i,210,60,60)
    box14.shapeColor = "red";
  }
  for(var i = 90; i<600; i=i+120){
    var box15 = createSprite(i,270,60,60)
    box15.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box16 = createSprite(i,330,60,60)
    box16.shapeColor = "red";
  }
  for(var i = 90; i<600; i=i+120){
    var box17 = createSprite(i,390,60,60)
    box17.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box18 = createSprite(i,450,60,60)
    box18.shapeColor = "red";
  }
  for(var i = 90; i<600; i=i+120){
    var box19 = createSprite(i,510,60,60)
    box19.shapeColor = "blue";
  }
  for(var i = 90; i<600; i=i+120){
    var box20 = createSprite(i,570,60,60)
    box20.shapeColor = "red";
  }


}

function draw() {
  background(255,255,255);  
  

  drawSprites();
}