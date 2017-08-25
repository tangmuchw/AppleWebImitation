$(function() {
	 $.ajax({
	       type: "get",
		   url: "https://api.leancloud.cn/1.1/classes/productSelect",
		   headers: {
			"X-LC-Id": "VdO0YQ2YDMnuRzx3pMA32O0z-gzGzoHsz",
			"X-LC-Key": "uQq9Mr1SVWbzb8yUFKe1H5jq,master",
			"Content-Type": "application/json"
			},
			success:function(data){
				var a=localStorage.getItem(1);
	             var getdata=data.results[a];
				var productColor=getdata.productColorImg;
				colorText=getdata.productColor;
				var productColor=getdata.productColorImg;
				$(".materializer").html(getdata.productName);
				$(".current_price").html(getdata.productPrice);
				$(".p1").html(getdata.productGaiShu);
				$(".p2").html(getdata.productbag);
				$(".p3").html(getdata.productCaiLiao);
				var lis=$(".colornav-item");
				console.log(lis.length);
				for(var i=0;i<lis.length;i++){
					$(lis[i]).html(productColor[i]);
				}
				
			}
	    });
	
	var a=localStorage.getItem(1);
	var imgObj=imgobj[a];
	$(".disclosure-text").click(function() {
		if($(".localnav-tray").css("display") == "none") {
			$(".localnav-tray").slideDown(1000);
			$(".arrowdown").css("display", "none");
			$(".arrowup").css("display", "inline-block");
		} else {
			$(".localnav-tray").hide();
			$(".arrowdown").css("display", "inline-block");
			$(".arrowup").css("display", "none");
		}
	});
	$(".colornav-item").each(function(k, v) {
		v.setAttribute("index", k);
	});
	//按钮的hover效果
	var seltext = $(".selected-text");
	var prevtext;
	$(".colornav-item").hover(function() {
		prevtext = seltext.html();
		var index = this.getAttribute("index");
	$(this).addClass("colornav-swatchhover");
		setindex(index);
	}, function() {

		var li = $(this);
		$(li).removeClass("colornav-swatchhover");
		seltext.html(prevtext);
	});
	//按钮的点击效果
	var index = 1;
	$(".colornav-item").click(function() {
		var li = $(this);
		index = this.getAttribute("index");
		prevtext = seltext.html();
		$(".colornav-item").each(function(k, v) {
			$(v).removeClass("colornav-swatchchecked");
		})
		li.addClass("colornav-swatchchecked");
		setindex(index);
		chlickImg(index);
		littleImg()
	});
    
	function setindex(index) {
		switch(index) {
			case '0':
				seltext.text(colorText[0]);
				break;
			case '1':
				seltext.html(colorText[1]);
				break;
			case '2':
				seltext.html(colorText[2]);
				break;
			case '3':
				seltext.html(colorText[3]);
				break;
			case '4':
				seltext.html(colorText[4]);
				break;
			case '5':
				seltext.html(colorText[5]);
				break;
			case '6':
				seltext.html(colorText[6]);
				break;
			case '7':
				seltext.html(colorText[7]);
				break;
			case '8':
				seltext.html(colorText[8]);
				break;
			case '9':
				seltext.html(colorText[9]);
				break;
			case '10':
				seltext.html(colorText[10]);
				break;
			case '11':
				seltext.html(colorText[11]);
				break;
			case '12':
				seltext.html(colorText[12]);
				break;
			case '13':
				seltext.html(colorText[13]);
				break;
			case '14':
				seltext.html(colorText[14]);
				break;
		}
	}
	 //定义颜色文字
	var colorText;
	var index1 = 0;
	var bigImg = $(".bigimg");
	var span1 = $(".form-choice-selector-label1");
	var span2 = $(".form-choice-selector-label2");
	var changeprice = $(".changePrice");
	$(".form-choice-selector-label2").click(function(){
		    changeprice.html("42");
			span1.removeClass("form-choice-selector-labelchecked");
			span2.addClass("form-choice-selector-labelchecked");
	});
	$(".form-choice-selector-label1").click(function(){
		    changeprice.html("38");
			span2.removeClass("form-choice-selector-labelchecked");
			span1.addClass("form-choice-selector-labelchecked");
	})
	var showImg=$(".showImg");
	var littleImg1 = $(".littleimg1");
	var littleImg2 = $(".littleimg2");
	var littleImg3 = $(".littleimg3");
     bigImg[0].src = imgObj[1].bigimg[0];
	showImg[0].src = imgObj[1].bigimg[0];
	littleImg1[0].src = imgObj[1].littleimg1;
	littleImg2[0].src = imgObj[1].littleimg2;
	littleImg3[0].src = imgObj[1].littleimg3;
	function chlickImg(index) {
		littleImg();	
		if(index > 10) {
			changeprice.html("42");
			span1.removeClass("form-choice-selector-labelchecked");
			span2.addClass("form-choice-selector-labelchecked");
		} else {
			changeprice.html("38");
			span2.removeClass("form-choice-selector-labelchecked");
			span1.addClass("form-choice-selector-labelchecked");
		}
		switch(index) {
			case '0':
				bigImg[0].src = imgObj[0].bigimg[index1];
				showImg[0].src = imgObj[0].bigimg[index1];
				littleImg1[0].src = imgObj[0].littleimg1;
				littleImg2[0].src = imgObj[0].littleimg2;
				littleImg3[0].src = imgObj[0].littleimg3;
				break;
			case '1':
				bigImg[0].src = imgObj[1].bigimg[index1];
				showImg[0].src = imgObj[1].bigimg[index1];
				littleImg1[0].src = imgObj[1].littleimg1;
				littleImg2[0].src = imgObj[1].littleimg2;
				littleImg3[0].src = imgObj[1].littleimg3;
				break;
			case '2':
				bigImg[0].src = imgObj[2].bigimg[index1];
				showImg[0].src = imgObj[2].bigimg[index1];
				littleImg1[0].src = imgObj[2].littleimg1;
				littleImg2[0].src = imgObj[2].littleimg2;
				littleImg3[0].src = imgObj[2].littleimg3;
				break;
			case '3':
				bigImg[0].src = imgObj[3].bigimg[index1];
				showImg[0].src = imgObj[3].bigimg[index1];
				littleImg1[0].src = imgObj[3].littleimg1;
				littleImg2[0].src = imgObj[3].littleimg2;
				littleImg3[0].src = imgObj[3].littleimg3;
				break;
			case '4':
				bigImg[0].src = imgObj[4].bigimg[index1];
				showImg[0].src = imgObj[4].bigimg[index1];
				littleImg1[0].src = imgObj[4].littleimg1;
				littleImg2[0].src = imgObj[4].littleimg2;
				littleImg3[0].src = imgObj[4].littleimg3;
				break;
			case '5':
				bigImg[0].src = imgObj[5].bigimg[index1];
				showImg[0].src = imgObj[5].bigimg[index1];
				littleImg1[0].src = imgObj[5].littleimg1;
				littleImg2[0].src = imgObj[5].littleimg2;
				littleImg3[0].src = imgObj[5].littleimg3;
				break;
			case '6':
				bigImg[0].src = imgObj[6].bigimg[index1];
				showImg[0].src = imgObj[6].bigimg[index1];
				littleImg1[0].src = imgObj[6].littleimg1;
				littleImg2[0].src = imgObj[6].littleimg2;
				littleImg3[0].src = imgObj[6].littleimg3;
				break;
			case '7':
				bigImg[0].src = imgObj[7].bigimg[index1];
				showImg[0].src = imgObj[7].bigimg[index1];
				littleImg1[0].src = imgObj[7].littleimg1;
				littleImg2[0].src = imgObj[7].littleimg2;
				littleImg3[0].src = imgObj[7].littleimg3;
				break;
			case '8':
				bigImg[0].src = imgObj[8].bigimg[index1];
				showImg[0].src = imgObj[8].bigimg[index1];
				littleImg1[0].src = imgObj[8].littleimg1;
				littleImg2[0].src = imgObj[8].littleimg2;
				littleImg3[0].src = imgObj[8].littleimg3;
				break;
			case '9':
				bigImg[0].src = imgObj[9].bigimg[index1];
				showImg[0].src = imgObj[9].bigimg[index1];
				littleImg1[0].src = imgObj[9].littleimg1;
				littleImg2[0].src = imgObj[9].littleimg2;
				littleImg3[0].src = imgObj[9].littleimg3;
				break;
			case '10':
				bigImg[0].src = imgObj[10].bigimg[index1];
				showImg[0].src = imgObj[10].bigimg[index1];
				littleImg1[0].src = imgObj[10].littleimg1;
				littleImg2[0].src = imgObj[10].littleimg2;
				littleImg3[0].src = imgObj[10].littleimg3;
				break;
			case '11':
				bigImg[0].src = imgObj[11].bigimg[index1];
				showImg[0].src = imgObj[11].bigimg[index1];
				littleImg1[0].src = imgObj[11].littleimg1;
				littleImg2[0].src = imgObj[11].littleimg2;
				littleImg3[0].src = imgObj[11].littleimg3;
				break;
			case '12':
				bigImg[0].src = imgObj[12].bigimg[index1];
				showImg[0].src = imgObj[12].bigimg[index1];
				littleImg1[0].src = imgObj[12].littleimg1;
				littleImg2[0].src = imgObj[12].littleimg2;
				littleImg3[0].src = imgObj[12].littleimg3;
				break;
			case '13':
				bigImg[0].src = imgObj[13].bigimg[index1];
				showImg[0].src = imgObj[13].bigimg[index1];
				littleImg1[0].src = imgObj[13].littleimg1;
				littleImg2[0].src = imgObj[13].littleimg2;
				littleImg3[0].src = imgObj[13].littleimg3;
				break;
			case '14':
				bigImg[0].src = imgObj[14].bigimg[index1];
				showImg[0].src = imgObj[14].bigimg[index1];
				littleImg1[0].src = imgObj[14].littleimg1;
				littleImg2[0].src = imgObj[14].littleimg2;
				littleImg3[0].src = imgObj[14].littleimg3;
				break;
		}
	}
	var line = $(".gallery-nav-line");
	var lineleft = parseInt($(".gallery-nav-line").css("left"));
	littleImg();
	function littleImg() {
		var imgs = $(".gallery-wrapper-table li");
		var bigimg = $(".bigimg");
		imgs.each(function(k, v) {
			v.setAttribute("index", k);
		})
		imgs.click(function() {
			index1 = this.getAttribute("index");
			var a = 0;
			if(lineleft == 0) {
				a = 0;
			} else if(lineleft == 60) {
				a = 1;
			} else {
				a = 2;
			}
			bigImg[0].src = imgObj[index].bigimg[index1];
			showImg[0].src = imgObj[index].bigimg[index1];
			line.animate({ left: (index1 - a) * 58 }, 80);
		});
	}
	$(".msgbtn").click(function() {
		var li = $(this).parent().parent();
		var content = li.next();
		console.log(content);
		if(content.css("display") == "none") {
			content.css("display", "block");
			$(this).html("-");
		} else {
			content.css("display", "none");
			$(this).html("+");
		}
	})
	//定义图片的json数组
	var searchView = $("#searchView");
	var advWrapper = $("#adv-wrapper");
	var globalNavWrapper = $(".globalNav-wrapper");
	var chapterNavWrapper=$(".chapterNav-wrapper");
	bigImg.click(function(){
		$("#showBigImg").css("display","block");
		$(".lighting").animate({left:390,top:0,width:600},200);
		$(".showImg").animate({height:658},200);
		searchView.css("display", "none");
		advWrapper.css("display", "none");
		globalNavWrapper.css("display","none");
		chapterNavWrapper.css("display","none");
	});
	$(".back").click(function(){
		$(".showImg").animate({height:572},200);
		$(".lighting").animate({left:700,top:40,width:572},200);
		chapterNavWrapper.css("display","none");
		globalNavWrapper.css("display","block");
		setTimeout(function() {
							
								$("#showBigImg").css("display","none");
							
						}, 100);
	})
	var imgPrev=$(".img-prve");
	imgPrev.click(function(){
		index1--;
		if(index1<0){
			index1=2;
		}
		showImg[0].src = imgObj[index].bigimg[index1];
		console.log(showImg[0].src );
	});
	var imgNext=$(".img-next");
	imgNext.click(function(){
		index1++;
		if(index1>=3){
			index1=0;
		}
		showImg[0].src = imgObj[index].bigimg[index1];
		console.log(showImg[0].src );
	}); 
})