// TODO 할일 추가
// -[x] enter해서 아래칸에 나오게
    // -[x] DOM 가져오기 ( form  , input )
    // -[x] text 입력값 가져오기
    // -[x] 빈값 예외
    // -[x] li태그에 값 추가

// TODO 할일 목록 변경,삭제
// -[x] 할일 목록 클릭하면 선긋기
// -[x] 삭제
    // -[x] 총개수 -1
    // -[x] 삭제 버튼누르면 안에 delete 버튼이 있는지 확인

// TODO 할일 개수
// -[x] 할일 총개수
    // -[x] count DOM 가져오기
    // -[x] li태그 개수 세기


// TODO 메모장
// -[] 버튼 누르면 textarea 생성



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

function App() {


    const addTodo=()=>{

    this.list = [];

    const liEl = document.createElement("li");


    this.list.push({name: input.value});

        const template = this.list.map((item) => {
            return `
             ${item.name}
            <button type="button" class="delete-btn">삭제</button>`;
        });

        liEl.innerHTML=template;


        todoCompleted(liEl);

        todos.append(liEl);
        listCount();

        input.value="";
    }



    $(".todos").addEventListener("click",(e)=>{
        if(e.target.classList.contains("delete-btn")) {
            if (confirm("삭제?")) {
                e.target.closest("li").remove();
            }
            listCount();
        }
    });

    $(".form-data").addEventListener("submit",(e)=>{
        e.preventDefault();
    });

    $("#input").addEventListener("keypress",(e)=>{

        if(e.key !=="Enter"){
            return;;
        }
        if(e.target.value ===""){
            alert("값을 입력해주세요");
            return;
        }
        addTodo();
    });

}




App();

