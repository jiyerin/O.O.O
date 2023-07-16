$(document).ready(function(){
    $("#helpBtn").click(function(){
        $("#popup").fadeIn();
    });
    $("#popup").click(function(){
        $("#popup").fadeOut();
    });
})