completedTodo = []
pendingTodo = []
const addt = document.querySelector('#addBtn');
addt.addEventListener('click',addTodoItems);

function addTodoItems(){
	newTodo = document.getElementById("inputBox").value;
	pendingTodo.push(newTodo);
	document.getElementById("inputBox").value = "";
	showTodos();
}

function showTodos(){
/*	let list = "";
	for(i=0;i<pendingTodo.length;i++){
		list +="<li>"+ pendingTodo[i] + "<button class='delete' id='btn"+i+"'>Delete</button></li>" ;
	}
	document.getElementById(pendingList).innerHTML = list ;*/
let list = document.createElement("li");
list.className = "taskLists";
let del = document.createElement("button");
del.className = "delBtn";
del.innerHTML = "Delete";
let mark = document.createElement("button");
mark.className = "markBtn";
mark.innerHTML = "Completed";
	for(i=0;i<pendingTodo.length;i++){
		todoList = `${pendingTodo[i]} `;
		list.textContent = todoList;
		del.id = i;
		// delEvent = del.addEventListener('click',delTodos(i));
		document.getElementById("pendingList").appendChild(list);
		list.appendChild(del);
		list.appendChild(mark);
		del.appendChild(delEvent);

	};
	// let buttons = document.getElementsByClassName("delBtn");
	// for(i=0;i<buttons.length;i++){
	// 	buttons[i].addEventListener('click',delTodos(i));
	// }
}

function markTodos(){
	alert("catched in Completed Task")
	
}

function delTodos(index){
	pendingTodo.splice(index,1);
	showTodos();
}
	/*taskbtn.style.margin = "5px auto";
	taskbtn.style.padding = "10px" ;
	taskbtn.style.width = "600px";
	taskbtn.style.border = "solid 2px  #15a78a ";
	taskbtn.style.textAlign = "left";
	taskbtn.style.fontSize = "18px";
	taskbtn.style.color = "#fff";
	taskbtn.style.backgroundColor = " #1fdcb7 ";
	taskbtn.style.fontWeight = "bold";
	taskbtn.style.borderRadius = "5px";
	taskbtn.className = "taskName";
	taskbtn.id = "taskN" ;
	taskbtn.innerHTML = document.getElementById("addtask").value ;
	taskbtn.addEventListener('click',markTodoItems);

	let delbtn = document.createElement("button");
	delbtn.style.padding = "10px";
	delbtn.style.backgroundColor = "red";
	delbtn.style.color = "white";

	document.getElementById('task-list-wrapper').appendChild(taskbtn);
	taskbtn.appendChild(delbtn);
}

function markTodoItems(){
	let markedlist = document.getElementsByClassName("taskName");
	markedlist.style.textDecoration = "line-through";
	markedlist.style.backgroundColor = "red";
	document.getElementsByClassName('taskName').appendChild(markedlist);

}*/