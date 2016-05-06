queryMsgList();

var board = document.querySelector('#board');
var submitMsg = document.querySelector('.submit-msg');
var clear = document.querySelector('.clear');
var msgDraft = document.querySelector('#msg-draft');

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

	flipBtnOnClick(submitMsg);
	flipBtnOnClick(clear);
}

function queryMsgList(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				var msgArray = xhr.responseText;
				formList(msgArray);
			}
			else{
				alert('Request was unsuccessful: ' + xhr.status);
				return null;
			}
		}
	};
	var urlString = '/msg';
	xhr.open('get', urlString, true);
	xhr.send(null);
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


