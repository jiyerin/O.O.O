const nickname = document.getElementById("nickname");
const goal= document.getElementById("number").innerText * 1;
const saveBtn = document.getElementById("saveBtn");
const memoArea = document.getElementById("memo");
let isShowing = false;

// 상단에 닉네임 삽입하기
nickname.innerHTML = JSON.parse(localStorage.getItem("name")) + " 님";

// 달성률 애니메이션

$({ val : 0 }).animate({ val : goal }, {
    duration: 2000,
    step: function() {
        var num = Math.floor(this.val);
        $("#number").text(num);
    },
    complete: function() {
        var num = Math.floor(this.val);
        $("#number").text(num);
    }
});

/*
    - duration : 지속 시간 (1초=1000)
    - step : val 값에 따라 스텝별로 애니메이션을 진행하는 함수
    - complete : 애니메이션이 끝난 후 실행될 함수
*/

var cnt = 0;
for(var i=0; i<todoList.length; i++){
    console.log(todoList[i]);
    if(todoList[i].checked == 1) cnt++;
}
var count = document.getElementById("count");
var text = cnt + "/" + todoList.length;
var percent = cnt / todoList.length * 100;
console.log(percent);
count.innerHTML += text;

// 메모 관련

if(localStorage.getItem("memo") != null){
    memoArea.innerText = JSON.parse(localStorage.getItem("memo"));
}
function saveMemo(){
    localStorage.setItem("memo", JSON.stringify(memoArea.value));
    alert("저장되었습니다!")
}

// 창을 닫을 때 변경 사항이 있을 경우 경고 표시

addEventListener('beforeunload', checkToExit => { 
    checkToExit.preventDefault();
});
