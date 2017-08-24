$(function() {
	//	var User = AV.Object.extend("_User");
	//	var user = new User();
	var currentIdSession = sessionStorage.getItem("session");
	if(currentIdSession != "" && currentIdSession != null) {
		$.ajax({
			url: "https://api.leancloud.cn/1.1/users/me",
			headers: {
				"X-LC-Id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
				"X-LC-Key": "CCxEKxRU9fKiSXM35dlTpGQC",
				"X-LC-Session": currentIdSession
			},
		}).then(function(data) {
//			console.log(data);
			var lastname = data.lastname;
			var signIn = $(".bagview-nav-link-signIn");
			signIn.html("注销&nbsp;" + lastname);
			signIn.get(0).href = "javascript:;";
			signIn.click(function() {
				sessionStorage.removeItem("session");
				//				signIn.get(0).href = "login.html";
				location.reload(function() {
					var signIn = $(".bagview-nav-link-signIn");
					signIn.html("登录");
					signIn.get(0).href = "login.html";
				});

			});
			//		console.log(realname);

		}).then(function(er) {

			//		var ret = errorAll.showError(er.responseText);
			//		console.log(ret);
		});
	}

	/*var APP_ID = "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz";
	var APP_KEY = "CCxEKxRU9fKiSXM35dlTpGQC";
	AV.init({
		appId: APP_ID,
		appKey: APP_KEY
	}) ;*/

})