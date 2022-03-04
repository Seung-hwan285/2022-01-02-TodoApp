
import {getToDos, setToDos} from "../../utils/localStorage.js";
import {list} from "../view/main.js";


export const onCheckTodo=(e)=>{

    const target= e.target.parentElement;

    for(const i in list){
        console.log(list[i])
        if(list[i].id ===parseInt(target.id)){

            if(list[i].is_done===true){
                e.target.classList.remove('completed');
                list[i].is_done=false;
            }
            else{
                e.target.classList.add('completed');
                list[i].is_done=true;
            }

        }
        setToDos(list);
    }


}

