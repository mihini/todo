var ul = document.getElementById("list"); 
var input = document.getElementById("input");
var addBtn = document.getElementById("add");
var doneUl = document.createElement("ul");
ul.setAttribute("class", "collection");
doneUl.setAttribute("id", "doneUl");
doneUl.setAttribute("class", "collection");
var script = document.getElementsByTagName("script")[0];

addBtn.addEventListener("click", addToDo);
/*
// creating list if tasks is saved in localstorage
for(var i =0; i< localStorage.length; i++){
	var key = localStorage.key(i);
	var userText = localStorage.getItem(key);
	addToDo(userText);
			//console.log(text);
}

function createTask(){
	//console.log(input.value);
	
		var userText = input.value;
		var key = "list" + localStorage.length;
		localStorage.setItem(key, userText);
		addToDo(userText);

	}
}
*/

//Adding things to list
function addToDo(){
	
	if(input.value != ""){
		var userText = input.value;
		var li = document.createElement("li");
	li.setAttribute("class", "collection-item");
	var p = document.createElement("p");
	
	var btnDiv = document.createElement("div");
	btnDiv.setAttribute("class", "row");
		
		p.innerHTML = userText;
		console.log(p.innerHTML);

		
		ul.appendChild(li).appendChild(p);
		var list = ul.appendChild(li).appendChild(btnDiv);
		
	
		//Add done button
		var doneButt = document.createElement("button");
		doneButt.setAttribute("class", "col s3 l1 push-l7 indigo darken-1 btn");
		doneButt.innerHTML = '<i class=" small material-icons">done</i>';
		list.appendChild(doneButt);
		
		//Add edit button
		var editButt = document.createElement("button");
		editButt.setAttribute("class", "col s3 l1 push-s1 push-l4 indigo darken-1 btn");
			
		editButt.innerHTML = '<i class="small material-icons">mode_edit</i>';
		list.appendChild(editButt);
		
		//Add remove-button
		var removeButt = document.createElement("button");
		removeButt.setAttribute("class", "removeBtn col s3 l1 push-s2 push-l1 indigo darken-1 btn");
		removeButt.innerHTML =  '<i class=" material-icons">delete</i>';
		list.appendChild(removeButt);
		

		removeButt.addEventListener("click", removeItem);
		editButt.addEventListener("click", editItem);
		doneButt.addEventListener("click", done);
		
		// remove text from input
		input.value= "";

	}
}


//editing to tasks in list, adding buttons and inputfield
function editItem(){
	var divEditInput = document.createElement("div");
	divEditInput.setAttribute("class", "input-field col s12");
	this.disabled = true;
	this.parentNode.childNodes[0].disabled=true;
	var inputText = this.parentNode.parentNode.childNodes[0].innerHTML;
	
	var inputField = document.createElement("input");
	var okButt = document.createElement("button");
	okButt.setAttribute("class", "indigo darken-1 btn btn-smal col s10 l1 push-s1 push-l1");
	inputField.setAttribute("type", "text");
	inputField.setAttribute("class", "col s12 l9 push-l1");
	okButt.innerHTML = "Ok";
	inputField.value = inputText;
	var div = this.parentNode.appendChild(divEditInput);
	div.appendChild(inputField);
	div.appendChild(okButt);
	
	//cant add empty text in input field
	inputField.addEventListener("keyup", function(){
		if(inputField.value === ""){
			okButt.disabled = true;
		}
		else{
			okButt.disabled =false;
		}
	});
	
	
	//change input text
	okButt.addEventListener("click", changeText);
	
	function changeText(){
		var changedText = inputField.value;
		
		this.parentNode.parentNode.childNodes[0].disabled =false;
		this.parentNode.parentNode.childNodes[1].disabled=false;
		this.parentNode.parentNode.parentNode.childNodes[0].innerHTML = changedText;
		this.parentNode.removeChild(inputField);
		this.parentNode.removeChild(okButt);
	}
	
}



//removing to do things from the list
function removeItem(){
	//console.log(this);
	this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}



//Move done things to donelist 
function done(){
	document.body.insertBefore(doneUl, script);
	
	//li
	var doneItem = this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

	//removing done button and edit button
doneItem.childNodes[1].removeChild(doneItem.childNodes[1].childNodes[0]);
	doneItem.childNodes[1].removeChild(doneItem.childNodes[1].childNodes[0]);
	
	doneUl.appendChild(doneItem);
	
	
	
	//console.log(doneUl.firstChild);
	//console.log(doneItem);
	
	
	/*
	/////Change color and change button
	var classColor = this.parentNode.firstChild.getAttribute("class");
	
	if(this.innerHTML == "Done"){
		this.innerHTML = "Undone";
		this.parentNode.firstChild.setAttribute("class", "teal lighten-3");
	}
	else{
		this.innerHTML = "Done";
		this.parentNode.firstChild.setAttribute("class", "");
		
	}*/
}









