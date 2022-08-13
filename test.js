var _Res;
var _botao;
var _URL = "http://localhost:5000/companies";

function DOM_setText(element, text){
	element.innerHTML='';
	const txt = document.createTextNode(text);
	element.appendChild(txt);
}

function startUp(){
	_Res = document.getElementById("result");
	_botao = document.getElementById("getButton");
}

function getResult(){
	fetch(_URL)
	.then(response => response.text())
	.then((data) => DOM_setText(_Res, data))
	.catch((error) =>{
		alert(error.toString());
	});
}

window.onload = function main(){
	startUp();
	_botao.addEventListener("click", getResult);
}