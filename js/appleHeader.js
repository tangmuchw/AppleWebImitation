$(function() {
	//调整.chapterNav-icon img的位置
	var _w = parseInt($(window).width()); //获取浏览器的宽度
	//	console.log($(".chapterNav-icon img").length)
	$(".chapterNav-icon img").each(function(i) {
		var img = $(this);
		var realWidth; //真实的宽度
		//这里做下说明，$("<img/>")这里是创建一个临时的img标签，类似js创建一个new Image()对象！
		$("<img/>").attr("src", $(img).attr("src")).load(function() {
			/*
			  如果要获取图片的真实的宽度和高度有三点必须注意
			  1、需要创建一个image对象：如这里的$("<img/>")
			  2、指定图片的src路径
			  3、一定要在图片加载完成后执行如.load()函数里执行
			 */
			realWidth = this.width;
			//			console.log(-realWidth/2);
			img.css("margin-left", -realWidth / 2 + "px")
			//			img[0].style.marginLeft = -realWidth / 2 + "px";
		});

	});

	//设置.link-apple的点击事件
	$(".link-apple").click(function(){
		$("#chapterNav").css("display","none");
	});

	//设置globalNav-item对应的macNav，iPadNav，iPhoneNav，watchNav，musicNav的点击切换事件
	navClick($(".macNav"), $(".macList"));
	navClick($(".iPadNav"), $(".iPadList"));
	navClick($(".iPhoneNav"), $(".iPhoneList"));
	navClick($(".watchNav"), $(".watchList"));
	navClick($(".musicNav"), $(".musicList"));

	function navClick(objClick, objShow) {
		objClick.click(function() {
			//			设置chapterNav
			objShow.parent().parent().css({
				left: "100%",
				display: "block"
			});
			objShow.css({
				left: "100%",
				display: "block"
			});
			objShow.parent().parent().animate({
				left: "0px",
			}, 500);
			objShow.siblings().hide();
			objShow.siblings().stop();
			objShow.animate({
				left: "0px",

			}, 1000);
			//			修改对应的背景色
			//			console.log(objClick.is($(".iPadNav")));
			//			console.log(objClick.is($(".watchNav")));
			if(objClick.is($(".iPadNav"))) {
				$("#chapterNav").css("background", "rgba(245,245,245,0.7)");
			} else if(objClick.is($(".watchNav"))) {
				$("#chapterNav").css("background", "#FBFBFB");

			} else if(objClick.is($(".musicNav"))) {
				$("#chapterNav").css("background", "rgba(58,54,51,0.8)");
				$("#globalNav").css("background", "rgba(97,91,88,0.8)");

			} else {
				$("#chapterNav").css("background", "#2D2D2D");
				$("#globalNav").css("background", "#1E1E1E");

			}
		})
	}

	//设置购物袋.link-bag 的点击事件
	$(".link-bag").click(function() {
		$("#bagView").slideToggle();
	});

	//	设置搜索按钮.link-search的点击事件
	var searchView = $("#searchView");
	var advWrapper = $("#adv-wrapper");
	var globalNavWrapper = $(".globalNav-wrapper");

	//	平滑动画移动对象
	var searchFormWrapper = $(".searchForm-wrapper");
	var searchResultsHeader = $(".searchResults-header");
	var searchResultsItems = $(".searchResults-item");
	//	console.log(searchResultsHeader);
	$(".link-search").click(function() {
		searchView.css("display", "block");
		advWrapper.css("display", "none");
		globalNavWrapper.css("display", "none");
		smoothMove(searchFormWrapper, 500);
		smoothMove(searchResultsHeader, 600);
		smoothMove(searchResultsItems.eq(0), 700);
		smoothMove(searchResultsItems.eq(1), 800);
		smoothMove(searchResultsItems.eq(2), 900);
		smoothMove(searchResultsItems.eq(3), 1000);

	});

	function smoothMove(id, time) {
		id.css({
			display: "none",
			left: "200%"
		});
		id.animate({
			display: "block",
			left: "0px"
		}, time);
	}

	$(".searchView-close").click(function() {
		searchView.css("display", "none");
		advWrapper.css("display", "block");
		globalNavWrapper.css("display", "block");
	});

})