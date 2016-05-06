window.onload = function(){
	var flipBtn = document.querySelector('.btn-flip');
	var flipBtnFront = document.querySelector('.btn-flip .btn-flip-front');
	var flipBtnBack = document.querySelector('.btn-flip .btn-flip-back');
	var flipBtnYes = document.querySelector('.btn-flip-yes');
	var flipBtnNo = document.querySelector('.btn-flip-no');
	
	flipBtnFront.onclick = function(){
		flipBtnFront.classList.add('btn-flip-front-show');
		flipBtnBack.classList.add('btn-flip-back-show');
	};

	flipBtnNo.onclick = function(){
		flipBtnFront.classList.remove('btn-flip-front-show');
		flipBtnBack.classList.remove('btn-flip-back-show');
	}
};