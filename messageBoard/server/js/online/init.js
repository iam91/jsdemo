queryMsgList(formList);

var i;
var list;
var tt;
function showList(){
	var len = list.childNodes.length;
	clearTimeout(tt);
	if(i < len){
		list.childNodes[i].className = 'msg-show card';
		i++;
		tt = setTimeout(showList, 200);
	}
}


var t = setTimeout(init, 200);
function init(){
	board.className = 'show board-show card';
	submitMsg.className = 'submit-msg btn-flip show';
	clear.className = 'clear btn-flip show';
	list = document.getElementById('msg-list');
	i = 0;
	tt = setTimeout(showList, 200);
	clearTimeout(t);
}

function formList(msgArray){
	var list = document.getElementById('msg-list');
	var messageArray = JSON.parse(msgArray);
	for(var i = 0; i < messageArray.length; i++){
		var msg = messageArray[i];
		var name = msg.name;
		var message = msg.message;
		var msgCard = document.createElement('div');
		
		msgCard.className = 'msg card';
		msgCard.innerHTML = name + ' ' + message;
		list.appendChild(msgCard);
	}
}


