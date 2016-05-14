(function(document, win){
	var t = {
		f: function(){
			console.log(document);
		}
	}

	win.t = t;
})(0, window);

t.f();

var s = 'a=1;b=2;c=3;';
var ss = s.split(';');
ss.pop();
console.log(ss);

document.cookie = 'name=aa;'
console.log(document.cookie);