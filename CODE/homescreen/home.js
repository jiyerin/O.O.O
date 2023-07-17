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
let pName;
let pID;
let pPW;

function checkLogin(){
    pName = document.getElementById("input-name").value;
    pID = document.getElementById("input-id").value;
    pPW = document.getElementById("input-pw").value;
    if( (pID == "ooo" || pID == "OOO") && (pPW == 1234) ){
        localStorage.setItem("name", JSON.stringify(pName));
        location.href = "../mainscreen/main.html";
    }else{
        alert("로그인에 실패하셨습니다.");
    }
}
