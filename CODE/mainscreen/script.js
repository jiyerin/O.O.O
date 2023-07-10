const goal= document.getElementById("number").innerText * 1;
const btn = document.getElementById("side-bar-btn");
const bar = document.getElementById("side-bar");
const barWidth = bar.style.width;
let isShowing = false;

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

// 사이드 바

function showBar(){
    if(isShowing){
        isShowing = false;
        
        bar.style.transform = "translateX(100px)";
        bar.style.transition = "transform .5s ease-out";
        
        /*
        bar.style.setProperty("transform", "translateX(100px)");
        bar.style.setProperty("transition", "transform .5s ease-out");
        */
        bar.style.display = "none";
    }
    else{
        isShowing = true;
        bar.style.display = "block";
        
        bar.style.transform = "translateX(0px)";
        bar.style.transition = "transform .5s ease-out";
        
       /*
        bar.style.setProperty("transform", "translateX(0px)");
        bar.style.setProperty("transition", "transform .5s ease-out");
        */
    }
}
