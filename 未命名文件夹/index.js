var msgArray = ['1', '2', '3'];

function createList(msgArray){
	var list = document.getElementById('list');
	for(var i = 0; i < msgArray.length; i++){
		var val = msgArray[i];
		var div = document.createElement('div');
		div.innerHTML = val;
		add(div);
		list.appendChild(div);
	}
}

function add(div){
	var temp = document.createElement('div');
	temp.innerHTML = 'temp';
	div.appendChild(temp);
}

createList(msgArray);