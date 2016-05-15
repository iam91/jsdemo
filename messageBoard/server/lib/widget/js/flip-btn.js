;(function(document){
	var flipBtns = document.querySelectorAll('.btn-flip');

	var f1 = undefined;
	var f2 = undefined;
	var f3 = undefined;
	var flipBtnFront = undefined;
	var flipBtnBack = undefined;
	var flipBtnYes = undefined;
	var flipBtnNo = undefined;

	for(var i = 0; i < flipBtns.length; i++){
		flipBtnFront = flipBtns[i].childNodes[3];
		flipBtnBack = flipBtns[i].childNodes[1];
		flipBtnYes = flipBtns[i].childNodes[1].childNodes[3];
		flipBtnNo = flipBtns[i].childNodes[1].childNodes[5];

		f1 = (function(){
			var btnFront = flipBtnFront;
			var btnBack = flipBtnBack;
			return function(){
				btnFront.classList.add('btn-flip-front-show');
				btnBack.classList.add('btn-flip-back-show');
			};
		})();

		f2 = (function(){
			var btnFront = flipBtnFront;
			var btnBack = flipBtnBack;
			return function(){
				btnFront.classList.remove('btn-flip-front-show');
				btnBack.classList.remove('btn-flip-back-show');
			};
		})();

		f3 = (function(){
			var btnFront = flipBtnFront;
			var btnBack = flipBtnBack;
			return function(){
				btnFront.classList.remove('btn-flip-front-show');
				btnBack.classList.remove('btn-flip-back-show');
			};
		})();

		flipBtnFront.addEventListener('click', f1, false);
		flipBtnNo.addEventListener('click', f2, false);
		flipBtnYes.addEventListener('click', f3, false);
	}
})(document);