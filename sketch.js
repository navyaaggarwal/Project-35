var dog, dogImg;
var happyDog, dogHappy;
var database;
var foodS;
var foodStock;
var foodObject;

function preload()  {

	dogImg = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	var canvas = createCanvas(800, 800);
  dog = createSprite(400,400,2,2);
  
  dog.addImage(dogImg);
  dog.scale = 0.15;
  foodStock = database.ref('food');
  foodStock.on("value", readStock);

}


function draw() {  
 
  background(46, 139, 87);
  drawSprites();
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
}

function writeStock(x) {

  database.ref('/').update({
    food:x
  })
}

function readStock(data) {
  foodS = data.val();
}

