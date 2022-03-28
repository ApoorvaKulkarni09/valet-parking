canvas = document.getElementById("canvas");
ctx= canvas.getContext("2d");

car_width = 75;
car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.jpg";

carY=225;
carX=5;

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;
	
} greencar_imageTag = new Image();
  greencar_imageTag.onload = uploadgreencar;
  greencar_imageTag.src = greencar_image;

function uploadBackground() {
	ctx.drawImage(background_imageTag , 0 , 0 , canvas.width , canvas.height );

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag , carX , carY , car_width , car_height );

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{  if( carY >= 0){
	carY = carY-10;
	console.log("x = " + carX +" y = "+ carY );
	uploadBackground();
	uploadgreencar();}
	
}

function down()
{
	if( carY <= 700){
		carY = carY+10;
		console.log("x = " + carX +" y = "+ carY );
		uploadBackground();
		uploadgreencar();}
}

function left()
{  if( carX >= 0){
	carX = carX-10;
	console.log("x = " + carX +" y = "+ carY );
	uploadBackground();
	uploadgreencar();}
	
}

function right()
{ if( carX <= 325){
	carX = carX+10;
	console.log("x = " + carX +" y = "+ carY );
	uploadBackground();
	uploadgreencar();}
	
}
