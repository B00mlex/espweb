
$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.menu').toggleClass('active');
    });

    //==== CHECKBOX=======

    $.each($('.checkbox'), function(index, val){
       if ($(this).find('input').prop('checked')==true ){
           $(this).addClass('active');
       }
    });

    $('.checkbox').click( function(event){
        $(this).toggleClass('active');
        if ($(this).hasClass('active')){
            $(this).find('input').prop('checked', true);
        }else{
            $(this).find('input').prop('checked', false);
        }
    });

    //====END CHECKBOX=======

//======== RADIO ===============
$.each($('.options_item'), function(){
    if ($(this).find('input').prop('checked')==true ){
        $(this).addClass('active');
    }
 });
 $('.options_item').click( function(event){
    if ($(this).find('input').prop('checked')==false ){
        $(this).parents('.options').find('.options_item').removeClass('active');
        $(this).parents('.options').find('.options_item .input').prop('checked', false);
        $(this).find('input').prop('checked', true);
        $(this).addClass('active');
      }
});

//======== END RADIO ===========

});//============ end document ready===========
