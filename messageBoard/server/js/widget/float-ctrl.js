function floatCtrlEvent(ctrl){
	ctrl.addEventListener('mousedown', function(){
		window.onmousemove = function(e){
			refresh.style.left = String(e.clientX - 25) + 'px';
			refresh.style.top = String(e.clientY - 25) + 'px';
		};
	}, false);

	ctrl.addEventListener('mouseup', function(){
		window.onmousemove = null;
	}, false);
	
	ctrl.onselectstart = function(){
		return false;
	};
}