function addURLParam(url, name, value){
	url += (url.indexOf('?') == -1 ? '?' : '&');
	url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
	return url;
}

function setCookie(key, value){
	var cookieString = key + '=' + value + ';';
	document.cookie += encodeURIComponent(cookieString);
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
	var valueHead = nameHead + name.length + 1;
	var valueTail = cookie.indexOf(';', valueHead);
	var value = cookie.substring(valueHead, valueTail);
	return value;
}