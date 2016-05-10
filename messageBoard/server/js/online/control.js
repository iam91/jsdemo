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
				}
				else{
					alert('Post message request was unsuccessful: ' + xhr.status);
				}
			}
		};
		xhr.open('post', urlString, true);

		var tempMsg = {'name': 'x', 'message': value};

		xhr.send(JSON.stringify(tempMsg));
	}
}, false);