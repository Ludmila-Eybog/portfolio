// BACK TOP BUTTON - Кнопка быстрой прокрутки вверх


$(document).ready(function(){
    $('#backTop').hide();
        
        $('html,body').scroll(function(){
            if ($(this).scrollTop() > 200){
                
                $("#backTop").fadeIn();
            }
            else{
                $("#backTop").fadeOut();
            }
        });    
    });    
  

