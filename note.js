// TODO 메모장
// -[x] editBtn 버튼 누르면 textarea 생성
// -[x] 노드추가 버튼 누르면 note 추가
// -[x] innerHTML로 값 전달
// -[x] div 추가하기


// -[x] deleteBtn 버튼 누르면 삭제


function noteApp() {

    var note =document.createElement("div");

    note.className="note-container";


    note.innerHTML=`<div class="note">

    <button class="note-edit"><i class="fas fa-edit"></i></button>
    <button class="note-delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main hidden"></div>
    <textarea class="text"></textarea>
    `;




    const main=note.querySelector(".main");
    const text=note.querySelector(".text");
    const editBtn=note.querySelector(".note-edit");
    const deleteBtn =note.querySelector(".note-delete");

    editBtn.addEventListener("click",(e)=>{
        main.classList.toggle('hidden');
        text.classList.toggle('hidden');
    });


    text.addEventListener("input",(e)=>{
        console.log(e.target);
        const {value}=e.target;

        main.innerHTML=marked(value);
    });

    deleteBtn.addEventListener("click",()=>{
        note.remove();
    });

    document.body.appendChild(note);
}


add.addEventListener("click",()=> {

    noteApp();


});