//��ʱ������ֵ
var time=null;
//��¼��ǰλ��
var nexImg = 0;
//���ڻ�ȡ�ֲ�ͼͼƬ����
var imgLength = $(".c-banner .banner ul li").length;
//��ʱ��̬���ݵ�ʱ��ʹ��,�����Ǹ�ɾ��
// var imgLength =0;
//���õײ���һ����ť��ʽ
$(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","black");

//ҳ�����
$(document).ready(function(){
	// dynamicData();
	//������ʱ��,����ʱ��Ϊ3��һ��
	time =setInterval(intervalImg,3000);
});

//�����һ��
$(".preImg").click(function(){
	//�����ʱ��
	clearInterval(time);
	var nowImg = nexImg;
	nexImg = nexImg-1;
	console.log(nexImg);
	if(nexImg<0){
		nexImg=imgLength-1;
	}
	//�ײ���ť��ʽ����
	$(".c-banner .jumpBtn ul li").css("background-color","white");
	$(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","#5291ff");
	
	//����ǰͼƬ���þ��Զ�λ,��һ��ͼƬ������Զ�λ
	$(".c-banner .banner ul img").eq(nowImg).css("position","absolute");
	$(".c-banner .banner ul img").eq(nexImg).css("position","relative");
	
	//�ֲ����뵭��
	$(".c-banner .banner ul li").eq(nexImg).css("display","block");
	$(".c-banner .banner ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$(".c-banner .banner ul li").eq(nowImg).stop().animate({"opacity":0},1000,function(){
		$(".c-banner ul li").eq(nowImg).css("display","none");
	});
	
	//������ʱ��,����ʱ��Ϊ3��һ��
	time =setInterval(intervalImg,3000);
})

//�����һ��
$(".nexImg").click(function(){
	clearInterval(time);
	intervalImg();
	time =setInterval(intervalImg,3000);
})

//�ֲ�ͼ
function intervalImg(){
	if(nexImg<imgLength-1){
		nexImg++;
	}else{
		nexImg=0;
	}
	
	//����ǰͼƬ���þ��Զ�λ,��һ��ͼƬ������Զ�λ
	$(".c-banner .banner ul img").eq(nexImg-1).css("position","absolute");
	$(".c-banner .banner ul img").eq(nexImg).css("position","relative");
	
	$(".c-banner .banner ul li").eq(nexImg).css("display","block");
	$(".c-banner .banner ul li").eq(nexImg).stop().animate({"opacity":1},1000);
	$(".c-banner .banner ul li").eq(nexImg-1).stop().animate({"opacity":0},1000,function(){
		$(".c-banner .banner ul li").eq(nexImg-1).css("display","none");
	});
	$(".c-banner .jumpBtn ul li").css("background-color","white");
	$(".c-banner .jumpBtn ul li[jumpImg="+nexImg+"]").css("background-color","#5291ff");
}

//�ֲ�ͼ���°�ť
//��̬���ݼ��ص�����Ӧ��������ɹ���ִ�иô���,����ť�޷�ʹ��
$(".c-banner .jumpBtn ul li").each(function(){
	//Ϊÿ����ť�������¼�
	$(this).click(function(){
		clearInterval(time);
		$(".c-banner .jumpBtn ul li").css("background-color","white");
		jumpImg = $(this).attr("jumpImg");
		if(jumpImg!=nexImg){
			var after =$(".c-banner .banner ul li").eq(jumpImg);
			var befor =$(".c-banner .banner ul li").eq(nexImg);
			
			//����ǰͼƬ���þ��Զ�λ,��һ��ͼƬ������Զ�λ
			$(".c-banner .banner ul img").eq(nexImg).css("position","absolute");
			$(".c-banner .banner ul img").eq(jumpImg).css("position","relative");
			
			after.css("display","block");
			after.stop().animate({"opacity":1},1000);
			befor.stop().animate({"opacity":0},1000,function(){
				befor.css("display","none");
			});
			nexImg=jumpImg;
		}
		$(this).css("background-color","#5291ff");
		time =setInterval(intervalImg,3000);
	});
});

	//��̬�����ֲ�ͼ
	//��̬���ݼ��ص�ʱ��Ҫֱ�ӵ��demo.html���з���������󲻵�����json����
// function dynamicData(){
// 	$.ajax({
// 		url:"js/test.json",
// 		type:"get",
// 		dataType:"json",
// 		success:function(data){
// 			if(data.code==1){
// 				var data = data.data;
// 				$.each(data,function(i){
// 					$(".c-banner .banner ul").append('<li><img src="'+this.img+'"></li>');
// 					$(".c-banner .jumpBtn ul").append('<li jumpImg="'+i+'"></li>')
// 				})
// 			}
// 			//��ȡͼƬ������
// 			imgLength = $(".c-banner .banner ul li").length;
// 			//Ϊ�ײ���ť���嵥���¼�
// 			$(".c-banner .jumpBtn ul li").each(function(){
// 				//Ϊÿ����ť�������¼�
// 				$(this).click(function(){
// 					clearInterval(time);
// 					$(".c-banner .jumpBtn ul li").css("background-color","white");
// 					jumpImg = $(this).attr("jumpImg");
// 					if(jumpImg!=nexImg){
// 						var after =$(".c-banner .banner ul li").eq(jumpImg);
// 						var befor =$(".c-banner .banner ul li").eq(nexImg);
// 						
// 						//����ǰͼƬ���þ��Զ�λ,��һ��ͼƬ������Զ�λ
// 						$(".c-banner .banner ul img").eq(nexImg).css("position","absolute");
// 						$(".c-banner .banner ul img").eq(jumpImg).css("position","relative");
// 						
// 						after.css("display","block");
// 						after.stop().animate({"opacity":1},1000);
// 						befor.stop().animate({"opacity":0},1000,function(){
// 							befor.css("display","none");
// 						});
// 						nexImg=jumpImg;
// 					}
// 					$(this).css("background-color","black");
// 					time =setInterval(intervalImg,3000);
// 				});
// 			});
// 		}
// 	})
// }