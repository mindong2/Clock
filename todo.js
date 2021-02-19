const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function filterFn(toDo){
    return toDo.id === 1;
}

let toDos = [];

function deleteToDo(event){//밑에서 작성한 event
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);/*
    target은 무엇을 누르는지 보여주고 
    parentNode는 target의 부모노드*/
    const cleanToDos = toDos.filter(function(toDo){
        
        return toDo.id !== parseInt(li.id);
    });
    //filter:toDos 배열에서 filterFn의 조건에 true인 것들만 return.
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){ //localStorage에 저장하는역할.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    /*toDos로 저장하려면 localStorage내의 
    Value값은 String만 되기 때문에 
    object를 string으로 바꿔주기위해 JSON.stringify사용*/
}
function paintToDo(text){
    const li = document.createElement("li"); 
    li.style.fontSize = `32px`;
    //HTML에서 얻는게 아니고 생성.
    li.style.color = `#fff`
    li.style.marginTop = `10px`
    const delBtn = document.createElement("button");
    delBtn.style.margin = `0 0 0 15px`
    delBtn.style.fontSize = `20px`;
    delBtn.style.background = `none`;
    delBtn.style.border = `none`
    delBtn.style.cursor = `pointer`
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text //submit function에서 온 값.
    delBtn.innerText= "✌";
    li.appendChild(span); 
    li.appendChild(delBtn);
    //무언가를 그것의 부모요소의 자식목록 끝에 노드를 추가//
    li.id = newId; //li에 id가 없으므로 추가.
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId  //length는 0부터 시작하므로.
    };
    toDos.push(toDoObj); //toDos라는 배열안에 toDoObj를 push
    saveToDos(); //push 한 후에 호출을 해줘야한다. 
}

function handleSubmit(event){
    event.preventDefault(); //디폴트를 막음. 전송안함.
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // input의 기본값을 공백으로.
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
     const parsedToDos = JSON.parse(loadedToDos);
     // 위에서 object -> string 한것을 string -> object로 
     parsedToDos.forEach(function(toDo){
         paintToDo(toDo.text);
     }); //forEach란 배열 안의 각각의 요소에 함수를 한번씩 실행  
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();