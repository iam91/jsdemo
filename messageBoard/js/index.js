signinSwitch = document.querySelector('.signin-switch');
signupSwitch = document.querySelector('.signup-switch');
signin = document.querySelector('.signin');
signup = document.querySelector('.signup');

signinSwitch.onclick = function(){
	signin.className = 'signin card signin-flipped';
	signup.className = 'signup card signup-flipped';
}

signupSwitch.onclick = function(){
	signin.className = 'signin card';
	signup.className = 'signup card';
}

