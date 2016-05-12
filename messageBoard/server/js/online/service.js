function queryMsgList(func, page, pageSize){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(event){
		if(xhr.readyState == 4){
			if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				var msgArray = JSON.parse(xhr.responseText);
				func(msgArray);
			}
			else{
				alert('Request was unsuccessful: ' + xhr.status);
				return null;
			}
		}
	};
	var urlString = '/msg';
	urlString = addURLParam(urlString, 'page', page);
	urlString = addURLParam(urlString, 'pageSize', pageSize);
	xhr.open('get', urlString, true);
	xhr.send(null);
}

function clearList(){
	var list = document.getElementById('msg-list');
	while(list.hasChildNodes()){
		list.removeChild(list.firstChild);
	}
}

function appendList(messageArray){
	if(messageArray.length === pageSize){
		page++;
	}
	var list = document.getElementById('msg-list');
	for(var i = 0; i < messageArray.length; i++){
		var msg = messageArray[i];
		var msgCard = document.createElement('div');
		formMessageCard(msgCard, msg);
		list.appendChild(msgCard);
	}
	
	var show = showList(listShowIndex);
	show();
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
	name.innerHTML = decodeURIComponent(msg.name);
	up.appendChild(name);

	var message = document.createElement('div');
	message.classList.add('msg-content');
	message.innerHTML = formatText(decodeURIComponent(msg.message));
	down.appendChild(message);
}

function showList(showListStart){
	var showListCnt = showListStart;
	var list = document.getElementById('msg-list');
	var t = 0;
	var len = list.childNodes.length;
	function show(){
		clearTimeout(t);
		if(showListCnt < len){
			list.childNodes[showListCnt].classList.add('msg-show');
			listShowIndex++;
			showListCnt++;
			t = setTimeout(show, 200);
		}
	}
	return show;
}
