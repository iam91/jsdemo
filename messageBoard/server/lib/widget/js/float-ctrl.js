;(function(document, window){
	var floatCtrls = document.querySelectorAll('.float-ctrl');

	var f1 = undefined;
	var f2 = undefined;
	var ctrl = undefined;

	for(var i = 0; i < floatCtrls.length; i++){
		ctrl = floatCtrls[i];

		f1 = (function(){
			var c = ctrl;
			return function(e){
				c.style.left = String(e.clientX - 25) + 'px';
				c.style.top = String(e.clientY - 25) + 'px';
			};
		})();

		f2 = (function(){
			var f = f1;
			return function(){
				window.onmousemove = f;
			}
		})();

		ctrl.addEventListener('mousedown', f2, false);
		ctrl.addEventListener('mouseup', function(){
			window.onmousemove = null;
		}, false);
		ctrl.onselectstart = function(){
			return false;
		};
	}
})(document, window);