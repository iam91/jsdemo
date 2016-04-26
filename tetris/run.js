var SPACE_WIDTH = 6;
var SPACE_LENGTH = 30;
var START_X = SPACE_WIDTH / 2;
var START_Y = 5;

var field = document.getElementById('field');
var control = document.getElementById('control');

var freeSpace = new FreeSpace(SPACE_WIDTH, SPACE_LENGTH);

control.onmouseenter = function(){
	control.setAttribute('style', 'border-color: #999999;');
}

control.onmouseleave = function(){
	control.setAttribute('style', 'border-color: #ffffff;');
}

control.onmouseup = function(){
	control.setAttribute('style', 'box-shadow: 0 2px 2px 1px #dddddd;');
}

var t = 0;
var tetris = null;
var rand = undefined;

function tetrisCreator(){
	tetris.down();
	if(tetris.isStop()){
		clearInterval(t);

		if(freeSpace.isFailed()){
			//failed handle
		}

		tetris = null;
		tetris = new Tetris(shapeList[rand], [START_X, START_Y], freeSpace);
		tetris.addToField(field);
		rand = Math.floor(Math.random() * shapeList.length);
		controlShow();
		t = setInterval('tetrisCreator();', 600);
	}
}

function controlShow(){
	var nextShape = shapeList[rand];
	while(control.hasChildNodes()){
		control.removeChild(control.firstChild);
	}
	for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
		var b = document.createElement('div');
		b.setAttribute('class', 'block');
		b.setAttribute('style', 
				'top:' + (BLOCK_SIZE * (8 + nextShape[i][1])) + 'px;' 
				+ 'left:' + (BLOCK_SIZE * (8 + nextShape[i][0])) + 'px;');
		control.appendChild(b);
	}
}

var gameIsStart = false;
control.onmousedown = function(){
	control.setAttribute('style', 'box-shadow: 0 0px 0px 0px #dddddd;');
	control.innerHTML = '';
	if(!gameIsStart){
		rand = Math.floor(Math.random() * shapeList.length);
		tetris = new Tetris(shapeList[rand], [START_X, START_Y], freeSpace);
		tetris.addToField(field);
		rand = Math.floor(Math.random() * shapeList.length);
		controlShow();
		t = setInterval('tetrisCreator();', 600);
		gameIsStart = true;
	}
}

document.onkeydown = function(){
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
