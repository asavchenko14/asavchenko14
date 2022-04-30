$(document).ready(function(){
	let countBlockTop = $(".stat2 p").offset().top; //смещение блока с числом относительно верхнего края
	let show = true; // отвечает, что если один раз счетчик сработает, больше не срабатывал
	let height = $(window).innerHeight(); //высота окна браузера
	console.log(countBlockTop);
	console.log(height);
		$(window).on("scroll", function (){
		 let top = $(window).scrollTop();	
			console.log(top);
			if(show && (countBlockTop < (top + height))){ //логика и должны быть два элемента true
				console.log('log');
				show = false; //если мы видим число, то больше его не надо показывать		
				$('.stat2 p').spincrement({ //вызов плагина с параметрами 
					from: 1, //начинать с 1
					duration: 4000, //задержка счетчика
					
				});
			}
		});
});