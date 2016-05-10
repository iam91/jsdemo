queryMsgList(formList);

var i;
var list;
var tt;
function showList(){
	var len = list.childNodes.length;
	clearTimeout(tt);
	if(i < len){
		list.childNodes[i].classList.add('msg-show');
		i++;
		tt = setTimeout(showList, 200);
	}
}


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

function formList(msgArray){
	var list = document.getElementById('msg-list');
	var messageArray = JSON.parse(msgArray);
	for(var i = 0; i < messageArray.length; i++){
		var msg = messageArray[i];
		var msgCard = document.createElement('div');
		formMessageCard(msgCard, msg);
		list.appendChild(msgCard);
	}
}

function formMessageCard(baseCard, msg){
	baseCard.className = 'msg card';

	var up = document.createElement('div');
	up.classList.add('msg-up');
	var down = document.createElement('div');

	baseCard.appendChild(up);
	baseCard.appendChild(down);

	var profile = document.createElement('div');
	profile.classList.add('msg-profile', 'card');
	up.appendChild(profile);

	var name = document.createElement('div');
	name.classList.add('msg-name');
	name.innerHTML = msg.name;
	up.appendChild(name);

	var message = document.createElement('div');
	message.innerHTML = msg.message;
	down.appendChild(message);
}
