$(function() {
	//设置修改商品的小计
	$(".quantity-input").each(function(k, v) {
		$(v).change(function() {
			var selectInput = $(this);
			var num = parseInt($(this).val());
			var priceQuantityList = selectInput.parent().parent();
			var productPriceArea = priceQuantityList.children(0).children(0);
			var quantityPrice = priceQuantityList.children(2).children(0);
			var productPrice = parseInt(productPriceArea.html());
			var productNum = parseInt($(this).parents(".product-info").children(".part-number").children(".product-number").html());
			var smTotal = num * productPrice;
			quantityPrice.html(smTotal);
			acountAllTotal();
			$.ajax({
				type: "get",
				url: "https://api.leancloud.cn/1.1/classes/goodsDetail",
				headers: {
					"X-LC-Id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
					"X-LC-Key": "CCxEKxRU9fKiSXM35dlTpGQC",
					"Content-Type": "application/json"
				},
			}).then(function(data) {
				/*console.log(data);
				console.log(data.results.length);
				for(var i = 0; i < data.results.length; i++) {
					var index 
					console.log(data.results[i].goodsNum);
					console.log(productNum);
					if(data.results[i].goodsNum == productNum) {
						index = i;

					}
					console.log(index);
					var price = data.results[index].goodsPrice;
					console.log(price);

				}*/

			}).then(function(er) {
				//				var ret = errorAll.showError(er.responseText);
				//				console.log(ret);
			});

		});
	});

	//设置修改所添加商品的总计
	acountAllTotal();

	function acountAllTotal() {
		var cartItems = $("#cart-items .cart-item");
		var allTotal = 0;
		cartItems.each(function(k, v) {
			var smTotal = parseInt($(v).find(".quantity-price-display").html());
			//			console.log(smTotal);
			allTotal += smTotal;
		});

		$("#allTotal").html(formatMoney(allTotal));
	}

	//格式化金额
	function formatMoney(number) {
		number = number.toString();
		if(number.length <= 3) {
			return(number == '' ? '0' : number);
		} else {
			var mod = number.length % 3;

			//			6478,4,1
			var output = (mod == 0 ? '' : (number.substring(0, mod)));
			//			output = 6
			//			floor(x):取不大于x的最大整数
			for(i = 0; i < Math.floor(number.length / 3); i++) {
				if((mod == 0) && (i == 0)) {
					output += number.substring(mod + 3 * i, mod + 3 * i + 3);
				}
				else {
					output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
				}

			}
			return output;
		}
	}
	//	设置商品的删除功能
	$(".del-cart-item-link").each(function(k, v) {
		//		console.log(v);
		$(v).click(function() {
			var removeMask = $(this).parents(".cart-item").children(0);
			var cartItem = $(this).parents(".cart-item");
			removeMask.fadeIn();
			setTimeout(function() {
				cartItem.remove();
			}, 2000);

		});
	});

})