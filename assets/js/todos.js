// check off specific todos by clicking
$("ul").on('click', "li", function(){
    $(this).toggleClass("completed");
});


// click on trash can to delete todo
$("ul").on('click', "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    e.stopPropagation();
});

// create new todo
$("input[type='text']").on('keypress', function(e){
    if(e.which === 13){
        // grabbing new todo text from input
       const todoText = $(this).val();
       $(this).val("");
       // create a new li and add to ul
        $('ul').append(`<li><span><i class="far fa-trash-alt delete"></i></span> ${todoText}</li>`)
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
})