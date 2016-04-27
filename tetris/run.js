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
			//TODO 
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

var gameIsStart = false;
control.onmousedown = function(){
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

		opa = 0.0
		speed = 0.05;
		tt = setTimeout(fadeIn, 50);
	}
}

var tt = 0;
var opa = 0.0;
var speed = 0.01;
function fadeIn(){
	restart.setAttribute('style', 'float:right;margin-top:30px;opacity: ' 
		+ (opa + speed));
	clearTimeout(tt);
	opa += speed;
	if((opa + speed) < 1.0){
		tt = setTimeout(fadeIn, 50);
	}
	else{
		restart.onclick = function(){
			freeSpace.clearAll();
			//TODO
		};
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
