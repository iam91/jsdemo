var I = [[-1, 0], [0, 0], [1, 0], [2, 0]];
var L = [[0, 0], [0, 1], [1, 0], [2, 0]];
var J = [[-2, 0], [-1, 0], [0, 0], [0, 1]];
var O = [[0, 0], [1, 0], [0, 1], [1, 1]];
var Z = [[-1, 0], [0, 0], [0, 1], [1, 1]];
var T = [[0, 0], [-1, 0], [1, 0], [0, -1]];
var S = [[-1, 1], [0, 1], [0, 0], [1, 0]];

var shapeList = [I, J, L, O, S, T, Z];

var spinMetrix = [[0, 1], [-1, 0]];

function spin(shape){
	retspin = Array(4);
	retspin[0] = [
		spinMetrix[0][0] * shape[0][0] + spinMetrix[1][0] * shape[0][1], 
		spinMetrix[0][1] * shape[0][0] + spinMetrix[1][1] * shape[0][1]
		];
	retspin[1] = [
		spinMetrix[0][0] * shape[1][0] + spinMetrix[1][0] * shape[1][1], 
		spinMetrix[0][1] * shape[1][0] + spinMetrix[1][1] * shape[1][1]
		];
	retspin[2] = [
		spinMetrix[0][0] * shape[2][0] + spinMetrix[1][0] * shape[2][1], 
		spinMetrix[0][1] * shape[2][0] + spinMetrix[1][1] * shape[2][1]
		];
	retspin[3] = [
		spinMetrix[0][0] * shape[3][0] + spinMetrix[1][0] * shape[3][1], 
		spinMetrix[0][1] * shape[3][0] + spinMetrix[1][1] * shape[3][1]
		];
	return retspin;
}