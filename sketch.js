
var heart2 = 3;
var heart11,heart22,heart33;
var redManGroup,BlueGuyPunch;
var heart = 3;
var heart1 = 3;

var hearti,heart2,heart3;
var HeartyBoi;

var pp = 6;

var pp1 = 6;
var player,PImage,PImage2;
var badGuy,BG;
var pXl
var PY;
let timer = 5
var backgroundI
var hitBoy,hitBoyGroup;
var aohb = 0
var backgroundcircle;
var BImage2;
var BlockHit,BlockHitGroup;

var GameMode = 0;

var music,punch,gamerOver;
var play,PIMG;
var StartImage,STI;
function preload(){
//Layer 2 (7).png
 PIMG = loadImage("Images/Play .png");
  STI = loadImage("Images/PunchinPowerLogo.png");
  PImage = loadImage("Images/Layer 2 (4).png");
  BG = loadImage("Images/Layer 2 (5).png")
  backgroundI = loadImage("Images/Background.png");
  PImage2 = loadImage("Images/Layer 1 (10).png");
    BImage2 = loadImage("Images/Layer 2 (8).png");
  
  HeartyBoi = loadImage("Images/Layer 5 (1).png")
}

function setup(){
createCanvas(600,500);
StartImage = createSprite(300,200,100,40)
StartImage.addImage(STI);
StartImage.scale = 2;
play = createSprite(300,290,100,30)
play.addImage(PIMG);


    backgroundcircle = createSprite(300,250,500,400)
  player = createSprite(200,250,50,50);
  player.addImage(PImage);

  redManGroup = createGroup();
  BlueGuyPunch = createGroup();
  hitBoyGroup = createGroup();
BlockHitGroup = createGroup();
   badGuy = createSprite(400,250,10,10)
   GameMode = 0
  

  badGuy.addImage(BG)

   hearti = createSprite(100,20,10,10)
  hearti.scale = 0.1;
  hearti.addImage(HeartyBoi)
  heart2 = createSprite(150,20,10,10)
   heart2.scale = 0.1;
  heart2.addImage(HeartyBoi)
  heart3 = createSprite(200,20,10,10)
   heart3.scale = 0.1;
  heart3.addImage(HeartyBoi)
  
     heart11 = createSprite(400,20,10,10)
  heart11.scale = 0.1;
  heart11.addImage(HeartyBoi)
  heart22 = createSprite(450,20,10,10)
   heart22.scale = 0.1;
  heart22.addImage(HeartyBoi)
  heart33 = createSprite(500,20,10,10)
   heart33.scale = 0.1;
  heart33.addImage(HeartyBoi)

  redManGroup.add(badGuy)
  hitBoyGroup.add(player);
}

function draw(){
 

    if(GameMode === 0){
  
      if (mousePressedOver(play)) {
      GameMode = 1;
      } else{
        GameMode = 0;
      }



    
     
      backgroundcircle.visible = false;
  player.visible = false;
  badGuy.visible = false;
  heart11.visible = false;
  heart22.visible = false;
  heart33.visible = false;

  hearti.visible = false;
  heart2.visible = false;
  heart3.visible = false;
    }
 if(GameMode === 1){
  background(220);
  play.visible = false;
  StartImage.visible = false;
  play.visible = false;
  StartImage.visible = false;
 
   
  backgroundcircle.visible = true;
  player.visible = true;
  badGuy.visible = true;
  heart11.visible = true;
  heart22.visible = true;
  heart33.visible = true;

  hearti.visible = true;
  heart2.visible = true;
  heart3.visible = true;


     player.pointTo(badGuy.x,badGuy.y);
     badGuy.pointTo(player.x,player.y);

 //  camera.on();
   //camera.x=player.x;
   //camera.y=player.y;    
 
 if(keyDown("d")){
   
   player.x = player.x + 5;
 }
 if(keyDown("a")){
   
   player.x = player.x - 5;
 }
 if(keyDown("w")){
   
   player.y = player.y - 5;
 }
  if(keyDown("s")){
   
   player.y = player.y + 5;
 }
 
 ///////////////
 if(keyDown("RIGHT_ARROW")){
   
   badGuy.x = badGuy.x + 5;
 }
 if(keyDown("LEFT_ARROW")){
   
   badGuy.x = badGuy.x - 5;
 }
 if(keyDown("UP_ARROW")){
   
   badGuy.y = badGuy.y - 5;
 }
  if(keyDown("DOWN_ARROW")){
   
   badGuy.y = badGuy.y + 5;
 }

 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 Punch();


    }
    if(GameMode === 3){
  
  



      play.visible = true;
      StartImage.visible = false;
      play.visible = false;
      StartImage.visible = false;
     
      backgroundcircle.visible = false;
  player.visible = false;
  badGuy.visible = false;
  heart11.visible = false;
  heart22.visible = false;
  heart33.visible = false;

  hearti.visible = false;
  heart2.visible = false;
  heart3.visible = false;
      


    }


  drawSprites();
}

function Punch(){
    
  if(keyWentDown("SHIFT")){
    setTimeout(Punch, 7000);

    BlockHit = createSprite(200,200,20,20);
  BlockHit.visible = false;
BlockHitGroup.add(BlockHit)
    
    BlockHit.x = badGuy.x - 40;
    aohb = 1
    BlockHit.y = badGuy.y;
    BlockHit.shapeColor = "red";
  badGuy.addImage(BImage2);
      BlockHit.lifetime = 1;
   

 
 }else{
   badGuy.addImage(BG);
     
   console.log( aohb )
   
 
 }

  
  if(keyWentDown("e")){
      setTimeout(Punch, 4000);

   hitBoy = createSprite(200,200,20,20);
   hitBoy.visible = false;
    
    BlueGuyPunch.add(hitBoy)
    hitBoy.x = player.x + 40
    aohb = 1
    hitBoy.y = player.y ;
    hitBoy.shapeColor = "red";
  player.addImage(PImage2);
      hitBoy.lifetime = 1;


    
 }else{
   player.addImage(PImage);
     
   console.log( aohb )
   
 
 }

 
 if(keyDown("p")){
   
    
   camera.on();
   camera.x=badGuy.x;
   camera.y=badGuy.y;    
 }


 if(heart === 0){
  GameMode = 1;
   heart3.visible = false;
   heart2.visible = false;
   hearti.visible = false;
   console.log("Bruh he needs a medy bedy");
 }
 
 if(heart === 1){
  
   heart3.visible = false;
   heart2.visible = false;
   hearti.visible = true;
 }
  if(heart === 2){
   heart3.visible = false;
   heart2.visible = true;
   hearti.visible = true;
 }
 if(heart === 3){
   heart3.visible = true;
   heart2.visible = true;
   hearti.visible = true;
 }
 if(pp < 0){
   pp = 1;
   
   
 }

 if(BlueGuyPunch.isTouching(redManGroup) && pp === 1 && setTimeout){
   heart = 0;
      pp--;
 }
 if(BlueGuyPunch.isTouching(redManGroup) && pp === 3){
   heart = 1;
      pp--;
 }
  if(BlueGuyPunch.isTouching(redManGroup) && pp === 5){
   heart = 2;
   pp--;
 }
 if(BlueGuyPunch.isTouching(hitBoyGroup)){
 
   pp--;
 }
 if(pp === 6){
   heart = 3;
   
 }
  if(pp < 0 && heart === 0){
   
   
   
 }
 console.log(pp)
 
 /////
 
 
 if(heart1 === 0){
   heart33.visible = false;
   heart22.visible = false;
   heart11.visible = false;
   console.log("Bruh he needs a medy bedy");
   GameMode = 1;
 }
 
 if(heart1 === 1){
  
   heart33.visible = false;
   heart22.visible = false;
   heart11.visible = true;
 }
  if(heart1 === 2){
   heart33.visible = false;
   heart22.visible = true;
   heart11.visible = true;
 }
 if(heart1 === 3){
   heart33.visible = true;
   heart22.visible = true;
   heart11.visible = true;
 }
 if(pp1 < 0){
   pp1 = 1;
   
   
 }

 if(BlockHitGroup.isTouching(hitBoyGroup) && pp === 1){
   heart1 = 0;
      pp1--;
 }
 if(BlockHitGroup.isTouching(hitBoyGroup) && pp === 3){
   heart1 = 1;
      pp1--;
 }
  if(BlockHitGroup.isTouching(hitBoyGroup) && pp === 5){
   heart1 = 2;
   pp1--;
 }
 if(BlockHitGroup.isTouching(hitBoyGroup)){
 
   pp1--;
 }
 if(pp1 === 6){
   
   heart1 = 3;
   
 }
  if(pp1 < 0 && heart1 === 0){

   
   
 }


}