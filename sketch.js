var cat, catImage,catImage2;
var jerry,jerryImage,jerryImage2;


function preload() {

 bg = loadImage("images/garden.png");
 catImage = loadAnimation("images/cat1.png");
 jerryImage = loadAnimation("images/mouse1.png");
jerryImage3 = loadAnimation("images/mouse4.png");
catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
catImage3 = loadAnimation("images/cat4.png");
jerryImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,700);

    cat = createSprite(850,640,10,10);
    cat.addAnimation("cat",catImage);
    cat.scale = 0.1;

    jerry = createSprite(100,630,10,10);
    jerry.addAnimation("jerry",jerryImage);
    jerry.scale = 0.1;
    
    

}

function draw() {

    background(bg);

    if (cat.x-jerry.x<(cat.width-jerry.width/2)) {
        cat.velocityX = 0;
        cat.addAnimation("catlastImage",catImage3);
        cat.x = 300;
        cat.scale = 0.1;
        cat.changeAnimation("catlastImage");
        jerry.addAnimation("jerrylastImage",jerryImage3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerrylastImage");
        }
    

    drawSprites();

   

}


function keyPressed(){

if (keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImage2);
    cat.changeAnimation("catRunning");
    jerry.frameDelay = 25;
    jerry.addAnimation("jerryTeasing",jerrryImage2);
    jerry.changeAnimation("jerrTeasing");
   
}  


}
