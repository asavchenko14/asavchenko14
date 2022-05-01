$(document).ready(function(){
//начало блока обработки меню.
	let sections = $('section'), nav = $('nav'), nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  let cur_pos = $(this).scrollTop() - 1 ;
  
  sections.each(function() {
    let top = $(this).offset().top - nav_height, bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('.a').removeClass('active');
      sections.removeClass('active');
		
      $(this).addClass('active');
      nav.find('.a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
nav.find('.a').on('click', function () {
  let $el = $(this), id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});
//начало блока анимации цифр
	let countBlockTop = $(".stat2 p").offset().top; //смещение блока с числом относительно верхнего края
	let show = true; // отвечает, что если один раз счетчик сработает, больше не срабатывал
		$(window).on("scroll", function (){	
			if(show && (countBlockTop < ($(window).scrollTop() + $(window).innerHeight()))){ //логика и должны быть два элемента true
				show = false; //если мы видим число, то больше его не надо показывать		
				$('.stat2 p').each(function() {
				$(this).prop('Counter', 0).animate({
					Counter: $(this).text()
				}, {
					duration: 1000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
			}
		});
});
