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
	//验证用户信息
	flag = true;

	var selectCountry = $("#homearea").val();
	var answer01 = $("#answer01").val();
	var answer02 = $("#answer02").val();
	var answer03 = $("#answer03").val();
	$("#name-last").focus(function() {
		var lastname = $("#name-last").val();
		if(lastname == "") {
			$("#name-last").addClass("error");
			$("#name-last-error").fadeIn();
			flag = false;
		}
	}).focusout(function() {
		$("#name-last").removeClass("error");
		$("#name-last-error").fadeOut();
		flag = true;

	});

	$("#name-first").focus(function() {
		var firstname = $("#name-first").val();
		if(firstname == "") {
			$("#name-first").addClass("error");
			$("#name-first-error").fadeIn();
			flag = false;

		}
	}).focusout(function() {
		$("#name-first").removeClass("error");
		$("#name-first-error").fadeOut();
		flag = true;

	});

	$("#birthday").focus(function() {
		var birthday = $("#birthday").val();
		if(birthday == "") {
			$("#birthday").addClass("error");
			$("#birthday-error").fadeIn();
			flag = false;

		}
	}).focusout(function() {
		$("#birthday").removeClass("error");
		$("#birthday-error").fadeOut();
		flag = true;

	});

	$("#reg-email").focus(function() {
		var regEmail = $("#reg-email").val();

		if(regEmail == "") {
			$("#reg-email").addClass("error");
			$("#reg-email-error2").fadeIn();
			flag = false;
		}
	}).focusout(function() {
		$("#reg-email").removeClass("error");
		$("#reg-email-error2").fadeOut();
		flag = true;
		var regEmail = $("#reg-email").val();
		$.ajax({
			type: "get",
			url: "https://api.leancloud.cn/1.1/users/55a47496e4b05001a7732c5f",
			headers: {
				"X-LC-Id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
				"X-LC-Key": "CCxEKxRU9fKiSXM35dlTpGQC"
			},
			data: '{"username":"' + regEmail + '"}'
		}).then(function(data) {
			console.log(data);

		}).then(function(er) {
			var ret = errorAll.showError(er.responseText.code);
			console.log(ret);
		});

	});

	$("#pwd").focus(function() {
		var pwd = $("#pwd").val();
		if(pwd == "") {
			$("#pwd").addClass("error");
			$("#pwd-error").fadeIn();
			flag = false;

		} else {
			$("#pwd").removeClass("error");
			$("#pwd-error").fadeOut();
			flag = true;

		}
	}).focusout(function() {
		var pwd = $("#pwd").val();
		if(pwd.length < 9 && pwd != "") {
			$("#pwd").addClass("error");
			$("#pwd-error").html("密码少于九位");
			$("#pwd-error").fadeIn();
			flag = false;

		} else {
			$("#pwd").removeClass("error");
			$("#pwd-error").html("请输入密码");
			$("#pwd-error").fadeOut();
			flag = true;

		}

	});

	$("#comfirmPwd").focus(function() {
		var pwd = $("#pwd").val();
		var comfirmPwd = $("#comfirmPwd").val();
		if(comfirmPwd == "" && pwd != "" && pwd.length >= 9) {
			$("comfirmPwd").addClass("error");
			$("#comfirmPwd-error").fadeIn();
			flag = false;

		} else if(pwd == "") {
			$("#pwd").addClass("error");
			$("#pwd-error").fadeIn();
			flag = false;

		} else {
			$("#comfirmPwd").removeClass("error");
			$("#comfirmPwd-error").fadeOut();
			flag = true;

		}
	}).focusout(function() {
		var pwd = $("#pwd").val();
		var comfirmPwd = $("#comfirmPwd").val();
		if(pwd != comfirmPwd && pwd.length >= 9) {
			$("comfirmPwd").addClass("error");
			$("#comfirmPwd-error").html("两次密码不一致");
			$("#comfirmPwd-error").fadeIn();
			flag = false;

		} else {
			$("#comfirmPwd").removeClass("error");
			$("#comfirmPwd-error").html("确认您的密码");
			$("#comfirmPwd-error").fadeOut();
			flag = true;

		}
	});

	$("#answer01").focus(function() {
		var pwd = $("#pwd").val();
		var comfirmPwd = $("#comfirmPwd").val();
		var question01 = $("#question01").val();
		if(pwd != comfirmPwd) {
			$("comfirmPwd").addClass("error");
			$("#comfirmPwd-error").html("两次密码不一致");
			$("#comfirmPwd-error").fadeIn();
			flag = false;

		} else if(question01 == "安全提示问题1") {
			$("#question01-error").fadeIn();
			flag = false;

			//			console.log(question01);

		} else {
			//			console.log("new" + question01);
			if(answer01 == "" && question01 != "安全提示问题1") {
				$("#question01-error").fadeOut();
				$("#answer01-error").fadeIn();
				flag = false;

			}

		}
	}).focusout(function() {
		$("#answer01-error").fadeOut();
		$("#question01-error").fadeOut();
		flag = true;

	});

	$("#answer02").focus(function() {
		var question02 = $("#question02").val();
		//		var newQuestion = $("#question01").val();
		if(question02 == "安全提示问题2") {
			$("#question02-error").fadeIn();
			flag = false;

			//			console.log(question01);

		} else {
			//			console.log("new" + question01);
			if(answer02 == "" && question02 != "安全提示问题1") {
				$("#question02-error").fadeOut();
				$("#answer02-error").fadeIn();
				flag = false;

			}

		}
	}).focusout(function() {
		$("#answer02-error").fadeOut();
		$("#question02-error").fadeOut();
		flag = true;

	});

	$("#answer03").focus(function() {
		var question03 = $("#question03").val();
		if(question03 == "安全提示问题3") {
			$("#question03-error").fadeIn();
			flag = false;
		} else {
			if(answer03 == "" && question03 != "安全提示问题3") {
				$("#question03-error").fadeOut();
				$("#answer03-error").fadeIn();
				flag = false;
			}

		}
	}).focusout(function() {
		$("#answer03-error").fadeOut();
		$("#question03-error").fadeOut();
		flag = true;

	});

	$("#code").focus(function() {
		var code = $("#code").val();
		if(code == "") {
			$("#code-error").html("请输入您看到或听到的字符以继续");
			$("#code-error").addClass("error");
			$("#code-error").fadeIn();
			flag = false;
		} else {
			$("#code-error").removeClass("error");
			$("#code-error").fadeOut();
		}
	}).focusout(function() {
		var code = $("#code").val();
		if(code != "3N1A" && code != "") {
			$("#code-error").html("键入的值不正确");
			$("#code-error").addClass("error");
			$("#code-error").fadeIn();
			flag = false;
		} else if(code == "") {
			$("#code-error").html("请输入您看到或听到的字符以继续");
			$("#code-error").addClass("error");
			$("#code-error").fadeIn();
			flag = false;
		} else {
			$("#code-error").html("请输入您看到或听到的字符以继续");
			$("#code-error").removeClass("error");
			$("#code-error").fadeOut();
			flag = true;
		}

	});

	//	提交用户信息
	$("#continue-btn").click(function() {
		var lastname = $("#name-last").val();
		var firstname = $("#name-first").val();
		var selectCountry = $("#homearea").val();
		var birthday = $("#birthday").val();
		var regEmail = $("#reg-email").val();
		var pwd = $("#pwd").val();
		var comfirmPwd = $("#comfirmPwd").val();
		var question01 = $("#question01").val();
		var answer01 = $("#answer01").val();
		var question02 = $("#question02").val();
		var answer02 = $("#answer02").val();
		var question03 = $("#question03").val();
		var answer03 = $("#answer03").val();
		var code = $("#code").val();
		//		console.log(flag);
		if(regEmail == "" && lastname == "" && firstname == "" && birthday == "" && pwd == "" && comfirmPwd == "" && pwd == "" && answer01 == "" && answer02 == "" && answer03 == "" && code == "") {
			$("#name-last").addClass("error");
			$("#name-first").addClass("error");
			$("#birthday").addClass("error");
			$("#pwd").addClass("error");
			$("#comfirmPwd").addClass("error");
			$("#answer01").addClass("error");
			$("#answer02").addClass("error");
			$("#answer03").addClass("error");
			$("#reg-email").addClass("error");
			$("#code").addClass("error");
			$("#reg-email-error2").fadeIn();
			setTimeout(function() {
				if(lastname == "") {
					$("#name-last").addClass("error");
					$("#name-last-error").fadeIn();
				}

			}, 2000);
			setTimeout(function() {
				if(firstname == "") {
					$("#name-first").addClass("error");
					$("#name-first-error").fadeIn();
				}
			}, 3000);
			setTimeout(function() {
				$("#name-last-error").fadeOut();
				$("#name-first-error").fadeOut();

			}, 1000);
			flag = false;
		}
		//		console.log(flag);

		if(flag) {
			var lastname = $("#name-last").val();
			var firstname = $("#name-first").val();
			var selectCountry = $("#homearea").val();
			var birthday = $("#birthday").val();
			var regEmail = $("#reg-email").val();
			var pwd = $("#pwd").val();
			var comfirmPwd = $("#comfirmPwd").val();
			var question01 = $("#question01").val();
			var answer01 = $("#answer01").val();
			var question02 = $("#question02").val();
			var answer02 = $("#answer02").val();
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
				data: '{"realname":"' + username + '","lastname": "' + lastname + '","firstname": "' + firstname + '","homearea": "' + selectCountry + '","birthday": "' + birthday + '","username": "' + regEmail + '","password": "' + pwd + '","question01": "' + question01 + '","answer01": "' + answer01 + '","question02": "' + question02 + '","answer02": "' + answer02 + '","question03": "' + question03 + '","answer03": "' + answer03 + '"}'
			}).then(function(data) {
				//				console.log(data);
				//				console.log("注册成功");
				$("#response-erro").html("注册成功！请等待跳转");
				$(".spinner").css("display", "block");
				setTimeout(function() {
					location.href = 'appleNewLogin.html';
				}, 4000);
			}).then(function(er) {
				var ret = errorAll.showError(er.responseText);
				$("#response-erro").html(ret);
				$(".spinner").css("display", "none");
			});
		}
		return flag;
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