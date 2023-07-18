// $(document).ready(function () {
//     $("h1").click(function (){
//         $("h1").hide();
//     });
//     $("#imgButton").click(function(){
//         $("img").slideUp(2000).slideDown(2000);
//     })
// });

$(document).ready(function() {
    $("h2").dblclick(function() {
        $("h2").slideUp(2000).slideDown(2000)
    });
    $("#learnBtn").click(function(){
        $("img").slideUp(2000)
    });
    $("#backBtn").click(function(){
        $("img").slideDown(2000)
    });
    $("p").click(function() {
        alert("Thanks your notice is received")
    });
});