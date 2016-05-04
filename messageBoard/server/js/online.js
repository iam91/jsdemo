var board = document.getElementById('board');

var t = setTimeout(init, 500);
function init(){
	board.className += ' board-show';
	clearTimeout(t);
}




