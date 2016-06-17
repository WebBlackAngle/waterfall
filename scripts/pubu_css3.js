window.onload=function(){
	var dataInt={"data":[{"src":"1.jpg"},
	{"src":"3.jpg"},{"src":"4.jpg"},
	{"src":"2.jpg"}]};
	window.onscroll=function(){
		if(checkScrollSlide){
			var oParent=document.getElementById('main');
			//将数据块渲染到尾部
			for(var i=0;i<dataInt.data.length;i++){
				var oBox=document.createElement("div");
				oBox.className="box";
				oParent.appendChild(oBox);
				var oPic=document.createElement("div");
				oPic.className="pic";
				oBox.appendChild(oPic);
				var oImg=document.createElement("img");
				oImg.src="images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
		}
	};
};

function checkScrollSlide(){ //是否具备加载数据块的条件
	var oParent=document.getElementById('main');
	var aBoxs=getElementsByClass(oParent,'box');
	var lastBoxH=aBoxs[aBoxs.length-1].offsetTop+Math.floor(aBoxs[aBoxs.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	//console.log(scrollTop);
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	//console.log(height);
	return (lastBoxH<scrollTop+height)?true:false;
} 