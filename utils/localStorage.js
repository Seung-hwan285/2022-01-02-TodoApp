
export const setToDos=(list)=>{
    localStorage.setItem("todos",JSON.stringify(list));
}
export const getToDos= localStorage.getItem("todos");
