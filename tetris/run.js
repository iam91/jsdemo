var START_X = 12;
var START_Y = 5;
var SPACE_WIDTH = 25;
var SPACE_LENGTH = 20;

var field = document.getElementById('field');

var freeSpace = new FreeSpace(SPACE_WIDTH, SPACE_LENGTH);

var t = 0;
var tetris = null;
var rand = Math.floor(Math.random() * 7);

var keyStrokeHandler = function(){
	code = event.keyCode;
	if(code == 32){
		tetris.spin(spinMetrix);
	}
	else if(code == 39){
		tetris.right();
	}
	else if(code == 37){
		tetris.left();
	}
	else if(code == 40){
		tetris.down();
	}
};

document.onkeydown = keyStrokeHandler;


tetris = new Tetris(shapeList[rand], [START_X, START_Y], freeSpace);
tetris.addToField(field);

function tetrisCreator(){
	tetris.down();
	if(tetris.isStop()){
		clearInterval(t);

		if(freeSpace.isFailed()){
			//failed handle
		}

		tetris = null;
		rand = Math.floor(Math.random() * shapeList.length);
		tetris = new Tetris(shapeList[rand], [START_X, START_Y], freeSpace);
		tetris.addToField(field);
		t = setInterval('tetrisCreator();', 600);
	}
}

t = setInterval('tetrisCreator();', 600);