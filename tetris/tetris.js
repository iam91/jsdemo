var field = document.getElementById('field');
var block = document.createElement('div');
block.setAttribute('class', 'block');
block.setAttribute('style', 'left:30px;');
var i = 0;
var shape = [
	document.createElement('div'),
	document.createElement('div'),
	document.createElement('div'),
	document.createElement('div')
];
addToField = function(field, T, b, shape){
		shape[0].setAttribute('class', 'block');
		shape[1].setAttribute('class', 'block');
		shape[2].setAttribute('class', 'block');
		shape[3].setAttribute('class', 'block');
		shape[0].setAttribute('style', 'top:' + (100 + 20 * T[0][1]) + 'px;' + 'left:' + (100 + 20 * T[0][0]) + 'px;');
		shape[1].setAttribute('style', 'top:' + (100 + 20 * T[1][1]) + 'px;' + 'left:' + (100 + 20 * T[1][0]) + 'px;');
		shape[2].setAttribute('style', 'top:' + (100 + 20 * T[2][1]) + 'px;' + 'left:' + (100 + 20 * T[2][0]) + 'px;');
		shape[3].setAttribute('style', 'top:' + (100 + 20 * T[3][1]) + 'px;' + 'left:' + (100 + 20 * T[3][0]) + 'px;');
		//alert('buttom:' + (100 + 20 * T[3][1]) + 'px;' + 'left:' + (100 + 20 * T[3][0]) + 'px;');
		field.appendChild(shape[0]);
		field.appendChild(shape[1]);
		field.appendChild(shape[2]);
		field.appendChild(shape[3]);
	};

addToField(field, spin(shapeList[4]), block, shape);

function fun(){
	block.setAttribute('style', 'top: ' + i * 30 + 'px;');
	i++;
}
setInterval(fun, 1000);

