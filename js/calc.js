$(document).ready(function(){
	let tipv, td, dizainv, dd, adaptv, ad, finish, finishd;
	$('#tip').change(function(){
	let tip = $('#tip').val();
	switch(tip){
		case "1": tipv = 1000; td = 1; break;
		case "2": tipv = 2000; td = 2; break;
		case "3": tipv = 3000; td = 3; break;
		case "4": tipv = 4000; td = 4; break;
		case "5": tipv = 5000; td = 5; break;
		case "6": tipv = 6000; td = 6; break;
	}
});
	$('#dizayn').change(function(){
	let dizain = $('#dizayn').val();
	switch(dizain){
		case "1": dizainv = 1000; dd = 1; break;
		case "2": dizainv = 2000; dd = 1; break;
		case "3": dizainv = 3000; dd = 1; break;
	}
});
	$('#adapt').change(function(){
	let adapt = $('#adapt').val();
	switch(adapt){
		case "1": adaptv = 1000; ad = 3; break;
		case "2": adaptv = 2000; ad = 3; break;
		case "3": adaptv = 3000; ad = 3; break;
	}
finish = tipv + dizainv + adaptv;
finishd = td + dd + ad;
$('#srok').text(finishd + ' дней. ');
$('#stoit').text(finish + ' y.e. ');
		
});
});
//alert("text"); всплывающее увеждомление с кнопкой подтверждения
//console.log("text"); сообщения в консоле браузера
//confirm("hi?"); всплывающее увеждомление с двумя кнопками подтверждения
//prompt("Сколько тебе лет?") всплывающее увеждомление с кнопкой подтверждения и строкой для ввода данных