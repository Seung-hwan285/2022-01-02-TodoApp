import {onDeleteTodo} from "./js/handle/onDeleteTodo.js";
import {$} from "./utils/querySelector.js";
import {onHandlerSubmit} from "./js/handle/onHandlerSubmit.js";

function App() {

    $('.todos').addEventListener("click",onDeleteTodo);

    $('.form-data').addEventListener("submit",onHandlerSubmit);

}

window.onload=()=>{
    App();
}
