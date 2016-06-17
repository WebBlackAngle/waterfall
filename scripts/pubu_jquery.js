$(window).on('load',function(){
	waterfall();
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
			waterfall();
		}
	});

});


function waterfall(){
	var $boxs=$("#main>div");
	//var w=$boxs.eq(0).width();
	var w=$boxs.eq(0).outerWidth();//padding and margin也都获取
	var cols=Math.floor($(window).width()/w);
	//alert(w);
	//alert(cols);
	$("#main").width(w*cols).css("margin","0 auto");
	var hArr=[];
	$boxs.each(function(index,value){
		//console.log(index);
		//console.log(value);
		var h=$boxs.eq(index).outerHeight();
		if(index<cols){
			hArr[index]=h;
		}else{
			var minH=Math.min.apply(null,hArr);
			var minHIndex=$.inArray(minH,hArr);
			//console.log(value);  //保存的是DOM对象
			$(value).css({
				"position":"absolute",
				"top":minH+"px",
				"left":minHIndex*w+"px"
			});
			hArr[minHIndex]+=$boxs.eq(index).outerHeight();
		}
	});
	//console.log(hArr);
}

function checkScrollSlide(){ //是否具备加载数据块的条件
	var $lastBox=$("#main>div").last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	console.log(lastBoxDis+"-----"+(scrollTop+documentH));
	//console.log(lastBoxDis<scrollTop+documentH);
	return (lastBoxDis<scrollTop+documentH)?true:false;
} 