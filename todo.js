// TODO 할일 추가
// -[x] enter해서 아래칸에 나오게
    // -[x] DOM 가져오기 ( form  , input )
    // -[x] text 입력값 가져오기
    // -[x] 빈값 예외
    // -[x] li태그에 값 추가

// TODO 할일 목록 변경,삭제
// -[x] 할일 목록 클릭하면 선긋기
// -[x] 삭제
    // -[x] 총개수 -1
    // -[x] 삭제 버튼누르면 안에 delete 버튼이 있는지 확인

// TODO 할일 개수
// -[x] 할일 총개수
    // -[x] count DOM 가져오기
    // -[x] li태그 개수 세기


// TODO localStroage로 변환
// localStore 만들고 함수 안에서 관리
    // -[x] set stringfy => 문자열 변환
    // -[] get parse => json 객체 변환





const $=(s)=>document.querySelector(s);


const form = $(".form-data");
const input=$("#input");
const todos=$(".todos");


const list = [];

function todoCompleted(liEl) {
    liEl.addEventListener("click",()=>{
        liEl.classList.toggle("completed");
    });

}

function todolistCount() {
    const listLen=$(".todos").querySelectorAll("li").length;
    $("#count").innerText=`총 ${listLen}개`
}


function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(list));
}
const deletTodo=(e)=> {
    const del=e.target.closest("li");
    console.log(del);
    del.remove();

    todolistCount();
}


function paintTodo(newTodo) {





    const li = document.createElement("li");

    const span = document.createElement("span");
    const button=document.createElement("button");
    button.innerText="삭제";
    button.className="delete-btn";


    span.innerText=newTodo;
    console.log(span);



    li.appendChild(span);
    li.appendChild(button);

    todos.appendChild(li);

    todolistCount();
    todoCompleted(span);

    $(".todos").addEventListener("click",(e)=>{
        if(e.target.classList.contains("delete-btn")){
            deletTodo(e);
        }
    })


}

function handToDoSubmit(e) {

    e.preventDefault();
    const newTodo=input.value;
    console.log(newTodo);

    input.value="";

    list.push(newTodo);
    paintTodo(newTodo);
    saveToDos();


}


form.addEventListener("submit",handToDoSubmit);
