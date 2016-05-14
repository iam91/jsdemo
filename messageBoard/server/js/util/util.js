function addURLParam(url, name, value){
	url += (url.indexOf('?') == -1 ? '?' : '&');
	url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
	return url;
}

function setCookie(key, value){
	var cookie = getCookieAll();
	var keyHead = cookie.indexOf(key);
	if(keyHead === -1){
		var cookieString = key + '=' + value + ';';
		document.cookie += encodeURIComponent(cookieString);
	}
	else{
		var valueHead = keyHead + key.length + 1;
		var valueTail = cookie.indexOf(';', valueHead);
		var oldPair = cookie.substring(keyHead, valueTail);
		var newPair = key + '=' + value;
		cookie = cookie.replace(oldPair, newPair);
		document.cookie = encodeURIComponent(cookie);
	}
}

function setExpire(expire){
	var cookieString = 'expire=' + expire + ';';
	document.cookie += encodeURIComponent(cookieString);
}

function getCookieAll(){
	return decodeURIComponent(document.cookie);
}

function getCookieByName(name){
	var cookie = getCookieAll();
	var nameHead = cookie.indexOf(name);
	if(nameHead === -1){
		return null;
	}
	else{
		var valueHead = nameHead + name.length + 1;
		var valueTail = cookie.indexOf(';', valueHead);
		var value = cookie.substring(valueHead, valueTail);
		return value;
	}
}

function formatText(text){
	var ret = '';
	for(var i = 0; i < text.length; i++){
		if(text[i] === '\n'){
			ret += '<br>';
		}
		else{
			ret += text[i];
		}
	}
	return ret;
}