## 오늘 할일을 작성하고 간단하게 메모를 작성할 수 있는 미니 프로젝트 입니다.

## 개요
항상 계획을 잡지않고 공부를 하거나 하루하루를 무의미하게 보내는 기분이 들어서 만들어본 TodoList & 메모장 어플리케이션 입니다.

## 프로젝트 link
https://awesome-joliot-e3a996.netlify.app


## WIKI
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">


## 기능

## 📃 1.Todo list
### Todo 추가
keypress를 통해 입력한 값 받고 빈값이 아니면 추가를 합니다.
```javascript
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
```


배열에 입력한 값들을 삽입을 합니다.
map을 통해 요소들을 가져와서 출력을 하게 됩니다.

```javascript
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
        todolistCount();

        input.value="";
    }


```



### Todo 삭제
이부분때문에 코드를 전체 리펙토링했습니다.<br> 
form이벤트와 , 입력이벤트를 함수로 분리를 시키고, Todo를 추가하는 부분을 함수로 분리시키고, 배열을 통해서 값을 받아주고 처리를 하게끔 리펙토링을 진행하였습니다.
처음에는 form이벤트 안에서 submit을 받음과 동시에 코드를 처리를 했었습니다.<br>
그래서 삭제를 하게 되면 입력을 했을때만 삭제가 작동을 했습니다.<br>

```javascript
   $(".todos").addEventListener("click",(e)=>{
        if(e.target.classList.contains("delete-btn")) {
            if (confirm("일 완료 했습니까?")) {
                e.target.closest("li").remove();
            }
            todolistCount();
        }
    });
```

### Todo 총 개수를 세는 함수입니다. 
```javascript
function todolistCount() {
    const listLen=$(".todos").querySelectorAll("li").length;
    $("#count").innerText=`총 ${listLen}개`
}
```

### Todo가 끝나면 다했다고 표시를 해주는 즉 선을 그어주는 함수입니다.
```javascript
function todoCompleted(liEl) {
    liEl.addEventListener("click",()=>{
        liEl.classList.toggle("completed");
    });

}
```


## 📃 2.Note

### 수정 버튼
수정버튼을 누르면 글을 작성할 수 있게 기존 main ,textarea => hidden으로(새로운 페이지) 바꿔줍니다.

```javascript
  editBtn.addEventListener("click",(e)=>{
        main.classList.toggle('hidden');
        text.classList.toggle('hidden');
    });
```

### 글 작성 
노트에 글이 입력이 되면 마크언어로 변환을 시켜줍니다.
```javascript
text.addEventListener("input",(e)=>{
        console.log(e.target);
        const {value}=e.target;

        main.innerHTML=marked(value);
    });
```

### 삭제 버튼
삭제버튼을 누르면 글이 삭제가 됩니다.
```javascript
  deleteBtn.addEventListener("click",()=>{
        note.remove();
    });
```


## 📃 3.Note & TODO 로컬스토리지로 리펙토링
실제 서비스처럼 구현해보기 위해서 즉 실제로 사용을 하기 위해서 로컬스토리지에 저장하고 관리를 하게 리펙토링을 진행하였습니다.

