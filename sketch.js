var player;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var hedge;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	hedge = loadImage("hedge.jpg");
	player = loadImage("player.jpg");
	car = loadImage("car.jpg");

}

function setup() {
	canvas = createCanvas(displayWidth-20, displayHeight-30);

	player1 = createSprite(displayWidth/2, 600, 20, 20);

	line = createSprite(displayWidth/2, 50, displayWidth, 2);
	line.shapeColor = "yellow"



	//sprites


	engine = Engine.create();
	world = engine.world;

	//bodies
	obstacle1 =  createSprite(100, 500, 60, 60);


	obstacle2 =  createSprite(500, 500, 55, 55);
	obstacle3 =  createSprite(900, 500, 55, 55);
	obstacle4 =  createSprite(1300,500, 55, 55);
	obstacle5 =  createSprite(200, 500, 55, 55);
	obstacle6 =  createSprite(300, 500, 55, 55);
	obstacle7 =  createSprite(400,500, 55, 55);
	obstacle8 =  createSprite(600,500, 55, 55);
	obstacle9 =  createSprite(700, 500, 55, 55);
	obstacle10 = createSprite(800, 500, 55, 55);
	obstacle11 = createSprite(1000, 500, 55, 55);
	obstacle12 = createSprite(1100,500, 55, 55);
	obstacle13 = createSprite(1200, 500, 55, 55);

	obstacle14 =  createSprite(150, 400, 55, 55);
	obstacle15 =  createSprite(250, 400, 55, 55);
	obstacle16 =  createSprite(350, 400, 55, 55);
	obstacle17 =  createSprite(450,400, 55, 55);
	obstacle18 =  createSprite(550, 400, 55, 55);
	obstacle19 =  createSprite(650, 400, 55, 55);
	obstacle20 =  createSprite(750,400, 55, 55);
	obstacle21 =  createSprite(850,400, 55, 55);
	obstacle22 =  createSprite(950, 400, 55, 55);
	obstacle23 = createSprite(1050, 400, 55, 55);
	obstacle24 = createSprite(1150, 400, 55, 55);
	obstacle25 = createSprite(1250,400, 55, 55);
	obstacle26 = createSprite(1350, 400, 55, 55);

	obstacle27 =  createSprite(150, 300, 55, 55);
	obstacle28 =  createSprite(250, 300, 55, 55);
	obstacle29 =  createSprite(350, 300, 55, 55);
	obstacle30 =  createSprite(450,300, 55, 55);
	obstacle31 =  createSprite(550, 300, 55, 55);
	obstacle32 =  createSprite(650, 300, 55, 55);
	obstacle33 =  createSprite(750,300, 55, 55);
	obstacle34 =  createSprite(850,300, 55, 55);
	obstacle35 =  createSprite(950, 300, 55, 55);
	obstacle36 = createSprite(1050, 300, 55, 55);
	obstacle37 = createSprite(1150, 300, 55, 55);
	obstacle38 = createSprite(1250,300, 55, 55);
	obstacle39 = createSprite(1350, 300, 55, 55);

	obstacle40 =  createSprite(100, 200, 55, 55);
	obstacle41 =  createSprite(500, 200, 55, 55);
	obstacle42 =  createSprite(900, 200, 55, 55);
	obstacle43 =  createSprite(1300,200, 55, 55);
	obstacle44 =  createSprite(700, 200, 55, 55);
	obstacle45 =  createSprite(300, 200, 55, 55);
	obstacle46 =  createSprite(400,200, 55, 55);
	obstacle47 =  createSprite(600,200, 55, 55);
	obstacle48 =  createSprite(200, 200, 55, 55);
	obstacle49 = createSprite(800, 200, 55, 55);
	obstacle50 = createSprite(1000, 200, 55, 55);
	obstacle51 = createSprite(1100,200, 55, 55);
	obstacle52 = createSprite(1200, 200, 55, 55);

	obstacle53 =  createSprite(150, 100, 55, 55);
	obstacle54 =  createSprite(250, 100, 55, 55);
	obstacle55 =  createSprite(350, 100, 55, 55);
	obstacle56 =  createSprite(450,100, 55, 55);
	obstacle57 =  createSprite(550, 100, 55, 55);
	obstacle58 =  createSprite(650, 100, 55, 55);
	obstacle59 =  createSprite(750,100, 55, 55);
	obstacle60 =  createSprite(850,100, 55, 55);
	obstacle61 =  createSprite(950, 100, 55, 55);
	obstacle62 = createSprite(1050, 100, 55, 55);
	obstacle63 = createSprite(1150, 100, 55, 55);
	obstacle64 = createSprite(1250,100, 55, 55);
	obstacle65 = createSprite(1350, 100, 55, 55);



	obstacle1.addImage(hedge);
	obstacle2.addImage(hedge);
	obstacle3.addImage(hedge);
	obstacle4.addImage(hedge);
	obstacle5.addImage(hedge);
	obstacle6.addImage(hedge);
	obstacle7.addImage(hedge);
	obstacle8.addImage(hedge);
	obstacle8.addImage(hedge);
	obstacle9.addImage(hedge);
	obstacle10.addImage(hedge);
	obstacle11.addImage(hedge);
	obstacle12.addImage(hedge);
	obstacle13.addImage(hedge);
	obstacle14.addImage(hedge);
	obstacle15.addImage(hedge);
	obstacle16.addImage(hedge);
	obstacle17.addImage(hedge);
	obstacle18.addImage(hedge);
	obstacle19.addImage(hedge);
	obstacle20.addImage(hedge);
	obstacle21.addImage(hedge);
	obstacle22.addImage(hedge);
	obstacle23.addImage(hedge);
	obstacle24.addImage(hedge);
	obstacle25.addImage(hedge);
	obstacle26.addImage(hedge);
	obstacle27.addImage(hedge);
	obstacle28.addImage(hedge);
	obstacle29.addImage(hedge);
	obstacle30.addImage(hedge);
	obstacle31.addImage(hedge);
	obstacle32.addImage(hedge);
	obstacle33.addImage(hedge);
	obstacle34.addImage(hedge);
	obstacle35.addImage(hedge);
	obstacle36.addImage(hedge);
	obstacle37.addImage(hedge);
	obstacle38.addImage(hedge);
	obstacle39.addImage(hedge);
	obstacle40.addImage(hedge);
	obstacle41.addImage(hedge);
	obstacle42.addImage(hedge);
	obstacle43.addImage(hedge);
	obstacle44.addImage(hedge);
	obstacle45.addImage(hedge);
	obstacle46.addImage(hedge);
	obstacle47.addImage(hedge);
	obstacle48.addImage(hedge);
	obstacle49.addImage(hedge);
	obstacle50.addImage(hedge);
	obstacle51.addImage(hedge);
	obstacle52.addImage(hedge);
	obstacle53.addImage(hedge);
	obstacle54.addImage(hedge);
	obstacle55.addImage(hedge);
	obstacle56.addImage(hedge);
	obstacle57.addImage(hedge);
	obstacle58.addImage(hedge);
	obstacle59.addImage(hedge);
	obstacle50.addImage(hedge);
	obstacle51.addImage(hedge);
	obstacle52.addImage(hedge);
	obstacle53.addImage(hedge);
	obstacle54.addImage(hedge);
	obstacle55.addImage(hedge);
	obstacle56.addImage(hedge);
	obstacle57.addImage(hedge);
	obstacle58.addImage(hedge);
	obstacle59.addImage(hedge);
	obstacle60.addImage(hedge);
	obstacle61.addImage(hedge);
	obstacle62.addImage(hedge);
	obstacle63.addImage(hedge);
	obstacle64.addImage(hedge);
	obstacle65.addImage(hedge);


	obstacle1.scale = 0.18;
	obstacle2.scale = 0.18;	
	obstacle3.scale = 0.18;
	obstacle4.scale = 0.18;
	obstacle5.scale = 0.18;
	obstacle6.scale = 0.18;
	obstacle7.scale = 0.18;
	obstacle8.scale = 0.18;
	obstacle9.scale = 0.18;
	obstacle10.scale = 0.18;
	obstacle11.scale = 0.18;
	obstacle12.scale = 0.18;
	obstacle13.scale = 0.18;
	obstacle14.scale = 0.18;
	obstacle15.scale = 0.18;
	obstacle16.scale = 0.18;
	obstacle17.scale = 0.18;
	obstacle18.scale = 0.18;
	obstacle19.scale = 0.18;
	obstacle20.scale = 0.18;
	obstacle21.scale = 0.18;
	obstacle22.scale = 0.18;
	obstacle23.scale = 0.18;
	obstacle24.scale = 0.18;
	obstacle25.scale = 0.18;
	obstacle26.scale = 0.18;
	obstacle27.scale = 0.18;
	obstacle28.scale = 0.18;
	obstacle29.scale = 0.18;
	obstacle30.scale = 0.18;
	obstacle31.scale = 0.18;
	obstacle32.scale = 0.18;
	obstacle33.scale = 0.18;
	obstacle34.scale = 0.18;
	obstacle35.scale = 0.18;
	obstacle36.scale = 0.18;
	obstacle37.scale = 0.18;
	obstacle38.scale = 0.18;
	obstacle39.scale = 0.18;
	obstacle40.scale = 0.18;
	obstacle41.scale = 0.18;
	obstacle42.scale = 0.18;
	obstacle43.scale = 0.18;
	obstacle44.scale = 0.18;
	obstacle45.scale = 0.18;
	obstacle46.scale = 0.18;
	obstacle47.scale = 0.18;
	obstacle48.scale = 0.18;
	obstacle49.scale = 0.18;
	obstacle50.scale = 0.18;
	obstacle51.scale = 0.18;
	obstacle52.scale = 0.18;
	obstacle53.scale = 0.18;
	obstacle54.scale = 0.18;
	obstacle55.scale = 0.18;
	obstacle56.scale = 0.18;
	obstacle57.scale = 0.18;
	obstacle58.scale = 0.18;
	obstacle59.scale = 0.18;
	obstacle60.scale = 0.18;
	obstacle61.scale = 0.18;
	obstacle62.scale = 0.18;
	obstacle63.scale = 0.18;
	obstacle64.scale = 0.18;
	obstacle65.scale = 0.18;




}


function draw() {

  background(0);





	//player.display();

	if(player1.y > 40){

		player1.bounceOff(obstacle1);
		player1.bounceOff(obstacle2);
		player1.bounceOff(obstacle3);
		player1.bounceOff(obstacle4);
		player1.bounceOff(obstacle5);
		player1.bounceOff(obstacle6);
		player1.bounceOff(obstacle7);
		player1.bounceOff(obstacle8);
		player1.bounceOff(obstacle9);
		player1.bounceOff(obstacle10);
		player1.bounceOff(obstacle11);
		player1.bounceOff(obstacle12);
		player1.bounceOff(obstacle13);
		player1.bounceOff(obstacle14);
		player1.bounceOff(obstacle15);
		player1.bounceOff(obstacle16);
		player1.bounceOff(obstacle17);
		player1.bounceOff(obstacle18);
		player1.bounceOff(obstacle19);
		player1.bounceOff(obstacle20);
		player1.bounceOff(obstacle21);
		player1.bounceOff(obstacle22);
		player1.bounceOff(obstacle23);
		player1.bounceOff(obstacle24);
		player1.bounceOff(obstacle25);
		player1.bounceOff(obstacle26);
		player1.bounceOff(obstacle27);
		player1.bounceOff(obstacle28);
		player1.bounceOff(obstacle29);
		player1.bounceOff(obstacle30);
		player1.bounceOff(obstacle31);
		player1.bounceOff(obstacle32);
		player1.bounceOff(obstacle33);
		player1.bounceOff(obstacle34);
		player1.bounceOff(obstacle35);
		player1.bounceOff(obstacle36);
		player1.bounceOff(obstacle37);
		player1.bounceOff(obstacle38);
		player1.bounceOff(obstacle39);
		player1.bounceOff(obstacle40);
		player1.bounceOff(obstacle41);
		player1.bounceOff(obstacle42);
		player1.bounceOff(obstacle43);
		player1.bounceOff(obstacle44);
		player1.bounceOff(obstacle45);
		player1.bounceOff(obstacle46);
		player1.bounceOff(obstacle47);
		player1.bounceOff(obstacle48);
		player1.bounceOff(obstacle49);
		player1.bounceOff(obstacle50);
		player1.bounceOff(obstacle51);
		player1.bounceOff(obstacle52);
		player1.bounceOff(obstacle53);
		player1.bounceOff(obstacle54);
		player1.bounceOff(obstacle55);
		player1.bounceOff(obstacle56);
		player1.bounceOff(obstacle57);
		player1.bounceOff(obstacle58);
		player1.bounceOff(obstacle59);
		player1.bounceOff(obstacle60);
		player1.bounceOff(obstacle61);
		player1.bounceOff(obstacle62);
		player1.bounceOff(obstacle63);
		player1.bounceOff(obstacle64);
		player1.bounceOff(obstacle65);

		
		if(player1.isTouching(obstacle1)){
			obstacle1.shapeColor = " black"
			console.log("istouching");
		}

		drawSprites();




		camera.position.x = displayWidth/2;
		camera.position.y = player1.y;

			if(keyDown(LEFT_ARROW)){
			changePosition(-3,0);

			}
			else if(keyDown(RIGHT_ARROW)){
			changePosition(3,0);
			}
			else if(keyDown(UP_ARROW)){
				changePosition(0,-3);
			}
			else if(keyDown(DOWN_ARROW)){
				changePosition(0,+3);
			}
		
		textSize(20);
		text("cross the yellow line to win ", 800, displayHeight - 100);
		text("press the up, down, right or left button to move ", 600, displayHeight - 50);	
	}
	else{
		textSize(100);
		fill(255);
		stroke(0);
		strokeWeight(5);
		text("Game Over", line.x - 100, line.y - 20);

	}


}


	function changePosition(x,y){
		player1.x = player1.x + x;
		player1.y = player1.y + y;
	}
	


