"use strict"
let tip = ["Сайт визитка", 1000, 7, //0.1.2
		   "Официальный сайт", 2000, 7, //3.4.5
		   "Персональная страница", 3000, 7, //6.7.8
		   "Не комерческий сайт", 4000, 7, //9.10.11
		   "Комерческий сайт", 5000, 7, //12.13.14
		   "Контент-сайт", 6000, 7]; //15.16.17
let dizain = ["Минемализм", 1000, 1, //0.1.2
			  "Информационный", 2000, 1, //3.4.5
			  "Organik & Natural", 3000, 1]; //6.7.8
let adapt = ["Адаптивный", 1000, 3, //0.1.2
			 "Только для PC", 2000, 3, //3.4.5
			 "Только для мобильных устройств", 3000, 3]; //6.7.8
let tipv, td, dizainv, dd, adaptv, ad, finish, finishd;

if (confirm("Вам нужен сайт?")){
	if(confirm("Ок, давай приступим!!!")){
	tips();
	}
}else{
	alert("Спасибо за посещение сайта, досвидание!!!");
}
function tips(){
	tipv = prompt("Выбери тип сайта: 1 - Сайт визитка, 2 - Официальный сайт, 3 - Персональная страница, 4 - Не комерческий сайт, 5 - Комерческий сайт, 6 - Контент сайт");
	switch(tipv){
		case "1": tipv = tip[1]; td = tip[2]; dizains(); break;
		case "2": tipv = tip[4]; td = tip[5]; dizains(); break;
		case "3": tipv = tip[7]; td = tip[8]; dizains(); break;
		case "4": tipv = tip[10]; td = tip[11]; dizains(); break;
		case "5": tipv = tip[13]; td = tip[14]; dizains(); break;
		case "6": tipv = tip[16]; td = tip[17]; dizains(); break;
	}
	
}
function dizains(){
	dizainv = prompt("Выбери тип дизайна: 1 - Минемализм, 2 - Информационный, 3 - Organik & Natural");
	switch(dizainv){
		case "1": dizainv = dizain[1]; dd = dizain[2]; adapts(); break;
		case "2": dizainv = dizain[4]; dd = dizain[5]; adapts(); break;
		case "3": dizainv = dizain[7]; dd = dizain[8]; adapts(); break;
	}
	
}
function adapts(){
	adaptv = prompt("Выбери тип адаптивности: 1 - Адаптивный, 2 - Только для PC, 3 - Только для мобильных устройств");
	switch(adaptv){
		case "1": adaptv = adapt[1]; ad = adapt[2]; break;
		case "2": adaptv = adapt[4]; ad = adapt[5]; break;
		case "3": adaptv = adapt[7]; ad = adapt[8]; break;
	}
	
}
finish = tipv + dizainv + adaptv;
finishd = td + dd + ad;
alert('Стоимость работы, '+finish+'. Колличество рабочих дней, '+finishd+'.');
//alert("text"); всплывающее увеждомление с кнопкой подтверждения
//console.log("text"); сообщения в консоле браузера
//confirm("hi?"); всплывающее увеждомление с двумя кнопками подтверждения
//prompt("Сколько тебе лет?") всплывающее увеждомление с кнопкой подтверждения и строкой для ввода данных