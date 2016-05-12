page = 1;
oldPage = page;
queryMsgList(appendList, page, pageSize);

var t = setTimeout(init, 200);
function init(){
	board.classList.add('show');
	submitMsg.classList.add('show');
	clear.classList.add('show');
	list = document.getElementById('msg-list');

	clearTimeout(t);
}

