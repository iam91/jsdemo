var httpModule = require('http');
var urlModule = require('url');
var log = require('./log');

function start(route, handler){
	var server = httpModule.createServer(function(req, res){
		var method = req.method;
		var urlString = req.url;
		var parsedUrl = urlModule.parse(urlString);
		var pathname = parsedUrl.pathname;
		var query = parsedUrl.query;
		var postData = '';

		var logModule = 'INCOMING REQ';
		log.log(logModule, 'method', method);
		log.log(logModule, 'url', urlString);
		log.log(logModule, 'pathname', pathname);
		log.log(logModule, 'query', query);

		req.setEncoding('utf8');
		req.addListener('data', function(postDataChunk){
			postData += postDataChunk;
		});
		req.addListener('end', function(){
			route(method, pathname, query, handler, res, postData);
		});
		
		////////////////////////////////////
		if(pathname == '/end'){
			server.close();
		}
	});
	server.listen(2333, '127.0.0.1');
	console.log('Server running at 127.0.0.1');
}

exports.start = start;