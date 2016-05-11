queryMsgList(formList);

var t = setTimeout(init, 200);
function init(){
	board.classList.add('show');
	submitMsg.classList.add('show');
	clear.classList.add('show');
	list = document.getElementById('msg-list');
	i = 0;
	tt = setTimeout(showList, 200);
	clearTimeout(t);
}

