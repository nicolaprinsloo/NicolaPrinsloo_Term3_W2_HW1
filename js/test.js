$(document).ready(function () {
    $("h1").click(function (){
        $("h1").hide();
    });
    $("#imgButton").click(function(){
        $("img").slideUp(2000).slideDown(2000);
    })
});

