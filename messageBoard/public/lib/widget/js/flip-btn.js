;(function(document, options){
	var flipBtns = document.querySelectorAll('.btn-flip');

	var f1 = undefined;
	var f2 = undefined;
	var f3 = undefined;
	var option = undefined;
	var flipBtn = undefined;
	var flipBtnQuest = undefined;
	var flipBtnFront = undefined;
	var flipBtnBack = undefined;
	var flipBtnYes = undefined;
	var flipBtnNo = undefined;

	for(var i = 0; i < flipBtns.length; i++){

		flipBtn = flipBtns[i];

		for(var j = 0; j < flipBtn.childNodes.length; j++){
			if(flipBtn.childNodes[j].nodeType == 1){
				flipBtnFront = flipBtn.childNodes[j];
				break;
			}
		}
		
		flipBtnQuest = document.createElement('p');
		flipBtnBack = document.createElement('div');
		flipBtnYes = document.createElement('div');
		flipBtnNo = document.createElement('div');

		flipBtnQuest.classList.add('btn-flip-question');
		flipBtnQuest.innerHTML = 'Are you sure you want to do that?';
		flipBtnBack.classList.add('btn-flip-back');
		flipBtnNo.classList.add('btn-flip-no');
		flipBtnNo.innerHTML = 'No';
		flipBtnYes.classList.add('btn-flip-yes');
		flipBtnYes.innerHTML = 'Yes';

		flipBtn.appendChild(flipBtnBack);
		flipBtnBack.appendChild(flipBtnQuest);
		flipBtnBack.appendChild(flipBtnYes);
		flipBtnBack.appendChild(flipBtnNo);

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