var log = require('./log');

function route(method, pathname, query, handler, res, postData){
	
	log.log('ROUTE', 'pathname', pathname);

	var handlerIndex = undefined;
	if(pathname.indexOf('/css') === 0){
		handlerIndex = '/css';
	}
	else if(pathname.indexOf('/js') === 0){
		handlerIndex = '/js';
	}
	else if(pathname.indexOf('/html') === 0){
		handlerIndex = '/html';
	}
	else if(pathname.indexOf('/lib') === 0){
		handlerIndex = '/lib';
	}
	else if(pathname.indexOf('/favicon.ico') === 0){
		handlerIndex = '/favicon.ico';
	}
	else if(pathname === '/'){
		handlerIndex = '/';
	}
	else if(pathname === '/index.html'){
		handlerIndex = '/index.html';
	}
	else if(pathname.indexOf('/user') === 0){
		handlerIndex = '/user';
	}
	else if(pathname.indexOf('/msg') === 0){
		handlerIndex = '/msg';
	}
	else if(pathname.indexOf('/upload') === 0){
		handlerIndex = '/upload';
	}
	else if(pathname.indexOf('/signout') === 0){
		handlerIndex = '/signout';
	}

	if(typeof handler[handlerIndex] === 'function'){
		handler[handlerIndex](method, pathname, res, query, postData);
	}
	else{
		console.log('No request handler found for ' + handlerIndex + ';' + pathname);
	}
}

exports.route = route;