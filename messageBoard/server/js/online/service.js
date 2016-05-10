function queryMsgList(fun){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(event){
		if(xhr.readyState == 4){
			if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				var msgArray = xhr.responseText;
				//is it right?
				fun(msgArray);
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

function temp(){
	console.log('in temp');
}