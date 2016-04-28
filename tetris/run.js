var field = document.getElementById('field');
var control = document.getElementById('control');
var restart = document.createElement('div');
restart.setAttribute('class', 'btn');
restart.innerHTML = 'Restart';

var freeSpace = new FreeSpace(SPACE_WIDTH, SPACE_LENGTH);

var t = 0;
var tetris = null;
var rand = undefined;
function tetrisCreator(){
	tetris.down();
	if(tetris.isStop()){
		clearInterval(t);
		if(freeSpace.isFailed()){
			alert('failed');
		}
		else{
			tetris = null;
			tetris = new Tetris(shapeList[rand], [START_X, START_Y], freeSpace);
			tetris.addToField(field);
			rand = Math.floor(Math.random() * shapeList.length);
			controlShow();
			t = setInterval(tetrisCreator, 600);
		}
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
				'top:' + (BLOCK_SIZE * (3 + nextShape[i][1])) + 'px;' 
				+ 'left:' + (BLOCK_SIZE * (5 + nextShape[i][0])) + 'px;');
		control.appendChild(b);
	}
}

function doRestart(){
	//stop tetris from moving down
	clearTimeout(t);
	//clear all
	while(field.hasChildNodes()){
		field.removeChild(field.firstChild);
	}
	tetris.clear();
	tetris = null;
	freeSpace.clearAll();
	//reset control
	while(control.hasChildNodes()){
		control.removeChild(control.firstChild);
	}
	control.innerHTML = 'Start Game';
	gameIsStart = false;
	//restart button erase out
	opa = 1.0;
	speed = -0.05;
	tt = setTimeout(restartButtonErase, 10);
}

var tt = 0;
var opa = 0.0;
var speed = 0.05;
function restartButtonErase(){
	restart.setAttribute('style', 'float:right;margin-top:30px;opacity: ' 
		+ (opa + speed));
	clearTimeout(tt);
	opa += speed;
	if(opa < 1.0 && speed > 0){
		tt = setTimeout(restartButtonErase, 10);
	}
	else if(opa > 0.0 && speed < 0){
		tt = setTimeout(restartButtonErase, 10);
	}
	else if(opa >= 1.0 && speed > 0){
		//bind restarting
		restart.onclick = doRestart;
	}
}

var gameIsStart = false;
control.onclick = function(){
	if(!gameIsStart){
		control.innerHTML = '';
		rand = Math.floor(Math.random() * shapeList.length);
		tetris = new Tetris(shapeList[rand], [START_X, START_Y], freeSpace);
		tetris.addToField(field);
		rand = Math.floor(Math.random() * shapeList.length);
		controlShow();
		t = setInterval(tetrisCreator, 600);
		gameIsStart = true;
		//add restart button
		restart.setAttribute('style', 'float:right;margin-top:30px;opacity: 0.0;');
		control.parentNode.appendChild(restart);
		//restart button erase in
		opa = 0.0
		speed = 0.05;
		tt = setTimeout(restartButtonErase, 10);
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
