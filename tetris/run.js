var field = document.getElementById('field');

var temp = new Tetris(T, [5, 5]);
temp.addToField(field);
			alert('pause');
temp.spin(spinMetrix);
			alert('pause');
temp.spin(spinMetrix);
			alert('pause');
temp.spin(spinMetrix);
			alert('pause');
temp.down();
			alert('pause');
temp.down();
			alert('pause');
temp.left();
			alert('pause');
temp.right();
setInterval('temp.down()', 1000);