"use strict"
let tip = $('#tip');
	/*["Сайт визитка", 1000, 7, //0.1.2
		   //"Официальный сайт", 2000, 7, //3.4.5
		   "Персональная страница", 3000, 7, //6.7.8
		   "Не комерческий сайт", 4000, 7, //9.10.11
		   "Комерческий сайт", 5000, 7, //12.13.14
		   "Контент-сайт", 6000, 7]; //15.16.17*/
let dizain = $('#dizain');
	/*["Минемализм", 1000, 1, //0.1.2
			  "Информационный", 2000, 1, //3.4.5
			  "Organik & Natural", 3000, 1]; //6.7.8*/
let adapt = $('#adapt');
	/*["Адаптивный", 1000, 3, //0.1.2
			 "Только для PC", 2000, 3, //3.4.5
			 "Только для мобильных устройств", 3000, 3]; //6.7.8*/
let tipv, td, dizainv, dd, adaptv, ad, finish, finishd;

if (tip>0){
	switch(tip){
		case "1": tipv = 1000; td = 1; dizains(); break;
		case "2": tipv = 2000; td = 2; dizains(); break;
		case "3": tipv = 3000; td = 3; dizains(); break;
		case "4": tipv = 4000; td = 4; dizains(); break;
		case "5": tipv = 5000; td = 5; dizains(); break;
		case "6": tipv = 6000; td = 6; dizains(); break;
	}
}else{
	return;
}

function dizains(){
	switch(dizain){
		case "1": dizainv = 1000; dd = 1; adapts(); break;
		case "2": dizainv = 2000; dd = 1; adapts(); break;
		case "3": dizainv = 3000; dd = 1; adapts(); break;
	}
	
}
function adapts(){
	switch(adaptv){
		case "1": adaptv = 1000; ad = 3; break;
		case "2": adaptv = 2000; ad = 3; break;
		case "3": adaptv = 3000; ad = 3; break;
	}
	
}
finish = tipv + dizainv + adaptv;
finishd = td + dd + ad;
alert('Стоимость работы, '+finish+'. Колличество рабочих дней, '+finishd+'.');
//alert("text"); всплывающее увеждомление с кнопкой подтверждения
//console.log("text"); сообщения в консоле браузера
//confirm("hi?"); всплывающее увеждомление с двумя кнопками подтверждения
//prompt("Сколько тебе лет?") всплывающее увеждомление с кнопкой подтверждения и строкой для ввода данных