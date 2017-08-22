$(function() {
	//	设置.remember-me-label的点击事件
	var rememberMe = $(".signin-remember-pwd");
	rememberMe.click(function() {
		console.log(rememberMe.attr("isClick"));
		if(rememberMe.attr("isClick")) {
			rememberMe.removeAttr("isClick");
			$(this).eq(0).find("label").css("background", "#FFFFFF");
			$(this).eq(0).find("label:after").css("display", "none");

		} else {
			rememberMe.attr("isClick", "true");
			$(this).eq(0).find("label").css("background", "#0070C9");
			$(this).eq(0).find("label:after").css("display", "block");
		}

	})
})