$(function() {
	$(".globalNav-item-list a").click(function(e){
		e.preventDefault();
	});
	$(".localnav-header a").click(function(e){
		e.preventDefault();
	});
	$(".search-filter-contentitem").on("click",".as-producttile-img",function(){
		location.href="productDetail.html";
	})
	$(".disclosure-text").click(function() {
		if($(".localnav-tray").css("display") == "none") {
			$(".localnav-tray").slideDown(1000);
			$(".localnav").addClass("disclosure-texthover");
			$(".arrowdown").css("display", "none");
			$(".arrowup").css("display", "inline-block");
		} else {
			$(".localnav-tray").hide();
			$(".localnav").removeClass("disclosure-texthover");
			$(".arrowdown").css("display", "inline-block");
			$(".arrowup").css("display", "none");
		}
	});
	$(".accessories-wellchooose").click(function() {
		if($(".as-sort-drawer").css("display") == "none") {
			$(".as-sort-drawer").fadeIn(1000);
			$(".arrowdown1").css("display", "none");
			$(".arrowup1").css("display", "inline-block");
		} else {
			$(".as-sort-drawer").fadeOut(1000);
			$(".arrowdown1").css("display", "inline-block");
			$(".arrowup1").css("display", "none");
		}
	});
	$(".icon").click(function() {
		if($(this).next().css("display") == "none") {
			$(this).next().css("display", "block");
			$(this).html("-");
		} else {
			$(this).next().css("display", "none");
			$(this).html("+");
		}
	});
	$(".accessories-chooose").click(function(){
		if($(".as-search-filter-container").css("display")=="block"){
			$(".as-search-filter-container").hide(100);
			$(".search-filter-content").addClass("search-filter-contentcheck");
			$(".search-filter-contentitem").addClass("search-filter-contentitemcheck");
			$(".as-producttile-arrow").addClass("as-producttile-arrowcheck");
			
		}
		else{
			$(".as-search-filter-container").show(500);
			$(".search-filter-content").removeClass("search-filter-contentcheck");
			$(".search-filter-contentitem").removeClass("search-filter-contentitemcheck");
			$(".as-producttile-arrow").removeClass("as-producttile-arrowcheck");
			
		}
	});
	$(window).scroll(function(){
		var scrollTop=$(document).scrollTop();
		if(scrollTop>=324){
            $(".accessories-filter-tile").addClass("accessories-filter-tilescroll");
            $(".as-search-filter-container").addClass("as-search-filterscroll");
            $(".search-filter-content").css("float","right");
		}
		else{
			 $(".accessories-filter-tile").removeClass("accessories-filter-tilescroll");
			 $(".as-search-filter-container").removeClass("as-search-filterscroll");
			 $(".search-filter-content").css("float","left");
		}
		if(scrollTop>2300){
			 $(".as-search-filter-container").removeClass("as-search-filterscroll");
		}

	});
	var imgArr1=["img/colorMatching/MPUQ2.jpg","img/colorMatching/MPUQ2_AV2.jpg","img/colorMatching/MPUQ2_AV3.jpg"];
	var imgArr2=["img/colorMatching/MPVY2.jpg","img/colorMatching/MPVY2_AV2.jpg","img/colorMatching/MPVY2_AV3.jpg"];
	var imgArr3=["img/colorMatching/MQ5D2.jpg","img/colorMatching/MQ5D2_AV1_JET_BLACK.jpg","img/colorMatching/MQ5D2_AV1_SILVER.jpg","img/colorMatching/MQ5D2_AV1_RED.jpg","img/colorMatching/MQ5D2_AV2.jpg"];
	var imgArr4=["img/colorMatching/MQ2J2.jpg","img/colorMatching/MQ2J2_AV1.jpg","img/colorMatching/MQ2J2_AV2.jpg"];
	var imgArr5=["img/colorMatching/MQ582.jpg","img/colorMatching/MQ582_AV1_FLAT_BLACK.jpg","img/colorMatching/MQ582_AV1_SILVER.jpg","img/colorMatching/MQ582_AV1_RED.jpg","img/colorMatching/MQ582_AV2.jpg"];
	var imgArr6=["img/colorMatching/MQ2X2.jpg","img/colorMatching/MQ2X2_AV2.jpg","img/colorMatching/MQ2X2_AV3.jpg"];
	var imgArr7=["img/colorMatching/MPUR2.jpg","img/colorMatching/MPUR2_AV2.jpg","img/colorMatching/MPUR2_AV3.jpg"];
	var imgArr8=["img/colorMatching/MPW22.jpg","img/colorMatching/MPW22_AV2.jpg","img/colorMatching/MPW22_AV3.jpg"];
	var imgArr9=["img/colorMatching/MQ4V2.jpg","img/colorMatching/MQ4V2_AV1_GOLD.jpg","img/colorMatching/MQ4V2_AV1_SILVER.jpg","img/colorMatching/MQ4V2_AV1_SPACE_GRAY.jpg","img/colorMatching/MQ4V2_AV2.jpg"];
	var imgArr10=["img/colorMatching/MQ0H2.jpg","img/colorMatching/MQ0H2_AV1_GOLD.jpg","img/colorMatching/MQ0H2_AV1_SILVER.jpg","img/colorMatching/MQ0H2_AV2.jpg"];
	var imgArr11=["img/colorMatching/MQ4Q2.jpg","img/colorMatching/MQ4Q2_AV1_SILVER.jpg","img/colorMatching/MQ4Q2_AV1_SPACE_GRAY.jpg"];
	var imgArr12=["img/colorMatching/MN012.jpg","img/colorMatching/MN012_AV1_JET_BLACK.jpg","img/colorMatching/MN012_AV1_SILVER.jpg","img/colorMatching/MN012_AV1_GOLD.jpg","img/colorMatching/MN012_AV1_RED.jpg"];
    var index=0;
	
	$(".arrow-next").click(function(){
		var img=$(this).parent().parent().children(1).children();
		index++;
	    if(index>imgArr1.length-1){
	    	index=0;
	    }
	    if(img[0].id=="img-1"){
	      img[0].src=imgArr1[index];
	    }
	    else if(img[0].id=="img-2"){
	    	 img[0].src=imgArr2[index];
	    }
	    else if(img[0].id=="img-3"){
	    	 img[0].src=imgArr3[index];
	    }
	     else if(img[0].id=="img-4"){
	    	 img[0].src=imgArr4[index];
	    }
	    else if(img[0].id=="img-5"){
	    	 img[0].src=imgArr5[index];
	    }
	     else if(img[0].id=="img-6"){
	    	 img[0].src=imgArr6[index];
	    }
	    else if(img[0].id=="img-7"){
	    	 img[0].src=imgArr7[index];
	    }
	     else if(img[0].id=="img-8"){
	    	 img[0].src=imgArr8[index];
	    }
	    else if(img[0].id=="img-9"){
	    	 img[0].src=imgArr9[index];
	    }
	     else if(img[0].id=="img-10"){
	    	 img[0].src=imgArr10[index];
	    }
	    else if(img[0].id=="img-11"){
	    	 img[0].src=imgArr11[index];
	    }
	    else{
	    	img[0].src=imgArr3[index];
	    }
	
	});
	$(".arrow-prev").click(function(){
		var img=$(this).parent().parent().children(1).children();
		index--;
		if(index<0){
			index=imgArr1.length-1;
		}
		if(img[0].id=="img-1"){
	      img[0].src=imgArr1[index];
	    }
	    else if(img[0].id=="img-2"){
	    	 img[0].src=imgArr2[index];
	    }
	    else if(img[0].id=="img-3"){
	    	 img[0].src=imgArr3[index];
	    }
	     else if(img[0].id=="img-4"){
	    	 img[0].src=imgArr4[index];
	    }
	    else if(img[0].id=="img-5"){
	    	 img[0].src=imgArr5[index];
	    }
	     else if(img[0].id=="img-6"){
	    	 img[0].src=imgArr6[index];
	    }
	    else if(img[0].id=="img-7"){
	    	 img[0].src=imgArr7[index];
	    }
	     else if(img[0].id=="img-8"){
	    	 img[0].src=imgArr8[index];
	    }
	    else if(img[0].id=="img-9"){
	    	 img[0].src=imgArr9[index];
	    }
	     else if(img[0].id=="img-10"){
	    	 img[0].src=imgArr10[index];
	    }
	    else if(img[0].id=="img-11"){
	    	 img[0].src=imgArr11[index];
	    }
	    else{
	    	img[0].src=imgArr3[index];
	    }
	});
	//排序；
})