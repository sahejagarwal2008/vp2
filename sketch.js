var foodstock
var dog1
var happydog
function preload()
{
  dog1 = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
}
function setup() {
  createCanvas(800, 800);
  database = firebase.database();
  dog = createSprite(400,600);
  dog.addImage(dog1);
  dog.scale = 0.2;
  foodstock = database.ref('food');
  foodstock.on("value",readstock);
}


function draw() { 
  
  background("white")
  if(keyWentDown(UP_ARROW)){
    writestock(foodstock)
    dog.addImage(happydog)
  }
  drawSprites();
  

}
function readstock(data){
  foodS = data.val()  
}
function writestock(x){
  if(x <= 0){
    x = 0
  }
  else {
    x = x+1;
  }
  database.ref('/').update({
    food:x
  })
}
