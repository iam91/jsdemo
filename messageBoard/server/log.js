function log(module, key, value){
	var date = new Date();
	console.log(date + ' ' + module + ': ' + key + '=' + value);
}

exports.log = log;