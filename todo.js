// TODO 할일 추가
// -[x] enter해서 아래칸에 나오게
    // -[x] DOM 가져오기 ( form  , input )
    // -[x] text 입력값 가져오기
    // -[x] 빈값 예외
    // -[x] li태그에 값 추가




const $=(s)=>document.querySelector(s);

const form = $(".form-data");
const input=$("#input");
const todos=$(".todos");



form.addEventListener("submit", (e) => {

    e.preventDefault();

    if(input.value===""){
        alert("값을 입력해주세요");
    }


    const liEl=document.createElement("li");

    liEl.innerHTML=input.value;

    todos.append(liEl);

});