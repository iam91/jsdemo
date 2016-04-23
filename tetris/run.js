var field = document.getElementById('field');

var freeSpace = new FreeSpace(25, 30);
var temp = new Tetris(T, [12, 5], freeSpace);

document.onkeydown = function(){
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

temp.addToField(field);

setInterval('temp.down()', 1000);