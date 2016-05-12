function flipBtnEvent(btn){
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