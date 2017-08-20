$(function() {

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
	$(".colornav-item .colornav-swatch").each(function(k, v) {
		v.setAttribute("index", k);
	});
	//按钮的hover效果
	var seltext = $(".selected-text");
	var prevtext;
	$(".colornav-swatch").hover(function() {
		prevtext = seltext.html();
		var index = this.getAttribute("index");
		var li = $(this).parent();
		li.addClass("colornav-swatchhover");
		setindex(index);
	}, function() {

		var li = $(this).parent();
		$(li).removeClass("colornav-swatchhover");
		seltext.html(prevtext);
	});
	//按钮的点击效果
	var index = 1;
	$(".colornav-swatch").click(function() {
		var li = $(this).parent();
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
				seltext.text("青雾蓝");

				break;
			case '1':
				seltext.html("花粉黄");
				break;
			case '2':
				seltext.html("橘粉");
				break;
			case '3':
				seltext.html("山茶红");
				break;
			case '4':
				seltext.html("卵石");
				break;
			case '5':
				seltext.html("湛蓝");
				break;
			case '6':
				seltext.html("白");
				break;
			case '7':
				seltext.html("粉砂");
				break;
			case '8':
				seltext.html("午夜蓝");
				break;
			case '9':
				seltext.html("黑");
				break;
			case '10':
				seltext.html("宝石绿");
				break;
			case '11':
				seltext.html("黄");
				break;
			case '12':
				seltext.html("青砖");
				break;
			case '13':
				seltext.html("可可");
				break;
			case '14':
				seltext.html("红");
				break;
		}
	}
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
	function chlickImg(index) {
		littleImg();
		var littleImg1 = $(".littleimg1");
		var littleImg2 = $(".littleimg2");
		var littleImg3 = $(".littleimg3");
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
	bigImg.click(function(){
		$("#showBigImg").css("display","block");
		$(".lighting").animate({left:390,top:0,width:600},200);
		$(".showImg").animate({height:658},200);
	});
	$(".back").click(function(){
		$(".showImg").animate({height:572},200);
		$(".lighting").animate({left:700,top:40,width:572},200);
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
	})
	var imgObj = [{
			"bigimg": ["img/watch/MLDH2.jpg", "img/watch/MLDH2_AV2.jpg", "img/watch/MLDH2_AV3.jpg"],
			"littleimg1": "img/watch/MPUG21.jpg",
			"littleimg2": "img/watch/MPUG2_AV21.jpg",
			"littleimg3": "img/watch/MPUG2_AV31.jpg"
		}, {
			"bigimg": ["img/watch/MPUQ2.jpg", "img/watch/MPUQ2_AV2.jpg", "img/watch/MPUQ2_AV3.jpg"],
			"littleimg1": "img/watch/MPUQ21.jpg",
			"littleimg2": "img/watch/MPUQ2_AV21.jpg",
			"littleimg3": "img/watch/MPUQ2_AV31.jpg"
		},
		{
			"bigimg": ["img/watch/MPUN2.jpg", "img/watch/MPUN2_AV2.jpg", "img/watch/MPUN2_AV3.jpg"],
			"littleimg1": "img/watch/MPUN21.jpg",
			"littleimg2": "img/watch/MPUN2_AV21.jpg",
			"littleimg3": "img/watch/MPUN2_AV31.jpg"
		},
		{
			"bigimg": ["img/watch/MPUK2.jpg", "img/watch/MPUK2_AV2.jpg", "img/watch/MPUK2_AV3.jpg"],
			"littleimg1": "img/watch/MPUK21.jpg",
			"littleimg2": "img/watch/MPUK2_AV21.jpg",
			"littleimg3": "img/watch/MPUK2_AV31.jpg"
		}, {
			"bigimg": ["img/watch/MPUH2.jpg", "img/watch/MPUH2_AV2.jpg", "img/watch/MPUH2_AV3.jpg"],
			"littleimg1": "img/watch/MPUH21.jpg",
			"littleimg2": "img/watch/MPUH2_AV21.jpg",
			"littleimg3": "img/watch/MPUH2_AV31.jpg"
		},
		{
			"bigimg": ["img/watch/MPUJ2.jpg", "img/watch/MPUJ2_AV2.jpg", "img/watch/MPUJ2_AV3.jpg"],
			"littleimg1": "img/watch/MPUJ21.jpg",
			"littleimg2": "img/watch/MPUJ2_AV21.jpg",
			"littleimg3": "img/watch/MPUJ2_AV31.jpg"
		},
		{
			"bigimg": ["img/watch/MJ4E2.jpg", "img/watch/MJ4E2_AV2.jpg", "img/watch/MJ4E2_AV3.jpg"],
			"littleimg1": "img/watch/MJ4E21.jpg",
			"littleimg2": "img/watch/MJ4E2_AV21.jpg",
			"littleimg3": "img/watch/MJ4E2_AV31.jpg"
		},
		{
			"bigimg": ["img/watch/MNJ02.jpg", "img/watch/MNJ02_AV2.jpg", "img/watch/MNJ02_AV3.jpg"],
			"littleimg1": "img/watch/MNJ021.jpg",
			"littleimg2": "img/watch/MNJ02_AV21.jpg",
			"littleimg3": "img/watch/MNJ02_AV31.jpg"
		},
		{
			"bigimg": ["img/watch/MLKX2.jpg", "img/watch/MLKX2_AV2.jpg", "img/watch/MLKX2_AV3.jpg"],
			"littleimg1": "img/watch/MLKX21.jpg",
			"littleimg2": "img/watch/MLKX2_AV21.jpg",
			"littleimg3": "img/watch/MLKX2_AV31.jpg"
		}, //
		{
			"bigimg": ["img/watch/MJ4F2.jpg", "img/watch/MJ4F2_AV2.jpg", "img/watch/MJ4F2_AV3.jpg"],
			"littleimg1": "img/watch/MJ4F21.jpg",
			"littleimg2": "img/watch/MJ4F2_AV21.jpg",
			"littleimg3": "img/watch/MJ4F2_AV31.jpg"
		},
		{
			"bigimg": ["img/watch/MLDH2.jpg", "img/watch/MLDH2_AV2.jpg", "img/watch/MLDH2_AV3.jpg"],
			"littleimg1": "img/watch/MLDH21.jpg",
			"littleimg2": "img/watch/MLDH2_AV21.jpg",
			"littleimg3": "img/watch/MLDH2_AV31.jpg"
		},
		{
			"bigimg": ["img/watch/MM992.jpg", "img/watch/MM992_AV2.jpg", "img/watch/MM992_AV3.jpg"],
			"littleimg1": "img/watch/MM9921.jpg",
			"littleimg2": "img/watch/MM992_AV21.jpg",
			"littleimg3": "img/watch/MM992_AV31.jpg"
		}, {
			"bigimg": ["img/watch/MNJ82.jpg", "img/watch/MNJ82_AV2.jpg", "img/watch/MNJ82_AV3.jpg"],
			"littleimg1": "img/watch/MNJ821.jpg",
			"littleimg2": "img/watch/MNJ82_AV21.jpg",
			"littleimg3": "img/watch/MNJ82_AV31.jpg"
		},
		{
			"bigimg": ["img/watch/MNJA2.jpg", "img/watch/MNJA2_AV2.jpg", "img/watch/MNJA2_AV3.jpg"],
			"littleimg1": "img/watch/MNJA21.jpg",
			"littleimg2": "img/watch/MNJA2_AV21.jpg",
			"littleimg3": "img/watch/MNJA2_AV31.jpg"
		}, {
			"bigimg": ["img/watch/MLDJ2.jpg", "img/watch/MLDJ2_AV2.jpg", "img/watch/MLDJ2_AV3.jpg"],
			"littleimg1": "img/watch/MLDJ21.jpg",
			"littleimg2": "img/watch/MLDJ2_AV21.jpg",
			"littleimg3": "img/watch/MLDJ2_AV31.jpg"
		}
	];
})