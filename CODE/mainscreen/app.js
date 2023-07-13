const todoInput = document.querySelector(".todo-form input");
const todo = document.querySelector(".todo-box");
const submitBtn = document.getElementById("submitbtn");

let todoList = [];

// todoList라는 리스트를 만들어 입력하게 될 리스트를 저장함.
function setting(){
    loadStorage();
    submitBtn.addEventListener("click", createList);
}
setting();

//위에서 저장한 것을 불러오기
function loadStorage()
{
    const storedTodo = localStorage.getItem("TODO");
    if(storedTodo != null)
    {
        const myTodoList = JSON.parse(storedTodo);
        myTodoList.forEach( todo => {
            const{text} = todo;
            const {checked} = todo;
            printTodo(text, checked);
            storeTodo(text, checked);
        });
    }
}

//작성한 todo리스트 배열 만들기
function createList(e)
{
    e.preventDefault();
    const todoValue = todoInput.value;
    if(todoValue =="")
        alert("할 일을 입력해주세요.")
    else
    {
        printTodo(todoValue, 0);
        storeTodo(todoValue, 0);
        todoInput.value = "";
    }
}


//localStorage에 저장하기
//localStorage에 object를 저장할 것 -> object를 생성하는 과정이다. (todoListObj가 object)
function storeTodo(todoValue, checkValue){
    const todoListObj = {
        text : todoValue,
        id : todoList.length + 1,
        checked : checkValue,
    };
    todoList.push(todoListObj);
    localStorage.setItem("TODO", JSON.stringify(todoList)); //자바스크리트의 값을 문자열로 만들어서 localStorage에 저장. (stringify 사용)
}

//화면에 list 나타내기!
function printTodo(todoValue, checkValue)  
{
    const li = document.createElement("li");
    const   span = document.createElement( "span");
    const delBtn = document.createElement("button");
    delBtn.innerText = "삭제";
    if (checkValue == 1)
    {
        span.InnerHTML = todoValue;
        li.appendChild(span);
        li.appendChild(delBtn);  
        li.id = todoList.length + 1;
        li.style.color = "#ccc";
        li.style.textDecoration="line-through";
        todo.appendChild(li);
    }
    else (checkValue == 0)
    {
        span.innerHTML = todoValue;
        li.appendChild(span);
        li.appendChild(delBtn); 
        li.id = todoList.length + 1;
        todo.appendChild(li);
    }
    span.addEventListener("click", checkTodo);
    delBtn.addEventListener("click", deleteTodo);
}

//삭제기능 구현하기!

function deleteTodo(e)
{
    const {target : button} = e;
    const li = button.parentNode;
    todo.removeChild(li);
    todoList = todoList.filter((todo) => todo.id != Number(li.id));
    localStorage.setItem("TODO", JSON.stringify(todoList));
}

//완료 todo 체크표시하기
function checkTodo(e)
{
    const {target : span} = e;
    const li =  span.parentNode;
    li.style.color = "#ccc";
    li.style.textDecoration="line-through";
    todoList.forEach( currentElement => {
        if(currentElement.id ==  Number(li.id))
            currentElement.checked = 1;
    });
    localStorage.setItem("TODO", JSON.stringify(todoList));
}

//음성인식 API
const searchConsole = document.getElementById("search_console");

// ----- 현재 브라우저에서 API 사용이 유효한가를 검증
function availabilityFunc() {
  //현재 SpeechRecognition을 지원하는 크롬 버전과 webkit 형태로 제공되는 버전이 있으므로 둘 중 해당하는 생성자를 호출한다.
  recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = "ko"; // 음성인식에 사용되고 반환될 언어를 설정한다.
  recognition.maxAlternatives = 5; //음성 인식결과를 5개 까지 보여준다.

  if (!recognition) {
    alert("현재 브라우저는 사용이 불가능합니다.");
  }
}

// --- 음성녹음을 실행하는 함수
function startRecord() {
    console.log("시작");
  
    // 클릭 시 음성인식을 시작한다.
    recognition.addEventListener("speechstart", () => {
      console.log("인식");
    });
  
    //음성인식이 끝까지 이루어지면 중단된다.
    recognition.addEventListener("speechend", () => {
      console.log("인식2");
    });
  
    //음성인식 결과를 반환
    // SpeechRecognitionResult 에 담겨서 반환된다.
    recognition.addEventListener("result", (e) => {
      whattodo.value = e.results[0][0].transcript;
    });
  
    recognition.start();
  }
  //  클릭 시 종료(안 눌러도 음성인식은 알아서 종료됨)
  function endRecord() {
    console.log("종료");
    recognition.stop(); // 음성인식을 중단하고 중단까지의 결과를 반환
  }
  
  window.addEventListener("load", availabilityFunc);


var cnt = 0;
for(var i=0; i<todoList.length; i++){
    console.log(todoList[i]);
    if(todoList[i].checked == 1) cnt++;
}
var count = document.getElementById("count");
var text = cnt + "/" + todoList.length;
var persent = cnt / todoList.length * 100;
console.log(persent);
count.innerHTML += text;
