var httpModule = require('http');
var urlModule = require('url');

function start(route, handler){
	var server = httpModule.createServer(function(req, res){
		var method = req.method;
		var urlString = req.url;
		var parsedUrl = urlModule.parse(urlString);
		var pathname = parsedUrl.pathname;
		var query = parsedUrl.query;
		var postData = '';

		console.log('IN SERVER: method ' + method);
		console.log('IN SERVER: url ' + urlString);
		console.log('IN SERVER: pathname ' + pathname);
		console.log('IN SERVER: query ' + query);

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
	server.listen(1111, '127.0.0.1');
	console.log('Server running at 127.0.0.1');
}

exports.start = start;