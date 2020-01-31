completedTodo = []
pendingTodo = []
const addt = document.querySelector('#addBtn');
addt.addEventListener('click',addTodoItems);

function addTodoItems(){
	// getCookiesdata();
	newTodo = document.getElementById("inputBox").value;
	if(newTodo!=""){
		pendingTodo.push(newTodo);
		document.getElementById("inputBox").value = "";
		showTodos();
	}
}

function showTodos(){
	showPendingList();
	showCompletedList();
}

function showPendingList(){
	var list= "";
	for(i=0;i<pendingTodo.length;i++){
		list += "<li>"+ pendingTodo[i] + "   <button onclick='delpendingTodos("+i+")' class='delete' id='del"+i+"'>X</button>"+" <button onclick='markTodos("+i+")' class='mark' id='mark"+i+"'>Done</button></li>" ;
	}
	document.getElementById("pendingList").innerHTML = list ;
}

function showCompletedList(){
	var list= "";
	for(i=0;i<completedTodo.length;i++){
		list += "<li>"+ completedTodo[i] + "   <button onclick='delcompletedTodos("+i+")' class='delete' id='del"+i+"'>X</button></li>" ;
	}
	document.getElementById("completedList").innerHTML = list ;
}

function markTodos(index){
	completedTodo.push(pendingTodo[index]);
	pendingTodo.splice(index,1);
	showTodos();
}

function delpendingTodos(index){
	pendingTodo.splice(index,1);
	showTodos();
}
function delcompletedTodos(index){
	completedTodo.splice(index,1);
	showTodos();
}	

function getCookiesdata(){
	pendingTodo = localStorage.getItem('pendingTodolocal');
	completedTodo = localStorage.getItem('completedTodolocal');
	return pendingTodo;
}

function setCookiesData(){
	localStorage.setItem('pendingTodolocal',JSON.stringify(pendingTodo));
	localStorage.setItem('completedTodolocal',JSON.stringify(completedTodo));
}

function clearCookies(){
	localStorage.removeItem('pendingTodolocal');
	localStorage.removeItem('completedTodolocal');
}