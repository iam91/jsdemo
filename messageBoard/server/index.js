var server = require('./server');
var route = require('./route');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle[''] = requestHandlers.staticResourceHandler;
handle['/'] = requestHandlers.staticResourceHandler;
handle['/favicon.ico'] = requestHandlers.staticResourceHandler;
handle['/index.html'] = requestHandlers.staticResourceHandler;
handle['/js'] = requestHandlers.staticResourceHandler;
handle['/css'] = requestHandlers.staticResourceHandler;
handle['/html'] = requestHandlers.staticResourceHandler;
handle['/lib'] = requestHandlers.staticResourceHandler;
handle['/user'] = requestHandlers.userHandler;
handle['/msg'] = requestHandlers.msgHandler;
handle['/upload'] = requestHandlers.uploadHandler;
handle['/signout'] = requestHandlers.signoutHandler;

server.start(route.route, handle);
