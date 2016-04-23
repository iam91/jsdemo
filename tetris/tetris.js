var BLOCK_SIZE = 20;
var NUM_OF_BLOCKS_PER_TETRIS = 4;

function Tetris(shape, centerPosition, freeSpace){
	this.shape = shape;
	this.blocks = Array(NUM_OF_BLOCKS_PER_TETRIS);
	this.freeSpace = freeSpace;

	this.centerPosition = centerPosition;
	this.currPositions = Array(NUM_OF_BLOCKS_PER_TETRIS);

	this.stop = false;

	this.isStop = function(){
		return this.stop;
	};

	this.computePositions = function(center, shape){
		newPositions = Array(NUM_OF_BLOCKS_PER_TETRIS);
		for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
			newPositions[i] = [
				center[0] + shape[i][0],
				center[1] + shape[i][1] 
			];
		}
		return newPositions;
	};

	this.canDo = function(newPositions){
		flag = true;
		for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
			x = newPositions[i][0];
			y = newPositions[i][1];
			if(!this.freeSpace.isFree(x, y)){
				flag = false;
				break;
			}
		}
		return flag;
	};

	this.physicalMovement = function(){
		for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
			this.blocks[i].setAttribute('style', 
				'top:' + (BLOCK_SIZE * (this.centerPosition[1] + this.shape[i][1])) + 'px;' 
				+ 'left:' + (BLOCK_SIZE * (this.centerPosition[0] + this.shape[i][0])) + 'px;');
			this.currPositions[i][0] = this.centerPosition[0] + this.shape[i][0];
			this.currPositions[i][1] = this.centerPosition[1] + this.shape[i][1]; 
		}
	};

	this.addToField = function(field){
		for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
			this.blocks[i] = document.createElement('div');
			this.blocks[i].setAttribute('class', 'block');
			field.appendChild(this.blocks[i]);
			this.currPositions[i] = [0, 0];
		}
		this.physicalMovement();
	};
	
	this.spin = function(spinMetrix){
		if(!this.stop){
			newShape = Array(NUM_OF_BLOCKS_PER_TETRIS);
			for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
				newShape[i] = [
					spinMetrix[0][0] * this.shape[i][0] + spinMetrix[1][0] * this.shape[i][1], 
					spinMetrix[0][1] * this.shape[i][0] + spinMetrix[1][1] * this.shape[i][1]
				];
			}
			newPositions = this.computePositions(this.centerPosition, newShape);
			if(this.canDo(newPositions)){
				this.shape = newShape;
				this.physicalMovement();
			}
		}
	};

	this.down = function(){
		if(!this.stop){
			this.centerPosition[1]++;
			newPositions = this.computePositions(this.centerPosition, this.shape);
			if(this.canDo(newPositions)){
				this.physicalMovement();
			}
			else{
				this.centerPosition[1]--;
				this.stop = true;
				this.freeSpace.setOccupied(this.currPositions, this.blocks);
			}
		}
	};

	this.left = function(){
		if(!this.stop){
			this.centerPosition[0]--;
			newPositions = this.computePositions(this.centerPosition, this.shape);
			if(this.canDo(newPositions)){
				this.physicalMovement();
			}
			else{
				this.centerPosition[0]++;
			}
		}
	};

	this.right = function(){
		if(!this.stop){
			this.centerPosition[0]++;
			newPositions = this.computePositions(this.centerPosition, this.shape);
			if(this.canDo(newPositions)){
				this.physicalMovement();
			}
			else{
				this.centerPosition[0]--;
			}
		}
	};
}

function FreeSpace(width, length){
	this.width = width;
	this.length = length;

	this.freeSpace = (function(){
		free = Array(width);
		for(var i = 0; i < width + 2; i++){
			free[i] = Array(length);
			for(var j = 0; j < length + 1; j++){
				if(i == 0 || i == width + 1 || j == length){
					free[i][j] = [false, null];
				}
				else{
					free[i][j] = [true, null];
				}
			}
		}
		return free;
	})();

	this.setOccupied = function(positions, blocks){
		for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
			x = positions[i][0];
			y = positions[i][1];
			this.freeSpace[x][y][0] = false;
			this.freeSpace[x][y][1] = blocks[i];
		}
	};

	this.isFree = function(x, y){
		return this.freeSpace[x][y];
	};

	this.getWidth = function(){
		return this.width;
	};

	this.getLength = function(){
		return this.length;
	};
}