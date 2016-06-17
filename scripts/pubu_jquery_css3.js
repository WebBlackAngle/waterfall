$(window).on('load',function(){
	var dataInt={"data":[{"src":"1.jpg"},
	{"src":"3.jpg"},{"src":"4.jpg"},
	{"src":"2.jpg"}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide){
			$.each(dataInt.data,function(key,value){
				var oBox=$('<div>').addClass('box').appendTo($('#main'));
				var oPic=$('<div>').addClass('pic').appendTo($(oBox));
				//console.log(value);
				var oImg=$('<img>').attr('src','images/'+$(value).attr('src'));
				oImg.appendTo($(oPic));
				//console.log($(value).attr('src'));
			});
		}
	});

});
function checkScrollSlide(){ //是否具备加载数据块的条件
	var $lastBox=$("#main>div").last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	console.log(lastBoxDis+"-----"+(scrollTop+documentH));
	//console.log(lastBoxDis<scrollTop+documentH);
	return (lastBoxDis<scrollTop+documentH)?true:false;
} 