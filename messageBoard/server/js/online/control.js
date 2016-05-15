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
	var left = document.querySelector('.left');
	if(scroll > 80){
		left.classList.add('float');
	}
	else{
		left.classList.remove('float');
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

signout.addEventListener('dblclick', function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				//cookie
				location.href = '/html/index.html';
			}
			else{
				alert('Request was unsuccessful: ' + xhr.status);
			}
		}
	};
	var name = getCookieByName('name');
	var urlString = '/signout';
	urlString = addURLParam(urlString, 'name', name);
	xhr.open('get', urlString, true);
	xhr.send(null);
}, false);

upload.addEventListener('click', function(){
	input.onchange = function(){
		var file = input.files[0];
		var formData = new FormData();
		formData.append('img', 'aaa');
		formData.append('src', 'bbb');
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
					//post successfully
					alert('oops');
				}
				else{
					alert('Post message request was unsuccessful: ' + xhr.status);
				}
			}
		}
		xhr.open('post', '/upload', true);
		xhr.send(formData);
		/*
		var reader = new FileReader();
		reader.readAsDataURL(input.files[0]);
		reader.onload = function(){
			var preview = document.getElementById('preview');
			//console.log(reader.result);
			//preview.innerHTML = '<img class="preview" src="' + reader.result + '" alt="preview"/>';
		}*/
	}
	input.click();
}, false);
