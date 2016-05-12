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

function getEntries(databaseName, page, pageSize){
	database = getDatabase(databaseName);
	var start = database.length - 1 - (page - 1) * pageSize;
	var ret = undefined;
	if(start < 0 || start >= database.length){
		ret = new Array(0);
	}
	else{
		var size = Math.min(pageSize, database.length - (page - 1) * pageSize);
		ret = new Array(size);
		for(var i = 0; i < size; i++){
			ret[i] = database[start];
			start--;
		}
	}
	return ret;
}

exports.addEntry = addEntry;
exports.getEntries = getEntries;