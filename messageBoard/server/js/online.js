var board = document.getElementById('board');

var t = setTimeout(init, 1000);
function init(){
	board.className += ' board-show';
	clearTimeout(t);
}

