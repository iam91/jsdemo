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
				this.freeSpace.clearRows(this.currPositions);
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
		return this.freeSpace[x][y][0];
	};

	this.isFailed = function(){
		for(var i = 1; i < this.width + 2; i++){
			if(!this.freeSpace[i][0][0]){
				return true;
			}
		}
		return false;
	};

	this.clearRows = function(positions){
		var candidateRows = Array();
		var isCleared = undefined;
		var canRemove = undefined;

		for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
			y = positions[i][1];

			//whether this raw has been cleared
			isCleared = false;
			for(var j = 0; j < candidateRows.length; j++){
				if(candidateRows[j] == y){
					isCleared = true;
				}
			}
			if(!isCleared){
				candidateRows[candidateRows.length] = y;
			}
		}

		candidateRows.sort(function(x, y){
			if(x < y){
				return 1;
			}
			else if(x > y){
				return -1;
			}
			else if(x == y){
				return 0;
			}
		});

		var allFreeLine = -1;
		for(var i = this.length - 1; i >= 0; i--){
			isAllFree = true;
			for(var j = 1; j < this.width + 1; j++){
				if(!this.freeSpace[j][i][0]){
					isAllFree = false;
				}
			}
			if(isAllFree){
				allFreeLine = i;
				break;
			}
		}

		for(var i = 0; i < candidateRows.length; i++){
			y = candidateRows[i];
			canRemove = true;
			for(var j = 1; j < this.width + 1; j++){
				if(this.freeSpace[j][y][0]){
					canRemove = false;
				}
			}
			
			if(canRemove){
				//remove blocks
				for(var j = 1; j < this.width + 1; j++){
					//erase out

					//delete from document
					this.freeSpace[j][y][1].parentNode.removeChild(this.freeSpace[j][y][1]);
					this.freeSpace[j][y][1] = null;
					this.freeSpace[j][y][0] = true;
				}
				if(y > 0){
					//fall down
					for(var j = y; j > allFreeLine; j--){
						for(var k = 1; k < this.width + 1; k++){
							this.freeSpace[k][j][0] = this.freeSpace[k][j - 1][0];
							this.freeSpace[k][j][1] = this.freeSpace[k][j - 1][1];
							if(!this.freeSpace[k][j][0]){
								var step = 20;
								var speed = BLOCK_SIZE / step;
								for(var m = 1; m <= step; m++){
									this.freeSpace[k][j][1].setAttribute('style', 
										'top:' + (speed * m * j) + 'px;' 
										+ 'left:' + (speed * m * k) + 'px;');
								}
							}
						}
					}
					allFreeLine++;
					for(var j = i; j < candidateRows.length; j++){
						candidateRows[j]++;
					}
				}
			}
		}
	};

	this.getWidth = function(){
		return this.width;
	};

	this.getLength = function(){
		return this.length;
	};
}