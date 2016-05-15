/*function flipBtnEvent(btn){
	//given element object, how to select a child of specified class?
	var flipBtnFront = btn.childNodes[3];
	var flipBtnBack = btn.childNodes[1];
	var flipBtnYes = btn.childNodes[1].childNodes[3];
	var flipBtnNo = btn.childNodes[1].childNodes[5];

	flipBtnFront.addEventListener('click', function(){
		flipBtnFront.classList.add('btn-flip-front-show');
		flipBtnBack.classList.add('btn-flip-back-show');
	}, false);

	flipBtnNo.addEventListener('click', function(){
		flipBtnFront.classList.remove('btn-flip-front-show');
		flipBtnBack.classList.remove('btn-flip-back-show');
	}, false);

	flipBtnYes.addEventListener('click', function(){
		flipBtnFront.classList.remove('btn-flip-front-show');
		flipBtnBack.classList.remove('btn-flip-back-show');
	}, false);
}
*/
;(function(document, window){
	var flipBtns = document.querySelectorAll('.btn-flip');

	var f1 = undefined;
	var f2 = undefined;
	var f3 = undefined;

	for(var i = 0; i < flipBtns.length; i++){
		flipBtnFront = flipBtns[i].childNodes[3];
		flipBtnBack = flipBtns[i].childNodes[1];
		flipBtnYes = flipBtns[i].childNodes[1].childNodes[3];
		flipBtnNo = flipBtns[i].childNodes[1].childNodes[5];

		console.log(flipBtnFront);

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
})(document, window);