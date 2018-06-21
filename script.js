var list = document.getElementById('list');
var add = document.getElementById('addElem');


add.addEventListener('click', function(){
<<<<<<< HEAD
	var element = document.createElement('li');	
	var number = document.getElementsByTagName('li').length;
=======
	var element = document.createElement('li');
	
	var number = document.list.getElementsByTagName('li').length;
>>>>>>> c698178d02a8c2de6a2e543b1fcfdcf725e4a201
	element.innerHTML = "item " + number;
	list.appendChild(element);
	
});
