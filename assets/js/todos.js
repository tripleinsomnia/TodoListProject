//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//delete li when click on delete button
$("ul").on("click", "span", function(event){
    //$(this).parent().remove();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type=text]").on("keypress", function(event){
    //check the enter key is enter or not
    if(event.which === 13){
        //get todoText from input
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").on("click", function(){
    $("input[type=text]").fadeToggle();
});