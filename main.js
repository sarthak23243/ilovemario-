
function preload() {
	world_kick=loadSound("kick.wav");
	world_jump=loadSound("jump.wav");
	world_gameover=loadSound("gameover.wav")
	world_coin=loadSound("coin.wav");
	world_die=loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("gameConsole");
	// :)
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	// :()
}


function draw() {
	game();
}

// :) i love mario 

function modelLoaded(){
	console.log("model loaded :)");

}

function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
	console.log(results);
  }
}


