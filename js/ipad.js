$(function() {
	$(document).scroll(function() {
		var scrollTop = $(document).scrollTop();
		console.log(scrollTop);
		var scroll = $(".ac-ln");
		var border = $(".ac-ln-content");
		var text1 = $(".video-text")[0];
		var btn = $(".vedio-btn");
		if((scrollTop > 83 && scrollTop < 2300) || scrollTop > 11000) {
			if(scrollTop > 1100) {
				$(".line-animation").fadeIn("5000");
			}
			scroll.removeClass("ac-lnhover1");
			scroll.addClass("ac-lnhover");
			$(".ac-ln-menu a").css("color", "black");
			$(".ac-ln-title-logo").css("color", "black");
			border.removeClass("ac-border");
		} else if(scrollTop > 2300 && scrollTop < 11000) {
			scroll.removeClass("ac-lnhover");
			scroll.addClass("ac-lnhover1");
			$(".ac-ln-menu a").css("color", "white");
			$(".ac-ln-title-logo").css("color", "white");
			border.removeClass("ac-border");
		} else {
			scroll.removeClass("ac-lnhover1");
			$(".ac-ln-menu a").css("color", "black");
			$(".ac-ln-title-logo").css("color", "black");
			scroll.removeClass("ac-lnhover");
			border.addClass("ac-border");
		}
		//实现第一个视频播放效果；
		if(scrollTop >= 2278 && scrollTop <= 2600) {
			var vedio = $("#vedioMp4");
			var playbtn = $(".vedio-btn");
			text1.style.animation = "move1 0.7";
			text1.style.top = -50 + "px";
			var imgbtn = playbtn.children()[0];
			if(text1.style.top == -50 + "px") {
				$(".sticky").stop();
				$(".sticky").fadeOut("1000");
				btn.stop();
				btn.show("2000");
				if(imgbtn.className == "displaynone") {
					vedio[0].pause();
				} else {
					vedio[0].play();
					vedio[0].loop = "loop";
				}
				btnclick(playbtn);
			}
		} else if(scrollTop < 2278 || scrollTop > 2600) {
			var vedio = $("#vedioMp4");
			text1.style.animation = "move2 0.7s";
			text1.style.top = 90 + "px";
			if(text1.style.top == 90 + "px") {
				$(".sticky").stop();
				$(".sticky").fadeIn("1000");
				btn.fadeOut("1000");
				vedio[0].pause();
			}
		}
		// 第二个视频播放效果;
		var text2 = $(".video-text1")[0];
		var vedio2 = $(".vedioMP4-4");
		var playbtn2 = $(".vedio-btn1");
		if(scrollTop >= 7400 && scrollTop < 7900) {
			text2.style.animation = "move1 1s";
			text2.style.top = -50 + "px";
			var imgbtn = playbtn2.children()[0];
			if(text2.style.top == -50 + "px") {
				$(".sticky1").stop();
				$(".sticky1").fadeOut("1000");
				playbtn2.stop();
				playbtn2.show("2000");
				if(imgbtn.className == "displaynone") {
					vedio2[0].pause();
				} else {
					vedio2[0].play();
					vedio2[0].loop = "loop";
				}
				btnclick(playbtn2);
			}
		} else if(scrollTop < 6800 || scrollTop >= 7900) {
			text2.style.animation = "move2 0.7s";
			text2.style.top = 80 + "px";
			if(text2.style.top == 80 + "px") {
				$(".sticky1").stop();
				$(".sticky1").fadeIn("1000");
				playbtn2.fadeOut("1000");
				vedio2[0].pause();
			}
		}
		//第三个视频
		var text3 = $(".video-text2")[0];
		var vedio3 = $(".videoMP4-5");
		var playbtn3 = $(".vedio-btn2");
		if(scrollTop >= 9400 && scrollTop < 10100) {
			text3.style.animation = "move1 1s";
			text3.style.top = -50 + "px";
			var imgbtn = playbtn3.children()[0];
			if(text3.style.top == -50 + "px") {
				$(".sticky2").stop();
				$(".sticky2").fadeOut("1000");
				playbtn3.stop();
				playbtn3.show("2000");
				if(imgbtn.className == "displaynone") {
					vedio3[0].pause();
				} else {
					vedio3[0].play();
					vedio3[0].loop = "loop";
				}
				btnclick(playbtn3);
			}
		} else if(scrollTop < 9100 || scrollTop >= 10100) {
			text3.style.animation = "move2 0.7s";
			text3.style.top = 80 + "px";
			if(text3.style.top == 80 + "px") {
				$(".sticky2").stop();
				$(".sticky2").fadeIn("1000");
				playbtn3.fadeOut("1000");
				vedio3[0].pause();
			}
		}
		if(scrollTop > 6300) {
			$(".mediaobject-element")[0].play();
			var time;
			$(".mediaobject-element")[0].ontimeupdate=function(){
		    time=$(".mediaobject-element")[0].currentTime;	
				if(time==9.666667){
					$(".icon-replay").fadeIn(500);
				};
				$(".icon-replay").click(function(){
					$(".mediaobject-element")[0].play();
					$(".icon-replay").fadeOut(500);
				});
			}
		} else {
			$(".mediaobject-element")[0].autoplay = "";
		}

		function btnclick(a) {
			var vedio;
			$(a).on("click", "div", function() {
				vedio = $(this).parent().prev().prev().children();
				$(a).find("div").each(function(k, v) {
					v.setAttribute("index", k);
					v.removeAttribute("class");
				});
				$(this).addClass("displaynone");
				if(this.getAttribute("index") == 0) {
					vedio[0].pause();
				} else if(this.getAttribute("index") == 1) {
					vedio[0].play();
					vedio[0].loop = "loop";
				}
			});
		}

		var cartMove = $(".cart-move");
		$(".cart-list").on("click", ".cart-listitem", function() {

			$(".cart-list .cart-listitem").each(function(k, v) {
				v.setAttribute("index", k);
				$(v).removeClass("clickcolor");

			});
			if(this.getAttribute("index") == 1) {
				cartMove.addClass("cart-click1");
				$(this).addClass("clickcolor");
				$(".cart-move").css("left", "-460px");
			} else if(this.getAttribute("index") == 2) {
				cartMove.addClass("cart-click2");
				$(".cart-move").css("left", "-920px");
				$(this).addClass("clickcolor");
			} else if(this.getAttribute("index") == 0) {
				cartMove.addClass("cart-click3");
				$(".cart-move").css("left", "0");
				$(this).addClass("clickcolor");
			}
		});

	});
	//底下 的动画
	var a = 0;
	setInterval(function() {
		var lilist = $(".cart-list .cart-listitem");
		$(lilist).each(function(k, v) {
			$(v).removeClass("clickcolor");
		})
		var cartMove = $(".cart-move");
		cartMove[0].style.left = "" + (-460 * a) + "px";
		cartMove[0].style.transition = "left 0.5s linear";
		$(lilist[a]).addClass("clickcolor");
		a++;
		if(a > 2) {
			a = 0;
		}
	}, 3000);
	//自动播放的视频

})