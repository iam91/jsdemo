var server = require('./server');
var route = require('./route');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle[''] = requestHandlers.staticResourceHandler;
handle['/'] = requestHandlers.staticResourceHandler;
handle['/index.html'] = requestHandlers.staticResourceHandler;
handle['/js/index.js'] = requestHandlers.staticResourceHandler;
handle['/js/util.js'] = requestHandlers.staticResourceHandler;
handle['/css/base-style.css'] = requestHandlers.staticResourceHandler;
handle['/css/index.css'] = requestHandlers.staticResourceHandler;

server.start(route.route, handle);
