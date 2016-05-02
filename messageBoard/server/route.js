function route(pathname, handler, res){
	console.log('Route ' + pathname);
	if(typeof handler[pathname] === 'function'){
		handler[pathname](pathname, res);
	}
	else{
		console.log('No request handler found for ' + pathname);
	}
}

exports.route = route;