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
	var xhr = XMLHttpRequest();
	var url = '/usr';
	var inputForm = document.getElementById('signin-form');
	xhr.open('get', '/usr', true);
	xhr.send(new FormData(inputForm));
}

signupBtn.onclick = function(){

}

