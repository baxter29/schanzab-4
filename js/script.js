$(document).ready(function(){

let flag = 0;

       $(".mobile-menu-burger").on("click",function()
       {
       	switch(flag)
       	{
       		case 0:
       		$(".nav-menu-mobile").animate();
       		flag = 1;
       		
       		break;
       		case 1:
       		$(".nav-menu-mobile").slideUp("slow");
       		flag = 0;
       		break;
       	}
       		
       	}
       )
    })