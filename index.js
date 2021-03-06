// TODO 할일 추가
// -[x] enter해서 아래칸에 나오게
// -[x] DOM 가져오기 ( form  , input )
// -[x] text 입력값 가져오기
// -[x] 빈값 예외
// -[x] li태그에 값 추가

// TODO 할일 목록 변경,삭제
// -[x] 할일 목록 클릭하면 선긋기
// -[] toggle (할일 목록 선그어진거) localStorage로 관리하기

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
// -[x] get parse => json 객체 변환
// -[x] delete 삭제


const $=(s)=>document.querySelector(s);


const form = $(".form-data");
const input=$("#input");
const todos=$(".todos");


var list = [];



function todolistCount() {
    const listLen=$(".todos").querySelectorAll("li").length;
    $("#count").innerText=`총 ${listLen}개`
}


const setToDos=()=>{
    localStorage.setItem("todos",JSON.stringify(list));
}




function  deletTodo(e){

    const del=e.target.closest("li");

    del.remove();
    todolistCount();

    // 로컬스토리지 id와 삭제되는 id가 다른것만 배열에 저장
    // 즉 같은 id는 삭제
    list = list.filter((item)=> item.id !==parseInt(del.id));

    setToDos();
}


function paintTodo(newTodo) {


    const li = document.createElement("li");
    li.id=newTodo.id;

    const span = document.createElement("span");

    const button=document.createElement("button");
    button.innerText="삭제";
    button.className="delete-btn";
    span.className="span-btn"
    console.log(span);

    if(newTodo.is_done===true){

        span.innerText=span.className="completed";
        li.appendChild(span);
    }
    else{

        span.innerText=newTodo.text;
        li.appendChild(span);
    }


    li.appendChild(button);

    todos.appendChild(li);

    todolistCount();


    span.addEventListener("click",(e)=>{
        const tar = e.target.parentElement;

        for(const i in list){
            if(list[i].id ===parseInt(tar.id)){
                if(list[i].is_done===true){
                    e.target.classList.remove("completed");
                    list[i].is_done=false;


                }
                else{
                    e.target.classList.add("completed");
                    list[i].is_done=true;

                }
            }
        }

        setToDos();
    });

    $(".todos").addEventListener("click",(e)=>{
        if(e.target.classList.contains("delete-btn")){

            deletTodo(e);
        }
    });



}


function handToDoSubmit(e) {
    e.preventDefault();
    const newTodo=input.value;


    input.value="";
    const newTodoObj ={
        text : newTodo,
        id : Date.now(),
        is_done : false,
    };


    list.push(newTodoObj);
    paintTodo(newTodoObj);
    setToDos();


}


form.addEventListener("submit",handToDoSubmit);
const getToDos= localStorage.getItem("todos");

if(getToDos !== null){

    // 로컬스토리지 문자열 값 -> 배열로 변환
    const parsedToDos = JSON.parse(getToDos);
    // 남은 데이터 덮어주기 안그럼 새로고침했을때 값 초기화되는현상 나옴
    list=parsedToDos;
    // 요소 하나하나 화면에 뿌려주기기
    parsedToDos.map(item=>{

        paintTodo(item);
    });


}