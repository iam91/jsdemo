;(function(window, document){
	var cookieJSZ = {

		set: function(name, value, param){
			var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
			var date = new Date();
			if(param){
				if(typeof param.expire === 'number'
					|| typeof param.expire === 'string'){
					cookie += param.expire ? 'expires=' + param.expire + ';' : '';
				}
				else if(typeof param.expire === 'object'){
					var timeDelta = 0;
					timeDelta += param.expire.ms ? (param.expire.ms > 0 ? param.expire.ms : 0) : 0;
					timeDelta += param.expire.s ? (param.expire.s > 0 ? param.expire.s * 1000 : 0) : 0;
					timeDelta += param.expire.m ? (param.expire.m > 0 ? param.expire.m * 60000 : 0) : 0;
					timeDelta += param.expire.h ? (param.expire.h > 0 ? param.expire.h * 3600000 : 0) : 0;
					timeDelta += param.expire.d ? (param.expire.d > 0 ? param.expire.d * 86400000 : 0) : 0;
					date.setTime(date.getTime() + timeDelta);
					cookie += param.expire ? 'expires=' + date.toUTCString() + ';' : '';
				}
				
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

cookieJSZ.del('a');
