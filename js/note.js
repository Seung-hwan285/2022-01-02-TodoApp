// TODO 메모장
// -[x] editBtn 버튼 누르면 textarea 생성
// -[x] 노드추가 버튼 누르면 note 추가
// -[x] innerHTML로 값 전달
// -[x] div 추가하기


// -[x] deleteBtn 버튼 누르면 삭제



// -[x] 로컬스토리지에 text값 저장하기

import {$} from "../utils/querySelector.js";

const add=$(".add");



let note =document.createElement("div");



function noteApp() {

    note.className = "note-container";

    note.innerHTML = `<div class="note">

    <button class="note-edit"><i class="fas fa-edit"></i></button>
    <button class="note-delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main hidden"></div>
    <textarea class="text"></textarea>
    `;


    const main = note.querySelector(".main");
    const text = note.querySelector(".text");
    const editBtn = note.querySelector(".note-edit");
    const deleteBtn = note.querySelector(".note-delete");

    editBtn.addEventListener("click", (e) => {
        main.classList.toggle('hidden');
        text.classList.toggle('hidden');

        const inputText=text.value;
        localStorage.setItem("text",JSON.stringify(inputText));

    });

    text.addEventListener("input", (e) => {

        const {value} = e.target;

        main.innerHTML = marked(value);

    });

    deleteBtn.addEventListener("click", () => {
        note.remove();
        localStorage.setItem("text","");
    });


    document.body.appendChild(note);
    // 로컬리스트 추가중...
    // 1. 로컬리스트에 추가 : text


    getStorage();

}



add.addEventListener("click",()=> {

    noteApp();

});