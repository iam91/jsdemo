var fs = require('fs');
var path = require('path');
var queryString = require('querystring');
var database = require('./database');

function signoutHandler(method, pathname, res, query, postData){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(null);
}

function uploadHandler(method, pathname, res, query, postData){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(null);
    console.log(postData);
}

function msgHandler(method, pathname, res, query, postData){
    //TODO connect database
    if(method === 'GET'){
        //message list
        var queryParam = queryString.parse(query);
        var page = Number(queryParam.page);
        var pageSize = Number(queryParam.pageSize);

        var ret = database.getEntries('message', page, pageSize);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ret));
    }
    else if(method === 'POST'){
        database.addEntry('message', JSON.parse(postData));
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(null);
    }
    else if(method === 'PUT'){

    }
}

function userHandler(method, pathname, res, query){
    //ret = {'id': 0, 'name'}
    var userParam = queryString.parse(query);

    var user = {'name': decodeURIComponent(userParam.name), 'id': 0};

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(JSON.stringify(user));
	//TODO connect database
}

function staticResourceHandler(method, pathname, res, query){
	var resourceDir = '';
	if(pathname === '' || pathname === '/' || pathname === '/index.html'){
		resourceDir += './html/index.html';
	}
	else if(pathname.indexOf('/css') === 0
		|| pathname.indexOf('/js') === 0
		|| pathname.indexOf('/html') === 0
        || pathname.indexOf('/lib') === 0
        || pathname.indexOf('/favicon.ico') === 0){
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
exports.msgHandler = msgHandler;
exports.uploadHandler = uploadHandler;
exports.signoutHandler = signoutHandler;