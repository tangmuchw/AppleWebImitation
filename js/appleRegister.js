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
			}
		});
	} else {
		regBox.addEventListener("click", function(event) {
			var target = event.target;
			console.log(target);
			if(target.id != "birthday") {
				birthdayInput.get(0).placeholder = "出生日期";
			}
		}, false);

	}

	$("#regForm").submit(function() {
		var lastname = $("#name-last").val();
		var firstname = $("#name-first").val();
		var selectCountry = $("#homearea").val();
		var birthday = $("#birthday").val();
		var regEmail = $("#reg-email").val();
		var pwd = $("#pwd").val();
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
			//			data: '{"username":"' + username + '","lastname": "' + lastname + '","firstname": "' + firstname + '","homearea": "' + selectCountry + '","birthday": "' + birthday + '","email": "' + regEmail + '","password": "' + pwd + '"}'
			//			data: '{"eamil":"' + email + '","username": "' + username + '","password": "' + pwd + '"}'

		}).then(function(data) {
			console.log(data);
			console.log("注册成功");
		}).then(function(er) {
			var ret = errorAll.showError(er.responseText);
			console.log(ret);
		});

		return false;
	});

	//	设置.row-update label的点击事件
	var rowUpdate = $(".row-update");
	rowUpdate.click(function() {
		console.log(rowUpdate.attr("isClick"))
		if(rowUpdate.attr("isClick")) {
			rowUpdate.removeAttr("isClick");
			$(this).find("label").css("background", "#0070C9");
			$(this).find("label:after").css("display", "block");

		} else {
			rowUpdate.attr("isClick", "true");
			$(this).find("label").css("background", "#FFFFFC");
			$(this).find("label:after").css("display", "none");
		}

	})

})