const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li"); 
    //HTML에서 얻는게 아니고 생성.
    const delBtn = document.createElement("button");
    delBtn.innerText= "❌";
    const span = document.createElement("span");
    span.innerText = text //submit function에서 온 값.
    li.appendChild(delBtn);
    li.appendChild(span); 
    //무언가를 그것의 부모요소의 자식목록 끝에 노드를 추가//
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault(); //디폴트를 막음. 전송안함.
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // input의 기본값을 공백으로.
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
     
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();