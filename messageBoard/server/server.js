var httpModule = require('http');
var urlModule = require('url');

function start(route, handler){
	var server = httpModule.createServer(function(req, res){
		var urlString = req.url;
		var parsedUrl = urlModule.parse(urlString);
		var pathname = parsedUrl.pathname;
		var query = parsedUrl.query;

		console.log('url ' + urlString);
		console.log('pathname ' + pathname);
		console.log('query ' + query);
		
		route(pathname, query, handler, res);
		if(pathname == '/end'){
			server.close();
		}
	});
	server.listen(5555, '127.0.0.1');
	console.log('Server running at 127.0.0.1');
}

exports.start = start;