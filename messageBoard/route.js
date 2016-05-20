var path = require('path');
var log = require('./log');

function route(method, pathname, query, handler, res, postData){
	
	log.log('ROUTE', 'pathname', pathname);

	var handlerIndex = undefined;
	var ext = path.extname(pathname);

	if(pathname === '/'
		|| !(ext === '')){
		//fetch static resource
		handlerIndex = '/public';
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