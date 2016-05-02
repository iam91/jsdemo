var httpModule = require('http');
var urlModule = require('url');

function start(route){
	var server = httpModule.createServer(function(req, res){
		var url = req.url;
		var parsedUrl = urlModule.parse(url);
		var pathname = parsedUrl.pathname;
		var query = parsedUrl.query;
		
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write('query: ' + query + '\n');
		res.write('pathname: ' + pathname + '\n');
		res.end();
		if(pathname == '/end'){
			server.close();
		}
	});

	server.listen(1234, '127.0.0.1');
	console.log('Server running at 127.0.0.1');
}

exports.start = start;