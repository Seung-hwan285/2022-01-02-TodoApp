class TodoList{
    constructor(list) {
        this.todoList=list;
        this.todo=[];
    }

     localStorageSet(){
        localStorage.setItem('todos',JSON.stringify(this.todo));
    }

     addToList(input){

        console.log(input);
        const list =document.querySelector('.todos');
        const li =document.createElement('li');
        const span =document.createElement('span');
        const button = document.createElement('button');
        li.id =input.id;
        button.innerText='삭제';
        button.className='delete-btn';
        span.className='span-btn';

        span.innerText=input.text;
        li.appendChild(span);
        li.appendChild(button);
        list.appendChild(li);
        this.countTodo();


        if(input.is_done===true){
            span.innerText=input.text;
            span.classList.add("completed");
            li.appendChild(span);
        }else{
            span.innerText=input.text;
            li.appendChild(span);
        }

        span.addEventListener('click',(e)=>{

            const tar=e.target.parentElement;

            for(const i in this.todo){
                if(this.todo[i].id===parseInt(tar.id)){
                    if(this.todo[i].is_done===true){

                        e.target.classList.remove('completed');
                        this.todo[i].is_done=false;
                    }else{
                        e.target.classList.add('completed');
                        this.todo[i].is_done=true;
                    }
                }
            }
            this.localStorageSet();
        });

        this.localStorageSet();
        return li;
    }

    addTodo(input){
        this.todo.push(input);
        this.todoList.appendChild(this.addToList(input));
    }

    deleteTodo(input){

        if(input.target.classList.contains('delete-btn')){
            this.del =input.target.closest('li');
            this.del.remove();
            this.countTodo();


            this.todo=this.todo.filter((item)=>item.id !==parseInt(this.del.id));
            this.localStorageSet();
        }

    }

    countTodo(){
        this.length = document.querySelector('.todos').querySelectorAll('li').length;
        return document.querySelector('#count').innerText=`총 ${this.length}개`;
    }

    paitingTodo(){
       const getTodos=localStorage.getItem('todos');
       const paresTodos=JSON.parse(getTodos);
       this.todo =paresTodos;



        paresTodos.map((item)=>{

           this.addToList(item);
       });
    }
}


function addTodo(e) {
    e.preventDefault();
    let input = document.querySelector('#input').value;

    const newTodoObj={
        text:input,
        id:Date.now(),
        is_done :false,
    };
    listEle.addTodo(newTodoObj);
}


function deleteTodoList(e) {
    listEle.deleteTodo(e);
}


const a =document.querySelector('.todos');
let listEle =new TodoList(a);
document.querySelector('.form-data').addEventListener('submit',addTodo);
document.querySelector('.todos').addEventListener("click",deleteTodoList);

listEle.paitingTodo();