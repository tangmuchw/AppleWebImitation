//			创建一个可在 cookie 变量中存储访问者姓名的函数
function setCookie(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);

	//				toGMTString() 方法可根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果，差8个小时。
	//				escape(string) 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。s
	document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires =" + exdate.toGMTString());

}
//			创建另一个函数来检查是否已设置cookie:
function getCookie(c_name) {
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		c_end = document.cookie.indexOf(";", c_start);
		//					console.log(document.cookie.length);
		//					console.log(c_start);0
		//					console.log(c_end);12
		if(c_start != -1) { //表示存在
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			//						indexOf(searchvalue,fromindex)
			//						searchvalue 必需。 规定需检索的字符串值。
			//						romindex 可选的整数参数。 规定在字符串中开始检索的位置。 它的合法取值是 0 到 stringObject.length - 1。 如省略该参数， 则将从字符串的首字符开始检索。
			if(c_end == -1) {
				c_end = document.cookie.length;
			}
			//						console.log(c_start);5
			//						console.log(c_end);17
			return unescape(document.cookie.substring(c_start, c_end));

		}

	}
	return "";
}