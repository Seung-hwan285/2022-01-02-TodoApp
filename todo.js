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

const add=$(".add");

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

function handToDoSubmit(e) {
    const newTodo=input.value;
    input.value="";
    list.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
}


function paintTodo(newTodo) {
    const li = document.createElement("li");


    li.innerHTML=newTodo;

    const button=document.createElement("button");
    button.innerHTML="삭제";
    button.className="delete-btn";


    //
    // const template = list.map((item) => {
    //     return `
    //          <span>${item}</span>
    //         <button type="button" class="delete-btn">삭제</button>`;
    // });
    //
    // li.innerHTML=template;
    todoCompleted(li);
    todos.append(li);
    li.append(button);

    todolistCount();
}


//삭제 다시 구현하기

function todoApp() {



    $("delete-btn").addEventListener("click",(e)=>{
        if(e.target.classList.contains("delete-btn")) {
            if (confirm("삭제하시겠습니까?")) {
                e.target.closest("li").remove();
            }
            todolistCount();
        }
    });

    $(".form-data").addEventListener("submit",(e)=>{
        e.preventDefault();
        handToDoSubmit();
    });

    $("#input").addEventListener("keypress",(e)=>{

        if(e.key !=="Enter"){
            return;
        }
        if(e.target.value ===""){
            alert("값을 입력해주세요");
            return;
        }

    });

}




todoApp();