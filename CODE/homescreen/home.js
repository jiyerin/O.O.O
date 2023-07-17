$(document).ready(function(){
    $("#helpBtn").click(function(){
        $("#popup").fadeIn();
    });
    $("#popup").click(function(){
        $("#popup").fadeOut();
    });
})

// 로그인 기능

const form = document.getElementById("form");
const submit = document.getElementById("submit");
let pID;
let pPW;

function checkLogin(){
    pID = document.getElementById("input-id").value;
    pPW = document.getElementById("input-pw").value;
    console.log("id : " + pID);
    console.log("pw : " + pPW);
    if( (pID == "ooo" || pID == "OOO") && (pPW == 1234) ){
        location.href = "../mainscreen/main.html";
    }else{
        alert("로그인에 실패하셨습니다.");
    }
}
