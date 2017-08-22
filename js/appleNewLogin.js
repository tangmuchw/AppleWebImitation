$(function() {
	//	设置.remember-me-label的点击事件
	var rememberMe = $("#remember-me");
	rememberMe.click(function() {
		//		console.log(rememberMe.attr("isClick"));
		if(rememberMe.attr("isClick")) {
			rememberMe.removeAttr("isClick");
			$(".remember-me-label").css("background", "#FFFFFF");
			var accountID = $("#account-ID").val();
			var accountPwd = $("#account-pwd").val();
			setCookie(accountID, accountPwd, -60);

		} else {
			rememberMe.attr("isClick", "true");
			$(".remember-me-label").css("background", "#0070C9");
			var accountID = $("#account-ID").val();
			var accountPwd = $("#account-pwd").val();
			setCookie(accountID, accountPwd, 24 * 3600);
			console.log(getCookie(accountID));

		}

	});

	$("#account-ID").focusout(function() {
		var accountID = $("#account-ID").val();
		var accountPwd = getCookie(accountID);
		$("#account-pwd").val(accountPwd);
	});

	//	登陆操作

	$("#signin-btn").click(function() {
		var accountID = $("#account-ID").val();
		var accountPwd = $("#account-pwd").val();
		$.ajax({
			type: "post",
			url: "https://api.leancloud.cn/1.1/login",
			headers: {
				"Content-Type": "application/json",
				"X-LC-Id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
				"X-LC-Key": "CCxEKxRU9fKiSXM35dlTpGQC"
			},
			data: '{"username":"' + accountID + '","password":"' + accountPwd + '"}',
			success: function(data) {
				console.log(data);
				console.log("登录成功");
				//				location.href = 'index.html';
			},
			error: function(er) {
				var ret = errorAll.showError(er.responseText);
				console.log(ret);
			}
		});
	});

})