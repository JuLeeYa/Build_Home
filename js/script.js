$(document).ready(function(){

  $('.main_slider').slick({
    autoplay: true,
     dots: true,
     arrows: false,
     infinite: true,
  }); 

  $(' .active').next('div').show();
      
  
  $(' li .akkordeon-header').on('click', function(){
      

if(!$(this).hasClass('active')){  //если "кликнутый" пункт неактивный:
          $('li .akkordeon-header').removeClass('active').next('div').slideUp(); //делаем неактивными все пункты и скрываем все блоки
          $('.akkordeon-header > span').html('+')
          $(this).addClass('active'); //активируем "кликнутый" пункт
          $('li .akkordeon-header .active' > '.plus').html('-');
        $(' .active > span').html('-');
          $(this).next('div').slideDown(200); //раскрываем следующий за ним блок с описанием
           


        } else {  //иначе:
          $(this).removeClass('active').next('div').slideUp();  //скрываем данный пункт
          $('.akkordeon-header > span').html('+')
       
        }

      });


     
    });

