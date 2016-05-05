signinSwitch = document.querySelector('.signin-switch');
signupSwitch = document.querySelector('.signup-switch');
signin = document.querySelector('.signin');
signup = document.querySelector('.signup');
signinBtn = document.querySelector('#signin-btn');
signupBtn = document.querySelector('#signup-btn');

signinSwitch.onclick = function(){
	signin.className = 'signin card signin-flipped';
	signup.className = 'signup card signup-flipped';
}

signupSwitch.onclick = function(){
	signin.className = 'signin card';
	signup.className = 'signup card';
}

signinBtn.onclick = function(){
	var urlString = '/user';
	var inputForm = document.getElementById('signin-form');
	
	var inputs = inputForm.elements;
	
	for(var i = 0; i < inputs.length; i++){
		var input = inputs[i];
		var name = input.name;
		if(input.value === ''){
			input.previousElementSibling.innerHTML = name + "<b> can't be empty!</b>";
			return;
		}
		urlString = addURLParam(urlString, input.name, input.value);
	}
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
				var ret = xhr.responseText;
				if(ret === 'ok'){
					location.href = '/html/online.html';
				}
			}
			else{
				alert('Request was unsuccessful: ' + xhr.status);
			}
		}
	}
	xhr.open('get', urlString, true);
	xhr.send(null);
}

signupBtn.onclick = function(){

}
