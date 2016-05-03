var fs = require('fs');
var path = require('path');

function userHandler(pathname, res, query){
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('ok');
	//TODO connect database
}

function staticResourceHandler(pathname, res, query){
	var resourceDir = '';
	if(pathname === '' || pathname === '/' || pathname === '/index.html'){
		resourceDir += './html/index.html';
	}
	else if(pathname.indexOf('/css') === 0
		|| pathname.indexOf('/js') === 0
		|| pathname.indexOf('/html') === 0){
		resourceDir += '.' + pathname;
	}
	fs.readFile(resourceDir, 'binary', function(error, data){
		var ext = path.extname(resourceDir);
		var type = getType(ext);
		if(error){
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end("Server error: " + error);
		}
		else{
			res.writeHead(200, {'Content-Type': type});
			res.end(data, 'binary');
		}
	});
}

function getType(ext){
	ext = ext.toLowerCase();
    if (ext === '.htm' || ext === '.html'){
        return 'text/html';
    }
    else if (ext === '.js'){
        return 'application/x-javascript';
    }
    else if (ext === '.css'){
        return 'text/css';
    }
    else if (ext === '.jpe' || ext === '.jpeg' || ext === '.jpg'){
        return 'image/jpeg';
    }
    else if (ext === '.png'){
        return 'image/png';
    }
    else if (ext === '.ico'){
        return 'image/x-icon';
    }
    else if (ext === '.zip'){
        return 'application/zip';
    }
    else if (ext === '.doc'){
        return 'application/msword';
    }
    else{
        return 'text/plain';
    }
}

exports.staticResourceHandler = staticResourceHandler;
exports.userHandler = userHandler;