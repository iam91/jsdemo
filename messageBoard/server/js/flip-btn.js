function flipBtnOnClick(btn){
	var flipBtnFront = btn.childNodes[3];//document.querySelector('.btn-flip .btn-flip-front');
	var flipBtnBack = btn.childNodes[1];//document.querySelector('.btn-flip .btn-flip-back');
	var flipBtnYes = btn.childNodes[1].childNodes[3];//document.querySelector('.btn-flip-yes');
	var flipBtnNo = btn.childNodes[1].childNodes[5];//document.querySelector('.btn-flip-no');
	flipBtnFront.onclick = function(){
		flipBtnFront.classList.add('btn-flip-front-show');
		flipBtnBack.classList.add('btn-flip-back-show');
	};

	flipBtnNo.onclick = function(){
		flipBtnFront.classList.remove('btn-flip-front-show');
		flipBtnBack.classList.remove('btn-flip-back-show');
	}

	flipBtnYes.onclick = function(){
		flipBtnFront.classList.remove('btn-flip-front-show');
		flipBtnBack.classList.remove('btn-flip-back-show');
	}
}