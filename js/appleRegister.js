$(function() {
	//	表单有效性验证
	$("#regForm").validate();

	//	设置#birthday悬浮效果
	var birthdayInput = $("#birthday");
	birthdayInput.mouseover(function() {
		this.placeholder = "yyyy年mm月dd日";
	}).focus(function() {
		this.placeholder = "yyyy年mm月dd日";
	});
	var regBox = document.querySelector(".reg-box");
	if(regBox.attachEvent) {
		regBox.attachEvent("onclick", function(event) {
			var target = event.target;
			if(target.id != "birthday") {
				birthdayInput.get(0).placeholder = "出生日期";
			} else {
				event.cancelBubble();
			}
		});
	} else {
		regBox.addEventListener("click", function(event) {
			var target = event.target;
			//			console.log(target);
			if(target.id != "birthday") {
				birthdayInput.get(0).placeholder = "出生日期";
			} else {
				event.stopPropagation();
			}
		}, false);

	}

	//	验证表单
	var flag = false;
	$("#regForm").submit(function() {
		var lastname = $("#name-last").val();
		var firstname = $("#name-first").val();
		var selectCountry = $("#homearea").val();
		var birthday = $("#birthday").val();
		var regEmail = $("#reg-email").val();
		var pwd = $("#pwd").val();
		var question01 = $("#question01").val();
		var answer01 = $("#answer01").val();
		var question01 = $("#question01").val();
		var answer01 = $("#answer01").val();
		var question03 = $("#question03").val();
		var answer03 = $("#answer03").val();
		var username = lastname + firstname;
		$.ajax({
			type: "post",
			url: "https://api.leancloud.cn/1.1/users",
			headers: {
				"X-LC-Id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
				"X-LC-Key": "CCxEKxRU9fKiSXM35dlTpGQC",
				"Content-Type": "application/json"
			},
			data: '{"realname":"' + username + '","lastname": "' + lastname + '","firstname": "' + firstname + '","homearea": "' + selectCountry + '","birthday": "' + birthday + '","username": "' + regEmail + '","password": "' + pwd + '","question01": "' + question01 + '","answer01": "' + answer01 + '","question01": "' + question01 + '","answer01": "' + answer01 + '","question03": "' + question03 + '","answer03": "' + answer03 + '"}'
		}).then(function(data) {
			console.log(data);
			console.log("注册成功");
		}).then(function(er) {
			var ret = errorAll.showError(er.responseText);
			console.log(ret);
		});

		return false;
	});

	var lastname = $("#name-last").val();
	var firstname = $("#name-first").val();
	var selectCountry = $("#homearea").val();
	var birthday = $("#birthday").val();
	var regEmail = $("#reg-email").val();
	var pwd = $("#pwd").val();
	var comfirmPwd = $("#comfirmPwd").val();

	var answer01 = $("#answer01").val();
	var answer02 = $("#answer02").val();
	var answer03 = $("#answer03").val();
	var username = lastname + firstname;
	$("#name-last").focus(function() {
		if(lastname == "") {
			$("#name-last").addClass("error");
			$("#name-last-error").fadeIn();
		}
	}).focusout(function() {
		$("#name-last").removeClass("error");
		$("#name-last-error").fadeOut();
	});

	$("#name-first").focus(function() {
		if(firstname == "") {
			$("#name-first").addClass("error");
			$("#name-first-error").fadeIn();
		}
	}).focusout(function() {
		$("#name-first").removeClass("error");
		$("#name-first-error").fadeOut();
	});

	$("#birthday").focus(function() {
		if(firstname == "") {
			$("#birthday").addClass("error");
			$("#birthday-error").fadeIn();
		}
	}).focusout(function() {
		$("#birthday").removeClass("error");
		$("#birthday-error").fadeOut();
	});

	$("#reg-email").focus(function() {
		if(regEmail == "") {
			$("#reg-email").addClass("error");
			$("#reg-email-error2").fadeIn();
		}
	}).focusout(function() {
		$("#reg-email").removeClass("error");
		$("#reg-email-error2").fadeOut();
	});

	$("#pwd").focus(function() {
		if(firstname == "") {
			$("#pwd").addClass("error");
			$("#pwd-error").fadeIn();
		}
	}).focusout(function() {
		$("#pwd").removeClass("error");
		$("#pwd-error").fadeOut();
	});

	$("#comfirmPwd").focus(function() {
		if(comfirmPwd == "") {
			$("comfirmPwd").addClass("error");
			$("#comfirmPwd-error").fadeIn();
		}
	}).focusout(function() {
		$("#comfirmPwd").removeClass("error");
		$("#comfirmPwd-error").fadeOut();
	});

	$("#answer01").focus(function() {
		var question01 = $("#question01").val();
		//		var newQuestion = $("#question01").val();
		if(question01 == "安全提示问题1") {
			$("#question01-error").fadeIn();
			//			console.log(question01);

		} else {
			//			console.log("new" + question01);
			if(answer01 == "" && question01 != "安全提示问题1") {
				$("#question01-error").fadeOut();
				$("#answer01-error").fadeIn();
			}

		}
	}).focusout(function() {
		$("#answer01-error").fadeOut();

	});

	
	$("#answer02").focus(function() {
		var question02 = $("#question01").val();
		//		var newQuestion = $("#question01").val();
		if(question02 == "安全提示问题1") {
			$("#question02-error").fadeIn();
			//			console.log(question01);

		} else {
			//			console.log("new" + question01);
			if(answer01 == "" && question01 != "安全提示问题1") {
				$("#question01-error").fadeOut();
				$("#answer01-error").fadeIn();
			}

		}
	}).focusout(function() {
		$("#answer01-error").fadeOut();

	});

	//		([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))

	//	设置#itunes,#news的点击事件
	var itunes = $("#itunes")
	var news = $("#news")
	itunes.click(function() {
		if(itunes.attr("isClick")) {
			itunes.removeAttr("isClick");
			$(this).parent().find("label").css("background", "#0070C9");
			$(this).parent().find("label:after").css("display", "block");
			$(this).parent().find("label").css("box-shadow", "1px 1px 1px #FFFFFC,1px -1px 1px #FFFFFC,-1px 1px 1px #FFFFFC,-1px -1px 1px #FFFFFC");

		} else {
			itunes.attr("isClick", "true");
			$(this).parent().find("label").css("background", "#FFFFFC");
			$(this).parent().find("label:after").css("display", "none");
			$(this).parent().find("label").css("box-shadow", "1px 1px 1px #0070C9,1px -1px 1px #0070C9,-1px 1px 1px #0070C9,-1px -1px 1px #0070C9");

		}
	});
	news.click(function() {
		if(news.attr("isClick")) {
			//点过了
			news.removeAttr("isClick");
			$(this).parent().find("label").css("background", "#0070C9");
			$(this).parent().find("label:after").css("display", "block");
			$(this).parent().find("label").css("box-shadow", "1px 1px 1px #FFFFFC,1px -1px 1px #FFFFFC,-1px 1px 1px #FFFFFC,-1px -1px 1px #FFFFFC");

		} else {
			news.attr("isClick", "true");
			$(this).parent().find("label").css("background", "#FFFFFC");
			$(this).parent().find("label:after").css("display", "none");
			$(this).parent().find("label").css("box-shadow", "1px 1px 1px #0070C9,1px -1px 1px #0070C9,-1px 1px 1px #0070C9,-1px -1px 1px #0070C9");

		}
	});

	//设置.birthday-warn的点击事件
	$(".birthday-warn").click(function() {
		$(".birthday-warn-content").fadeToggle(200);
	});

})