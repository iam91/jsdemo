var BLOCK_SIZE = 20;
var NUM_OF_BLOCKS_PER_TETRIS = 4;

function Tetris(shape, centerPosition){
	this.shape = shape;
	
	this.blocks = Array(NUM_OF_BLOCKS_PER_TETRIS);

	this.centerPosition = centerPosition;

	this.getBlocks = function(){
		return this.blocks;
	};

	this.physicalMovement = function(){
		for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
			this.blocks[i].setAttribute('style', 
				'top:' + (BLOCK_SIZE * this.centerPosition[1] + BLOCK_SIZE * this.shape[i][1]) + 'px;' 
				+ 'left:' + (BLOCK_SIZE * this.centerPosition[0] + BLOCK_SIZE * this.shape[i][0]) + 'px;');
		}
	};

	this.addToField = function(field){
		for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
			this.blocks[i] = document.createElement('div');
			this.blocks[i].setAttribute('class', 'block');
			field.appendChild(this.blocks[i]);
		}
		this.physicalMovement();
	};
	
	this.spin = function(spinMetrix){
		newShape = Array(4);
		for(var i = 0; i < NUM_OF_BLOCKS_PER_TETRIS; i++){
			newShape[i] = [
				spinMetrix[0][0] * this.shape[i][0] + spinMetrix[1][0] * this.shape[i][1], 
				spinMetrix[0][1] * this.shape[i][0] + spinMetrix[1][1] * this.shape[i][1]
			];
		}
		this.shape = newShape;
		this.physicalMovement();
	};

	this.down = function(){
		this.centerPosition[1]++;
		this.physicalMovement();
	};

	this.left = function(){
		this.centerPosition[0]--;
		this.physicalMovement();
	};

	this.right = function(){
		this.centerPosition[0]++;
		this.physicalMovement();
	};
}