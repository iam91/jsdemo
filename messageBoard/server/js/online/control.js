flipBtnEvent(submitMsg);
flipBtnEvent(clear);
floatCtrlEvent(refresh);
//floatCtrlOnDoubleClick(refresh);
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
					page = 1;
					oldPage = page;
					listShowIndex = 0;
					queryMsgList(appendList, page, pageSize);
				}
				else{
					alert('Post message request was unsuccessful: ' + xhr.status);
				}
			}
		};
		xhr.open('post', urlString, true);
		var name = getCookieByName('name');
		var tempMsg = {'name': encodeURIComponent(name), 'message': encodeURIComponent(value)};
		xhr.send(JSON.stringify(tempMsg));
	}
}, false);

document.addEventListener('scroll', function(){
	//TODO too much computation?
	//document.documentElement.scrollTop ---ff
	//document.body.scrollTop ---chrome
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	var boardGroup = document.querySelector('#board-group');
	var left = document.querySelector('#left');
	if(scroll > 80){
		boardGroup.classList.add('float');
	}
	else{
		boardGroup.classList.remove('float');
	}
}, false);

document.addEventListener('scroll', function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
	if(scrollHeight === scrollTop + clientHeight && page != oldPage){
		oldPage = page;
		queryMsgList(appendList, page, pageSize);
	}
}, false);



refresh.addEventListener('dblclick', function(){
	clearList();
	page = 1;
	oldPage = page;
	listShowIndex = 0;
	queryMsgList(appendList, page, pageSize);
}, false);
