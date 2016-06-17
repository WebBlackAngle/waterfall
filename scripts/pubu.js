window.onload=function(){
	waterfall('main','box');
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
			waterfall('main','box');
		}
	};
};


function waterfall(parent,box){
	//取main 下的box
	var oParent=document.getElementById('main');
	var aBoxs=getElementsByClass(oParent,'box');
	//alert(aBoxs.length);
	//计算页面的列数(页面宽/box的宽度)
	var oBoxW=aBoxs[0].offsetWidth;
	//alert(oBoxW);
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	//alert(cols);
	//设置main的宽
	oParent.style.cssText="width:"+oBoxW*cols+"px;margin:0 auto";
	var hArr=[];//存放每一列高度的数组
	for (var i = 0; i < aBoxs.length; i++) {
		if(i<cols){
			hArr.push(aBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			//console.log(minH);
			var index=getMinIndex(hArr,minH);
			aBoxs[i].style.position="absolute";
			aBoxs[i].style.top=minH+"px";
			//aBoxs[i].style.left=oBoxW*index+"px";
			aBoxs[i].style.left=aBoxs[index].offsetLeft+"px";
			hArr[index]+=aBoxs[i].offsetHeight;
		}
	}

	//alert(hArr);
	
}


function getElementsByClass(parent,clsName){
	var boxArr=new Array();
	var oElements=parent.getElementsByTagName('*');
	for (var i = 0; i < oElements.length; i++) {
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
function getMinIndex(arr,val){
	for (var i in arr) {
		if(arr[i]==val){
			return i;
		}
	}
}

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