"use strict"
function getRandomArbitary(min, max){
  return Math.random() * (max - min) + min;
}
var a1=true,a2=true,a3=true,a4=true,a5=true;
var flag_last_kill1=false,flag_last_kill2=false,flag_last_kill3=false,flag_last_kill4=false,flag_last_kill5=false;
var marg1=0;
var marg2=0;
var marg3=0;
var marg4=0;
var marg5=0;
var dinamic_margin=0;
var counter=0;
var speed1=5000,speed2=7000,speed3=6000,speed4=9000,speed5=2000;
var our_lifes=3;
var count_lifes=0;
$(function(){//main function
	$('body').attr('unselectable', 'on').select(function() {return false}).css({
  '-moz-user-select': '-moz-none',
  '-o-user-select': 'none',
  '-khtml-user-select': 'none',
  '-webkit-user-select': 'none',
  'user-select': 'none'
});

$("#start_button").click(function(){
	$("#start").css("display","none");
	$("body").css("cursor","none");
//
	function animate1(){
		flag_last_kill1=true;
    do{
    marg1=getRandomArbitary(50,1100);
}while(!((marg1+80<$("#alien2").offset().left||marg1>$("#alien2").offset().left+80)&&
    	(marg1+80<$("#alien3").offset().left||marg1>$("#alien3").offset().left+80)&&
    	(marg1+80<$("#alien4").offset().left||marg1>$("#alien4").offset().left+80)&&
    	(marg1+80<$("#alien5").offset().left||marg1>$("#alien5").offset().left+80)&&
    	(marg1<$("#boss").offset().left||marg1>$("#boss").offset().left+100)));
a1=true;
    $("#alien1").attr({"src":"images/alien1.png"});
	$("#alien1").css({marginTop:"-100px"});
	$("#alien1").css("marginLeft",marg1+"px");
	$("#alien1").animate({marginTop:"1200px"},speed1+5000,animate1);
	if($("#alien1").attr("src")!="images/alien1.png"){
		$("#alien1").attr({"src":"images/alien1.png"});
	}
}animate1();

	function animate2(){
		flag_last_kill2=true;
    do{
    marg2=getRandomArbitary(50,1100);
}while(!((marg2+80<$("#alien1").offset().left||marg2>$("#alien1").offset().left+80)&&
    	(marg2+80<$("#alien3").offset().left||marg2>$("#alien3").offset().left+80)&&
    	(marg2+80<$("#alien4").offset().left||marg2>$("#alien4").offset().left+80)&&
    	(marg2+80<$("#alien5").offset().left||marg2>$("#alien5").offset().left+80)&&
    	(marg2<$("#boss").offset().left||marg2>$("#boss").offset().left+100)));
a2=true;
    $("#alien2").attr({"src":"images/alien2.png"});
	$("#alien2").css({marginTop:"-100px"});
	$("#alien2").css("marginLeft",marg2+"px");
	$("#alien2").animate({marginTop:"1200px"},speed2+5000,animate2);
	if($("#alien2").attr("src")!="images/alien2.png"){
		$("#alien2").attr({"src":"images/alien2.png"});
	}

}animate2();

	function animate3(){
		flag_last_kill3=true;
		do{
    marg3=getRandomArbitary(50,1100);
}while(!((marg3+80<$("#alien1").offset().left||marg3>$("#alien1").offset().left+80)&&
    	(marg3+80<$("#alien2").offset().left||marg3>$("#alien2").offset().left+80)&&
    	(marg3+80<$("#alien4").offset().left||marg3>$("#alien4").offset().left+80)&&
    	(marg3+80<$("#alien5").offset().left||marg3>$("#alien5").offset().left+80)&&
    	(marg3<$("#boss").offset().left||marg3>$("#boss").offset().left+100)));
a3=true;
    $("#alien3").attr({"src":"images/alien3.png"});
	$("#alien3").css({marginTop:"-100px"});
	$("#alien3").css("marginLeft",marg3+"px");
	$("#alien3").animate({marginTop:"1200px"},speed3+5000,animate3);
	if($("#alien3").attr("src")!="images/alien3.png"){
		$("#alien3").attr({"src":"images/alien3.png"});
	}
}animate3();

	function animate4(){
		flag_last_kill4=true;
		do{
    marg4=getRandomArbitary(50,1100);
}while(!((marg4+80<$("#alien1").offset().left||marg4>$("#alien1").offset().left+80)&&
    	(marg4+80<$("#alien2").offset().left||marg4>$("#alien2").offset().left+80)&&
    	(marg4+80<$("#alien3").offset().left||marg4>$("#alien3").offset().left+80)&&
    	(marg4+80<$("#alien5").offset().left||marg4>$("#alien5").offset().left+80)&&
    	(marg4<$("#boss").offset().left||marg4>$("#boss").offset().left+100)));
a4=true;
    $("#alien4").attr({"src":"images/alien4.png"});
	$("#alien4").css({marginTop:"-100px"});
	$("#alien4").css("marginLeft",marg4+"px");
	$("#alien4").animate({marginTop:"1200px"},speed4+5000,animate4);
	if($("#alien4").attr("src")!="images/alien4.png"){
		$("#alien4").attr({"src":"images/alien4.png"});
	}
}animate4();

	function animate5(){
		flag_last_kill5=true;
			do{
    marg5=getRandomArbitary(50,1100);
}while(!((marg5+80<$("#alien1").offset().left||marg5>$("#alien1").offset().left+80)&&
    	(marg5+80<$("#alien2").offset().left||marg5>$("#alien2").offset().left+80)&&
    	(marg5+80<$("#alien3").offset().left||marg5>$("#alien3").offset().left+80)&&
    	(marg5+80<$("#alien4").offset().left||marg5>$("#alien4").offset().left+80)&&
    	(marg5<$("#boss").offset().left||marg5>$("#boss").offset().left+80)));
a5=true;
    $("#alien5").attr({"src":"images/alien5.png"});
	$("#alien5").css({marginTop:"-100px"});
	$("#alien5").css("marginLeft",marg5+"px");
	$("#alien5").animate({marginTop:"1200px"},speed5+5000,animate5);
	if($("#alien5").attr("src")!="images/alien5.png"){
		$("#alien5").attr({"src":"images/alien5.png"});
	}
}animate5();
var flag=0;
	function animateBoss(){
	$("#boss").animate({marginTop:"1200px"},20000);
	}
//
function black_screen(){
	$("#start").css("display","");
	$("body").css("cursor","");
	$("#alien1,#alien2,#alien3,#alien4,#alien5").stop();
		$("#start").html("<div id=\"start\"><button id=\"restart_button\">Game Over</button><br><div class=\"credits\"><p>Счет: "+counter+"</p><br><h3>Автор:</h3> Котов Даниил 27ПР21<br><h3>Руководитель:</h3> Радченко Вячеслав Валерьевич<br>28.09.2016-13.10.2016<br></div></div>");
		$("#restart_button").click(function(){
location.reload();
});
}




$(window).mousemove(function(event){
	if($("#boss").offset().top>1100){
	black_screen();
	}
	if($("#alien1").offset().top>1100&&a1==true){
		a1=false;
		count_lifes++;
	our_lifes-=1;
	$("#count_lifes").html(our_lifes);
	}else if($("#alien2").offset().top>1100&&a2==true){
		a2=false;
		count_lifes++;
	our_lifes-=1;
	$("#count_lifes").html(our_lifes);
	}else if($("#alien3").offset().top>1100&&a3==true){
		a3=false;
		count_lifes++;
	our_lifes-=1;
	$("#count_lifes").html(our_lifes);
	}else if($("#alien4").offset().top>1100&&a4==true){
		a4=false;
		count_lifes++;
	our_lifes-=1;
	$("#count_lifes").html(our_lifes);
	}else if($("#alien5").offset().top>1100&&a5==true){
		a5=false;
		count_lifes++;
	our_lifes-=1;
	$("#count_lifes").html(our_lifes);
	}if(count_lifes==3&&our_lifes==0){
	black_screen();
	}
	event=event||window.event;
	 var x = event.clientX; // положения по оси X (слева)
    var y = event.clientY; // положения по оси Y (сверху)
//console.log("our_lifes"+":"+our_lifes+" "+" _ "+" "+"count_lifes"+":"+count_lifes);
	
	//
$("#ship_block").css({"marginTop":y,"marginLeft":x}); 
	//SPAWN BOSS
	if(counter==50&&flag==0){
		flag=1;
	$("#boss").css({"marginTop":"-100px","marginLeft":"390px"});
	for(var i=0;i<boss_lives;i++){
		$("#lives").html($("#lives").html()+"<img src=\"images/lives.png\">");
	}
	animateBoss();

}
	//6666666666
});
//
var boss_lives=16;
var speed=[];
//var speed1=0,speed2=0,speed3=0,speed4=0,speed5=0,speed_b=0;//скорость полета пули
$(window).mousedown(function(){
	$(".bg").prepend("<img src='images/bullet.png' id='bullet'>");
	$("#bullet").eq(0).css({"marginTop":$("#ship").offset().top+"px","marginLeft":$("#ship").offset().left+45+"px"});
	//$("#bullet").eq(0).css({"marginTop":""});
	$("#bullet").eq(0).animate({marginTop:-100+"px"},1000);
	//00000000000000000000000000000000000000000000000000000000000000000000000000000000
	if(($("#bullet").offset().left<$("#boss").offset().left+220)&&//----------------
		($("#bullet").offset().left+25>$("#boss").offset().left-5)&&
		($("#ship").offset().top>$("#boss").offset().top+100)
/*&&($("#boss").offset().top+30>$("#alien1").offset().top||
	$("#boss").offset().top+30>$("#alien2").offset().top||
		$("#boss").offset().top+30>$("#alien3").offset().top||
		$("#boss").offset().top+30>$("#alien4").offset().top||
		$("#boss").offset().top+30>$("#alien5").offset().top)*/){
		boss_lives--;//при попадании уменьшаем жизни босса
speed[5]=($("#ship").offset().top-$("#boss").offset().top);
setTimeout(function(){
$(".bg").prepend("<img src=\"images/boom.gif\" id='shut_boss'>");
	$("#shut_boss").css({"marginTop":$("#boss").offset().top+15+"px","marginLeft":$("#boss").offset().left+"px"});
	$("#bullet").eq(0).remove(); 
},speed[5]);
	setTimeout(function(){
$("#shut_boss").eq(0).remove();
	},800);
	$("#lives").html(" ");
	for(var i=0;i<boss_lives;i++){
		$("#lives").html($("#lives").html()+"<img src=\"images/lives.png\">");
	}
		
	//========================================================================

	if(boss_lives==0){
$("#shut_boss").remove();
		counter+=50;
	$("#boss").stop();
	$("#alien1,#alien2,#alien3,#alien4,#alien5").stop();
$("#boss").attr({"src":"images/boom_boss.gif"});
	$("#alien1,#alien2,#alien3,#alien4,#alien5").css({"marginLeft":"5000px"});
	setTimeout(function(){
	$("#boss").css({marginTop:"-200px",marginLeft:"-1000px"});
	$("#start").css("display","");
	$("body").css("cursor","");
	$("#alien1,#alien2,#alien3,#alien4,#alien5").stop();
	$("#ship").css({marginLeft:"-1000px"});
	$("#start").html("<div id=\"start\"><img id=\"timer_dell\" src=\"images/fone_end.png\"></div>");
		//анимация конца
		setTimeout(function(){
			$("#start").html("<div id=\"start\"><div class=\"credits\">Счет: "+counter+"<br><br><h3>Автор:</h3> Котов Даниил 27ПР21<br><br><h3>Team Leader:</h3> Котов Даниил 27ПР21<br><br><h3>Тестировщик:</h3> Котов Даниил 27ПР21<br><br><h3>Главный программист:</h3> Котов Даниил 27ПР21<br><br><h3>Преподаватель:</h3> Радченко Вячеслав Валерьевич<br>28.09.2016-13.10.2016<br></div></div>");
			$("#timer_dell").remove();
$(".credits").animate({marginTop:"1200px"},20000);
setTimeout(function(){
location.reload();
},20000);

		},2000);
},800);
	}
}//===========================================
////===========VERNUTSA SUDA==================
//============================================
	if(($("#bullet").offset().left<$("#alien1").offset().left+80)&&//----------------
		($("#bullet").offset().left+25>$("#alien1").offset().left)&&
		($("#ship").offset().top>$("#alien1").offset().top)){
		if(flag_last_kill1==true){
			flag_last_kill1=false;
speed[0]=($("#ship").offset().top-$("#alien1").offset().top);
	setTimeout(function(){
	$("#alien1").stop();
	$("#bullet").eq(0).remove();
$("#alien1").attr({"src":"images/boom.gif"});
	},speed[0]);

	setTimeout(function(){
	$("#alien1").css({marginTop:"-100px"});
$("#alien1").attr({"src":"images/alien1.png"});
animate1();
},speed[0]+400);
	counter++;
$("#count").html(counter);
}
return;
	} //-----------------------------------------------------------------------------
	if(($("#bullet").offset().left<$("#alien2").offset().left+80)//----------------
		&&($("#bullet").offset().left+25>$("#alien2").offset().left)&&
		($("#ship").offset().top>$("#alien2").offset().top)){
if(flag_last_kill2==true){
			flag_last_kill2=false;
speed[1]=($("#ship").offset().top-$("#alien2").offset().top);
			setTimeout(function(){
	$("#alien2").stop();
	$("#bullet").eq(0).remove();
$("#alien2").attr({"src":"images/boom.gif"});
	},speed[1]);
	setTimeout(function(){
	$("#alien2").css({marginTop:"-100px"});
$("#alien2").attr({"src":"images/alien2.png"});
animate2();
},speed[1]+400);
	counter++;
$("#count").html(counter);
}
return;
	} //-----------------------------------------------------------------------------
	if(($("#bullet").offset().left<$("#alien3").offset().left+80)//----------------
		&&($("#bullet").offset().left+25>$("#alien3").offset().left)&&
		($("#ship").offset().top>$("#alien3").offset().top)){
if(flag_last_kill3==true){
			flag_last_kill3=false;
speed[2]=($("#ship").offset().top-$("#alien3").offset().top);
setTimeout(function(){
	$("#alien3").stop();
	$("#bullet").eq(0).remove();
$("#alien3").attr({"src":"images/boom.gif"});
	},speed[2]);
	setTimeout(function(){
	$("#alien3").css({marginTop:"-100px"});
$("#alien3").attr({"src":"images/alien3.png"});
animate3();
},speed[2]+400);
	counter++;
$("#count").html(counter);
}
return;
	} //-----------------------------------------------------------------------------
	if(($("#bullet").offset().left<$("#alien4").offset().left+80)//----------------
		&&($("#bullet").offset().left+25>$("#alien4").offset().left)&&
		($("#ship").offset().top>$("#alien4").offset().top)){
if(flag_last_kill4==true){
			flag_last_kill4=false;
speed[3]=($("#ship").offset().top-$("#alien4").offset().top);
setTimeout(function(){
	$("#alien4").stop();
	$("#bullet").eq(0).remove();
$("#alien4").attr({"src":"images/boom.gif"});
	},speed[3]);
	setTimeout(function(){
	$("#alien4").css({marginTop:"-100px"});
$("#alien4").attr({"src":"images/alien4.png"});
animate4();
},speed[3]+400);
	counter++;
$("#count").html(counter);
}
return;
	} //-----------------------------------------------------------------------------
	if(($("#bullet").offset().left<$("#alien5").offset().left+80)//----------------
		&&($("#bullet").offset().left+25>$("#alien5").offset().left)&&
		($("#ship").offset().top>$("#alien5").offset().top)){
	if(flag_last_kill5==true){
			flag_last_kill5=false;
speed[4]=($("#ship").offset().top-$("#alien5").offset().top);
setTimeout(function(){
	$("#alien5").stop();
	$("#bullet").eq(0).remove();
$("#alien5").attr({"src":"images/boom.gif"});
	},speed[4]);
	setTimeout(function(){
	$("#alien5").css({marginTop:"-100px"});
$("#alien5").attr({"src":"images/alien5.png"});
animate5();
},speed[4]+400);
counter++;
$("#count").html(counter);
}
return;
}
	$("#bullet").eq(0).animate({marginTop:"-1000px"},400);
			});
		});
});