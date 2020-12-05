function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
    document.getElementById('messages' || "results").appendChild(div);
    
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function resultsCount(){
	document.getElementById('results').innerHTML = '';
}

