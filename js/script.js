$(document).ready(function(){

$(".nav-menu__item[data-nav-menu='0']").on("click",function()
{
     $('html, body').animate({
        scrollTop: $(".footer").offset().top
    }, 2000);
    
})

})