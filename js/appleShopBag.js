$(function() {

	acountAllTotal();
	condition();
	acountSmTotal();
	delGoods();
	//设置修改商品的小计
	function acountSmTotal() {
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
			});
		});
	}

	//设置修改所添加商品的总计
	function acountAllTotal() {
		var cartItems = $("#cart-items .cart-item");
		var allTotal = 0;
		cartItems.each(function(k, v) {
			var smTotal = parseInt($(v).find(".product-price-display").html());
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
				} else {
					output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
				}

			}
			return output;
		}
	}

	//购物袋内容的显示情况判定
	function condition() {
		var currentIdSession = sessionStorage.getItem("session");
		var noSinginBag = $(".bag-notSignin");
		var boxBag = $(".bag-box");
		var noGoodsBag = $(".bag-no-goods");
		if(currentIdSession != "" && currentIdSession != null) {
			var cartItem = boxBag.find("#cart-items").children();
			noSinginBag.css("display", "none");
			var recommandItem = $(".recommand-list").children();
			//			console.log(recommandItem.length);
			if(recommandItem.length == 0) {
				$("#cart-recommendations").css("display", "none");
			} else {
				$("#cart-recommendations").css("display", "block");

			}
			//			console.log(cartItem.length);
			if(cartItem.length == 0) {
				boxBag.css("display", "none");
				noGoodsBag.css("display", "block");
			} else {
				boxBag.css("display", "block");
				noGoodsBag.css("display", "none");
			}
		} else {
			noSinginBag.css("display", "block");
			boxBag.css("display", "none");
			noGoodsBag.css("display", "none");
		}
	}

	//	设置商品的删除功能
	function delGoods() {
		$(".del-cart-item-link").each(function(k, v) {
			//		console.log(v);

			$(v).click(function() {
				var removeMask = $(this).parents(".cart-item").children(0);
				var cartItem = $(this).parents(".cart-item");
				removeMask.fadeIn();
				var currentId = $(this).get(0).id;
				console.log(currentId);
				console.log(currentId);
				$.ajax({
					type: "delete",
					url: "https://api.leancloud.cn/1.1/classes/userShopRecord/" + currentId,
					headers: {
						"X-LC-Id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
						"X-LC-Key": "CCxEKxRU9fKiSXM35dlTpGQC",
						"Content-Type": "application/json"
					},
					success: function() {
						console.log("删除成功");
					}
					//		data: '{"objectId:"'+'599ee1a8a0bb9f00588debd1'+'"}''

				});
				setTimeout(function() {
					cartItem.remove();
					condition();
				}, 2000);

			});
		});
	}

	//	请求创建推荐部分的商品信息
	create();

	function create() {
		//		获得所有商品
		$.ajax({
			type: "get",
			url: "https://api.leancloud.cn/1.1/classes/goodsDetail",
			headers: {
				"X-LC-Id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
				"X-LC-Key": "CCxEKxRU9fKiSXM35dlTpGQC",
				"Content-Type": "application/json"
			},
			success: function(data) {
				//			console.log(data);
				var currentUserId = sessionStorage.getItem("currentUserId");
				if(data.results.length > 0) {
					$("#cart-recommendations").css("display", "block");
				} else {
					$("#cart-recommendations").css("display", "none");

				}
				//			console.log(currentUserId);
				//				获得购物车里商品信息
				$.ajax({
					type: "get",
					url: "https://api.leancloud.cn/1.1/classes/userShopRecord",
					headers: {
						"x-avoscloud-application-id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
						"x-avoscloud-application-key": "CCxEKxRU9fKiSXM35dlTpGQC"
					},
					data: {
						where: '{"userId":{"__type":"Pointer","className":"_User","objectId":"' + currentUserId + '"}}',
						limit: 10,
						order: "updatedAt",
						include: "goodsId"

					},
					success: function(data2) {
						console.log(data);
						console.log(data2);
						//					console.log(data.results.length);
						console.log(data2.results.length);
						//					console.log(data.results[3].objectId);
						//					console.log(data2.results[1].goodsId.objectId);
						//					console.log(data.results[3].objectId != data2.results[1].goodsId.objectId);
						/*if(data2.results.length > 0) {
							$(".bag-box").css("display", "block");
							$("#cart-recommendations").css("display", "block");

						} else {
							$(".bag-box").css("display", "block");
							$("#cart-recommendations").css("display", "none");

						}*/
						condition();
						for(var n = 0; n < data.results.length; n++) {
							var equl = true;
							for(var m = 0; m < data2.results.length; m++) {
								//更新其修改权限
								/*$.ajax({
									type: "put",
									url: "https://leancloud.cn:443/1.1/classes/userShopRecord/" + data2.results[m].objectId,
									headers: {
										"X-LC-Id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
										"X-LC-Key": "CCxEKxRU9fKiSXM35dlTpGQC",
										"Content-Type": "application/json"
									},
									data: '{"ACL":{"*":{"read":"true","write":"false"}}}',
									success:function(){
										console.log("权限更新成功");
									}

								});*/
								//							console.log(data.results[n].objectId);
								//							console.log(data2.results[m].goodsId.objectId);
								if(data.results[n].objectId != data2.results[m].goodsId.objectId) {
									//								console.log(m);
									//								console.log(equl);
									equl = false;
								} else {
									equl = true;
									break;
								}

							}
							if(!equl) {
								addRecommandItem(data.results[n].imgSrcCart, data.results[n].goodsName, data.results[n].goodsPrice, data.results[n].objectId);
								addCart();
							}

						}

						for(var j = 0; j < data2.results.length; j++) {
							addItem(data2.results[j].goodsId.imgSrcCart, data2.results[j].goodsId.goodsName, data2.results[j].goodsId.goodsPrice, data2.results[j].goodsId.goodsNum, data2.results[j].objectId);
						}

					}

				});

			}

		});
	}

	//	addRecommandItem("img/cartImg/item01/APPLECARE-plus.jpg","iphone",233);
	//设置添加到推荐的函数
	function addRecommandItem(imgSrc, name, price, goodsId) {
		var recommmandList = $(".recommand-list")
		var recommandListItem = $("<li class='recommand-list-item'></li>")
		recommandListItem.appendTo(recommmandList);

		var itemGoodsLeft = $("<div class='item-goods-left'></div>")
		var itemGoodsImageWrapper = $("<div class='item-goods-image-wrapper'></div>")
		var a = $("<a href='javascript:;'></a>")
		var img = $("<img/>");
		img.get(0).src = imgSrc;
		img.appendTo(a);
		a.appendTo(itemGoodsImageWrapper);
		itemGoodsImageWrapper.appendTo(itemGoodsLeft);
		itemGoodsLeft.appendTo(recommandListItem);

		var itemGoodsDesc = $("<div class='item-goods-desc'></div>");
		itemGoodsDesc.appendTo(recommandListItem);

		var itemGoodsDescTitle = $("<div class='item-goods-desc-title'></div>")
		var a2 = $("<a href='#' class='item-goods-desc-title-link'></a>")
		a2.html(name);
		a2.appendTo(itemGoodsDescTitle);
		itemGoodsDescTitle.appendTo(itemGoodsDesc);

		var itemGoodsDescPrice = $("<div class='item-goods-desc-price'></div>");
		itemGoodsDescPrice.html("RMB&nbsp;" + price);
		itemGoodsDescPrice.appendTo(itemGoodsDesc);

		var a3 = $("<a href='javascript:;' class='addCart-Btn bgGradient' id='" + goodsId + "'>添加到购物袋</a>");
		a3.appendTo(itemGoodsDesc);

	}

	//	addItem("img/cartImg/item01/iphone6s-plus-rosegold-select-2015.jpg", "iphone", 222, "MKXL2FE/A");
	//设置加入到购物袋内的函数
	function addItem(imgSrc, goodsName, price, goodsNum, objectId) {
		$(".bag-box").css("display", "block");
		var cartItemsList = $("#cart-items");
		var cartItem = $("<li class='cart-item'></li>");
		cartItem.appendTo(cartItemsList);

		var removeMask = $("<div class='remove-mask'></div>");
		var cartProduct = $("<div class='cart-product'></div>");
		removeMask.appendTo(cartItem);
		cartProduct.appendTo(cartItem);

		var cartItemImageWrapper = $("<div class='cart-item-image-wrapper'></div>");
		var a1 = $("<a href='javascript:;'></a>");
		var img1 = $("<img class='cart-item-image'/>");
		img1.get(0).src = imgSrc;
		img1.appendTo(a1);
		a1.appendTo(cartItemImageWrapper);
		cartItemImageWrapper.appendTo(cartProduct);

		var productInfo = $("<div class='product-info'></div>");
		productInfo.appendTo(cartProduct);

		var productInfoDetail = $("<div class='product-info-detail'></div>");
		var productName = $("<div class='product-name'></div>");
		var productNameH2 = $("<h2 class='product-name-h2'></h2>");
		var a2 = $("<a href='#' class='product-name-link'></a>");
		a2.html(goodsName);
		a2.appendTo(productNameH2);
		productNameH2.appendTo(productName);
		productName.appendTo(productInfoDetail);
		productInfoDetail.appendTo(productInfo);

		var priceQuantityListUl = $("<ul class='price-quantity-list'></ul>");
		priceQuantityListUl.appendTo(productInfoDetail);

		var priceLi = $("<li class='price-quantity-item product-price'>RMB&nbsp;</li>");
		var span1 = $("<span class='product-price-display'></span>");
		span1.html(price);
		span1.appendTo(priceLi);
		priceLi.appendTo(priceQuantityListUl);

		var selectLi = $("<li class='price-quantity-item quantity-select'></li>");
		var input1 = $("<input type='text' name='quantity-select-input' id='quantity-select-input' class='quantity-input' value='1' min='0' max='999' maxlength='3'/>");
		input1.appendTo(selectLi);
		selectLi.appendTo(priceQuantityListUl);

		var smTotalLi = $("<li class='price-quantity-item quantity-price'>RMB&nbsp;</li>");
		var span2 = $("<span class='product-price-display'></span>");
		span2.html(price);
		span2.appendTo(smTotalLi);
		smTotalLi.appendTo(priceQuantityListUl);

		var deliveryDel = $("<div class='delivery-del clearFr'></div>");
		deliveryDel.appendTo(productInfo);
		var deliveryDate = $("<div class='delivery-date'>送达日期:</div>");
		var span3 = $("<span class='available-date'>有现货</span>");
		span3.appendTo(deliveryDate);
		deliveryDate.appendTo(deliveryDel);
		var delCartItem = $("<div class='del-cart-item'><a href='javascript:;' class='del-cart-item-link' id='" + objectId + "'>删除</a></div>");
		delCartItem.appendTo(deliveryDel);

		var partNumber = $("<div class='part-number clearFr'>编号:</div>");
		partNumber.appendTo(productInfo);
		var span4 = $("<span class='product-number'></span>");
		span4.html(goodsNum);
		span4.appendTo(partNumber);

		var gift = $("<div class='gift clearFr'></div>");
		gift.appendTo(productInfo);

		var itemGiftingGroup = $("<div class='item-gifting-group'></div>");
		itemGiftingGroup.appendTo(gift);
		var i = $("<i class='iconfont icon-gift'></i>");
		i.appendTo(itemGiftingGroup);
		var a3 = $("<a href='javascript:;' class='gift-btn-link'>显示礼品选项</a>");
		a3.appendTo(itemGiftingGroup);

		var giftOptionsUl = $("<ul class='gift-options'></ul>");
		giftOptionsUl.appendTo(itemGiftingGroup);

		var giftOptionsItemLi = $("<li class='gift-options-item'></li>");
		giftOptionsItemLi.appendTo(giftOptionsUl);
		var i2 = $("<i></i>在送货清单上添加礼品赠言-&nbsp;免费");
		i2.appendTo(giftOptionsItemLi);
		var msgBoard = $("<div class='msg-board'></div>");
		msgBoard.appendTo(giftOptionsItemLi);
		var p = $("<p class='placeholder-slot'></p>");
		var textArea = $("<textarea class='gift-msg-text' name='gift-msg-text' rows='' cols='' maxlength='225' placeholder='添加免费礼物留言'></textarea>")
		textArea.appendTo(p);
		p.appendTo(msgBoard);
		var masgOptionsGroup = $("<div class='masg-options-group'></div>");
		masgOptionsGroup.appendTo(msgBoard);
		var span5 = $("<span class='masg-options-cancel'><a href='javascript:;'>取消</a></span>");
		span5.appendTo(masgOptionsGroup);
		var span6 = $("<span class='parting-line'>|</span>");
		span6.appendTo(masgOptionsGroup);
		var span7 = $("<span class='masg-options-sure'><a href='javascript:;'>确认礼品包装</a></span>");
		span7.appendTo(masgOptionsGroup);
		condition();
		delGoods();
		acountSmTotal();
		acountAllTotal();

	}

	//	设置添加购物袋的点击事件
	function addCart() {
		//		console.log($(".addCart-Btn"));
		$(".addCart-Btn").each(function(k, v) {
			$(v).click(function() {
				//						console.log($(this).get(0).id);
				var goodsId = $(this).get(0).id;
				var currentUserId = sessionStorage.getItem("currentUserId");
				console.log(currentUserId);
				if(currentUserId) {
					$.ajax({
						type: "post",
						url: "https://leancloud.cn:443/1.1/classes/userShopRecord",
						headers: {
							"x-avoscloud-application-id": "UJ1jmC7juP5sEo59Hi0Ofjji-gzGzoHsz",
							"x-avoscloud-application-key": "CCxEKxRU9fKiSXM35dlTpGQC",
							"content-type": "application/json"
						},
						data: '{' + '"userId": {"__type": "Pointer","className": "_User","objectId":"' + currentUserId + '"},"goodsId": {"__type": "Pointer","className": "goodsDetail","objectId":"' + goodsId + '"}}',
						success: function(data) {
							console.log(data);
							setTimeout(function() {
								location.reload();
							}, 2000);
						}

					});
				}
			});
		});
	}

})