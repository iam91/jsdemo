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

	if(typeof handler[handlerIndex] === 'function'){
		handler[handlerIndex](method, pathname, res, query, postData);
	}
	else{
		console.log('No request handler found for ' + handlerIndex + ';' + pathname);
	}
}

exports.route = route;