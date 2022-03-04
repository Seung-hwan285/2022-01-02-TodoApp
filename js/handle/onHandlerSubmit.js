import {$} from "../../utils/querySelector.js";
import {paintTodo} from "../todo.js";
import {setToDos} from "../../utils/localStorage.js";
import {list} from "../view/main.js";

export const onHandlerSubmit=(e)=>{
    console.log(e.target);
    const $input = $('#input');
    e.preventDefault();
    const newTodo=$input.value;

    $input.value="";


    const newTodoObj={
        text : newTodo,
        id : Date.now(),
        is_done: false,
    };

    console.log(newTodoObj);


    list.push(newTodoObj);
    paintTodo(newTodoObj);
    setToDos(list);

}