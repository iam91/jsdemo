var message = new Array(0);
var user = new Array(0);

function getDatabase(databaseName){
	if(databaseName === 'message'){
		return message;
	}
	else if(databaseName === 'user'){
		return user;
	}
}

function addEntry(databaseName, entry){
	var database = getDatabase(databaseName);
	database.push(entry);
}

function getEntries(databaseName){
	database = getDatabase(databaseName);
	var ret = new Array(database.length);
	for(var i = 0; i < database.length; i++){
		ret[i] = database[i];
	}
	ret.reverse();
	return ret;
}

exports.addEntry = addEntry;
exports.getEntries = getEntries;