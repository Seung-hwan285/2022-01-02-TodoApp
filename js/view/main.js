import {$} from "../../utils/querySelector.js";
import {onCheckTodo} from "../handle/onHandlerTodo.js";
import {getToDos} from "../../utils/localStorage.js";
import {paintTodo} from "../todo.js";

const todos=$(".todos");
export const todolistCount=()=> {
    const $listLen=$(".todos").querySelectorAll("li").length;
    $("#count").innerText=`총 ${$listLen}개`;
}

export let list = [];

export const todoPainting=(newTodo)=>{
    console.log(newTodo);
    const li=document.createElement('li');


    li.id=newTodo.id;

    const span =document.createElement('span');

    const button =document.createElement('button');


    button.innerText='삭제';
    button.className='delete-btn';
    span.className='span-btn';


    if(newTodo.is_done===true){
        span.innerText=newTodo.text;
        span.classList.add('completed');
        li.appendChild(span);
    }
    else{
        span.innerText=newTodo.text;
        li.appendChild(span);
    }

    li.appendChild(button);

    todos.appendChild(li);

    todolistCount();

    span.addEventListener("click",onCheckTodo);
}

export const renderPaintTodo=()=>{
if(getToDos !== null){

    // 로컬스토리지 문자열 값 -> 배열로 변환
    const parsedToDos = JSON.parse(getToDos);
    console.log(parsedToDos)
    // 남은 데이터 덮어주기 안그럼 새로고침했을때 값 초기화되는현상 나옴
    list=parsedToDos;
    // 요소 하나하나 화면에 뿌려주기기
    parsedToDos.map(item=>{

        paintTodo(item);
    });
}

}