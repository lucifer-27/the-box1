var canvas;
var music;
var s1,s2,s3,s4;
var edge1,edge2;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    s1 = createSprite(700,550,150,20);
    s1.shapeColor = "red";
    s2 = createSprite(500,550,150,20);
    s2.shapeColor = "green";
    s3 = createSprite(300,550,150,20);
    s3.shapeColor = "aqua";
    s4 = createSprite(100,550,150,20);
    s4.shapeColor = "yellow";
    edge1 = createSprite(5,300,10,600);
    edge1.visible = false;
    edge2 = createSprite(795,300,10,600);
    edge2.visible = false;
    //create box sprite and give velocity
    box = createSprite(700,300,50,50);
    
    
}

function draw() {
    background(0);
    //add condition to check if box touching surface and make it box

    box.x = World.mouseX;
    box.y = World.mouseY;
   if(s1.x-box.x < s1.width/2 + box.width/2 &&
    s1.x-box.x < s1.width/2 + box.width/2 &&
    box.y - s1.y < s1.height/2 +  box.height/2 &&
    s1.y - box.y < s1.height/2 +  box.height/2){
       box.shapeColor = "red";
   }
   else if(s2.x-box.x < s2.width/2 + box.width/2 &&
    s2.x-box.x < s2.width/2 + box.width/2 &&
    box.y - s2.y < s2.height/2 +  box.height/2 &&
    s2.y - box.y < s2.height/2 +  box.height/2){
       box.shapeColor = "green";
   }
   else if(s3.x-box.x < s3.width/2 + box.width/2 &&
    s3.x-box.x < s3.width/2 + box.width/2 &&
    box.y - s3.y < s3.height/2 +  box.height/2 &&
    s3.y - box.y < s3.height/2 +  box.height/2){
       box.shapeColor = "aqua";
   }
    else{
       box.shapeColor = "yellow";
   }
   
   
    drawSprites();
}
