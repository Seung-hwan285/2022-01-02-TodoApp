import {list, todolistCount} from "../view/main.js";
import {setToDos} from "../../utils/localStorage.js";

let deleteList=[];

export const onDeleteTodo=(e)=>{
    console.log(e.target);

    if(e.target.classList.contains('delete-btn')){

    const del=e.target.closest("li");

    del.remove();
    todolistCount();

    // 로컬스토리지 id와 삭제되는 id가 다른것만 배열에 저장
    // 즉 같은 id는 삭제
    deleteList = list.filter((item)=> item.id !==parseInt(del.id));

    setToDos(deleteList);
    }
}