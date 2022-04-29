





$(document).ready(

function() {
let target_block1 = $("#stat1"); // Ищем блок
let target_block2 = $("#stat2"); // Ищем блок
let target_block3 = $("#stat3"); // Ищем блок
let target_block4 = $("#stat4"); // Ищем блок
let blockStatus = true;
let numb_finish1 = $("#stat1").text(); // Получаем конечное число
let numb_finish2 = $("#stat2").text(); // Получаем конечное число
let numb_finish3 = $("#stat3").text(); // Получаем конечное число
let numb_finish4 = $("#stat4").text(); // Получаем конечное число
$(window).scroll(

	function() {
let scrollEvent = ($(window).scrollTop() > (target_block1.position().top - $(window).height()));
if(scrollEvent && blockStatus) {
blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
$({numberValue: 0}).animate({numberValue: numb_finish1}, {
duration: 5000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
easing: "linear",
step: function(val) {
$("#stat1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
}
});
}
};
	function() {
let scrollEvent = ($(window).scrollTop() > (target_block2.position().top - $(window).height()));
if(scrollEvent && blockStatus) {
blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
$({numberValue: 0}).animate({numberValue: numb_finish2}, {
duration: 5000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
easing: "linear",
step: function(val) {
$("#stat2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
}
});
}
};
	
function() {
let scrollEvent = ($(window).scrollTop() > (target_block3.position().top - $(window).height()));
if(scrollEvent && blockStatus) {
blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
$({numberValue: 0}).animate({numberValue: numb_finish3}, {
duration: 5000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
easing: "linear",
step: function(val) {
$("#stat3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
}
});
}
};
	
function() {
let scrollEvent = ($(window).scrollTop() > (target_block4.position().top - $(window).height()));
if(scrollEvent && blockStatus) {
blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
$({numberValue: 0}).animate({numberValue: numb_finish4}, {
duration: 5000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
easing: "linear",
step: function(val) {
$("#stat4").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
}
});
}
}
);
});
				  
/*
$(document).ready(function () {
$('.stat2 p').each(function () {
   $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
     duration: 1500,
     easing: 'swing',
     step: function (now) {
        $(this).text(Math.ceil(now));
     }
    });
});	
});*/