// TODO 할일 추가
// -[x] enter해서 아래칸에 나오게
    // -[x] DOM 가져오기 ( form  , input )
    // -[x] text 입력값 가져오기
    // -[x] 빈값 예외
    // -[x] li태그에 값 추가

// TODO 할일 목록 변경
// -[x] 할일 목록 클릭하면 선긋기


// TODO 할일 개수
// -[x] 할일 총개수
    // -[x] count DOM 가져오기
    // -[x] li태그 개수 세기







const $=(s)=>document.querySelector(s);

const form = $(".form-data");
const input=$("#input");
const todos=$(".todos");


function todoCompleted(liEl) {
    liEl.addEventListener("click",()=>{
        liEl.classList.toggle("completed");
    });

}

function listCount() {
    const listLen=$(".todos").querySelectorAll("li").length;
    $("#count").innerText=`총 ${listLen}개수`
}


function deleteTodo() {

}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if(input.value===""){
        alert("값을 입력해주세요");
    }


    const liEl=document.createElement("li");

    liEl.innerHTML=input.value;


    todoCompleted(liEl);

    todos.append(liEl);

    input.value="";

    listCount();


});


