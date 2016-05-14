(function(window, document){
	var cookieJSZ = {

		set: function(name, value, param){
			var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
			if(param){
				cookie += param.expire ? 'expires=' + param.expire + ';' : '';
				cookie += param.domain ? 'domain=' + param.domain + ';' : '';
				cookie += param.path ? 'path=' + param.path + ';' : '';
				cookie += param.secure ? 'secure;' : '';
			}
			document.cookie = cookie;
		},

		get: function(nam){
			var cookie = document.cookie;
			if(cookie){
				if(nam){
					//return by name
					var name = encodeURIComponent(nam);
					var nameHead = cookie.indexOf(name + '=');
					if(nameHead === -1){
						return undefined;
					}
					else{
						var valueHead = nameHead + name.length + 1;
						var valueTail = cookie.indexOf(';', valueHead);
						valueTail = valueTail === -1 ? cookie.length : valueTail;
						var value = cookie.substring(valueHead, valueTail);
						return decodeURIComponent(value);
					}
				}
				else{
					//return all
					var pairs = cookie.split(';');
					for(var i = 0; i < pairs.length; i++){
						pairs[i] = pairs[i].replace(' ', '').split('=');
						pairs[i][0] = decodeURIComponent(pairs[i][0]);
						pairs[i][1] = decodeURIComponent(pairs[i][1]);
					}
					return pairs;
				}
			}
			else{
				return undefined;
			}
		},

		exist: function(name){
			if(name){
				var nam = encodeURIComponent(name);
				var cookie = document.cookie;
				var index = cookie.indexOf(nam + '=');
				return !(index === -1);
			}
			else{
				return false;
			}
		},

		del: function(name){
			if(name){
				this.set(name, '', {expire: -1});
			}
		}
	}

	window.cookieJSZ = cookieJSZ;
})(window, document);
