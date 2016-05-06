window.onload = function(){
	var flipBtn = document.querySelector('.btn-flip');
	var flipBtnFront = document.querySelector('.btn-flip .btn-flip-front');
	var flipBtnBack = document.querySelector('.btn-flip .btn-flip-back');
	flipBtnFront.onclick = function(){
		flipBtn.classList.add('btn-flip-show');
		flipBtnFront.classList.add('btn-flip-front-show');
		flipBtnBack.classList.add('btn-flip-back-show');
	};
};