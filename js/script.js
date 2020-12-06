
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

    $(document).on('click','.checkbox', function(event){
        if ($(this).hasClass('active')){
            $(this).find('input').prop('checked, true');
        }else{
            $(this).find('input').prop('checked, false');
        }
        $(this).toggleClass('active');
        return true;
    });

    //====END CHECKBOX=======

});//============ end document ready===========
