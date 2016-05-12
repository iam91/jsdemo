page = 1;
oldPage = page;
listShowIndex = 0;
queryMsgList(appendList, page, pageSize);

(init())();

function init(){
	var t = setTimeout(ini, 200);
	function ini(){
		board.classList.add('show');
		submitMsg.classList.add('show');
		clear.classList.add('show');
		clearTimeout(t);
	}
	return ini;
}

