
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
$('.day').click( function(event){

        $(this).toggleClass('active');
      
});
$('#sched_button').click( function(event){
//   $(this).parent(this).find(".day").removeClass("active");

 let str = '';
 $(this).parent(this).find(".day").each(function(){
         if ($(this).hasClass("active")){
          if(str === ""){  
           str +=$(this).text();
          }else{
            str += ',' + $(this).text();
          }  
        }
     });

//  $(schedule).each(function(){
//     if ($(this).hasClass("active")){
        
//       str +=$(this).text() + ',';  
//     }
//  });
 
 alert(str);

  return false;
});


});//============ end document ready===========
