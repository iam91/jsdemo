var server = require('./server');
var route = require('./route');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.staticResourceHandler;
handle['/public'] = requestHandlers.staticResourceHandler;

handle['/user'] = requestHandlers.userHandler;
handle['/msg'] = requestHandlers.msgHandler;
handle['/upload'] = requestHandlers.uploadHandler;
handle['/signout'] = requestHandlers.signoutHandler;

server.start(route.route, handle);
