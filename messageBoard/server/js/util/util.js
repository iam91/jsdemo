function addURLParam(url, name, value){
	url += (url.indexOf('?') == -1 ? '?' : '&');
	url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
	return url;
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