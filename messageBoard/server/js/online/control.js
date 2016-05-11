flipBtnOnClick(submitMsg);
flipBtnOnClick(clear);

clearYes.addEventListener('click', function(){
	msgDraft.value = '';
}, false);

submitMsgYes.addEventListener('click', function(){
	var value = msgDraft.value;
	msgDraft.value = '';
	if(value === ''){
		return;
	}
	else{
		var urlString = '/msg';
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
					//post successfully
					clearList();
					queryMsgList(formList);
					i = 0;
					tt = setTimeout(showList, 200);
				}
				else{
					alert('Post message request was unsuccessful: ' + xhr.status);
				}
			}
		};
		xhr.open('post', urlString, true);
		var name = getCookieByName('name');
		var tempMsg = {'name': name, 'message': value};
		xhr.send(JSON.stringify(tempMsg));
	}
}, false);

window.addEventListener('scroll', function(){
	//TODO too much computation?
	var scroll = document.body.scrollTop;
	var boardGroup = document.querySelector('#board-group');
	var left = document.querySelector('#left');
	if(scroll > 80){
		boardGroup.classList.add('float');
	}
	else{
		boardGroup.classList.remove('float');
	}
}, false);