// 상단에 닉네임 삽입하기

const nickname = document.getElementById("nickname");

if(JSON.parse(localStorage.getItem("name")) == null) nickname.innerHTML = "<a href='../homescreen/home_index.html'>로그인</a>";
else nickname.innerHTML = JSON.parse(localStorage.getItem("name")) + " 님";

// 오늘의 목표 설정하기

let todaysGoal;

if(JSON.parse(localStorage.getItem("todays-goal")) == null){
    todaysGoal = document.getElementById("todays-goal").value;
    localStorage.setItem("todays-goal", JSON.stringify(todaysGoal));
}else{
    todaysGoal = JSON.parse(localStorage.getItem("todays-goal"));
    document.getElementById("todays-goal").value = todaysGoal;
}

function saveTodaysGoal(){
    todaysGoal = document.getElementById("todays-goal").value;
    localStorage.setItem("todays-goal", JSON.stringify(todaysGoal));
    alert("오늘의 목표를 설정했습니다!");
}

// 달성률 구하기

var cnt = 0;
for(var i=0; i<todoList.length; i++){
    if(todoList[i].checked == 1) cnt++;
}
var number = document.getElementById("number");
var count = document.getElementById("count");
var text = cnt + "/" + todoList.length;
var percent;

if(cnt==0 || todoList.length==0) percent = 0;
else percent = cnt / todoList.length * 100;
number.innerHTML = Math.floor(percent);
count.innerHTML = "완료한 항목수 / 전체 항목수 : " + text;

// 달성률 애니메이션

const goal = document.getElementById("number").innerText * 1;
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

// 메모 관련

const memoArea = document.getElementById("memo");

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
