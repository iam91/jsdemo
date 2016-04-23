var field = document.getElementById('field');

var freeSpace = new FreeSpace(25, 30);
//var temp = new Tetris(T, [12, 5], freeSpace);

var keyStrokeHandler = function(){
	code = event.keyCode;
	if(code == 32){
		temp.spin(spinMetrix);
	}
	else if(code == 39){
		temp.right();
	}
	else if(code == 37){
		temp.left();
	}
	else if(code == 40){
		temp.down();
	}
};

//temp.addToField(field);

function fun(freeSpace){
	temp.down();
	if(temp.isStop()){
		clearInterval(t);

		temp = null;
		rand = Math.floor(Math.random() * 7);
		document.onkeydown = keyStrokeHandler;
		temp = new Tetris(shapeList[rand], [12, 5], freeSpace);
		temp.addToField(field);
		t = setInterval('fun()', 600);
	}
}

var t = 0;
var temp = null;
var rand = Math.floor(Math.random() * 7);
document.onkeydown = keyStrokeHandler;

temp = new Tetris(shapeList[rand], [12, 5], freeSpace);
temp.addToField(field);
t = setInterval('fun(freeSpace);', 600);