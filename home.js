$(document).ready(function(){
    console.log("test")
})

$(".infoButton").click(function(){
    $(".infoHeader").html($(this).attr('id'))
    $(".infoButton").css("background-color","#43434d")
    $(".info").css("color", "white")
    $(this).children().css("color","#43434d")
    $(this).css("background-color","white")
})
