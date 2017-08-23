$(function() {
	var productImg=$(".as-producttile-img");
	var newProductContain=$(".newProductContain");
	var productName=$(".as-producttile-title");
	var productPrice=$(".as-producttile-price");
	var productStyle=$(".as-producttile-style");
	$.ajax({
		type: "get",
		url: "https://api.leancloud.cn/1.1/classes/productDetail",
		headers: {
			"X-LC-Id": "VdO0YQ2YDMnuRzx3pMA32O0z-gzGzoHsz",
			"X-LC-Key": "uQq9Mr1SVWbzb8yUFKe1H5jq,master",
			"Content-Type": "application/json"
		}
	}).then(function(data) {
       for(var i=0;i<productImg.length;i++){
          productImg[i].innerHTML=data.results[i].productImg;
          productName[i].innerHTML=data.results[i].productName;
          productPrice[i].innerHTML=data.results[i].productPrice;
          productStyle[i].innerHTML=data.results[i].ProductLittle;
       }
	}, function(er) {
		console.log(er);
	});
	$(".priceASC").click(function(){
		$.ajax({
		type: "get",
		url: "https://api.leancloud.cn/1.1/classes/productDetailASC",
		headers: {
			"X-LC-Id": "VdO0YQ2YDMnuRzx3pMA32O0z-gzGzoHsz",
			"X-LC-Key": "uQq9Mr1SVWbzb8yUFKe1H5jq,master",
			"Content-Type": "application/json"
		}
	}).then(function(data) {
       for(var i=0;i<productImg.length;i++){
          productImg[i].innerHTML=data.results[i].productImg;
          productName[i].innerHTML=data.results[i].productName;
          productPrice[i].innerHTML=data.results[i].productPrice;
          productStyle[i].innerHTML=data.results[i].ProductLittle;
       }
       $(".as-sort-drawer").css("display","none");
	}, function(er) {
		console.log(er);
	});
	});
	$(".priceDESC").click(function(){
		$.ajax({
		type: "get",
		url: "https://api.leancloud.cn/1.1/classes/productDetailDESC",
		headers: {
			"X-LC-Id": "VdO0YQ2YDMnuRzx3pMA32O0z-gzGzoHsz",
			"X-LC-Key": "uQq9Mr1SVWbzb8yUFKe1H5jq,master",
			"Content-Type": "application/json"
		}
	}).then(function(data) {
       for(var i=0;i<productImg.length;i++){
          productImg[i].innerHTML=data.results[i].productImg;
          productName[i].innerHTML=data.results[i].productName;
          productPrice[i].innerHTML=data.results[i].productPrice;
          productStyle[i].innerHTML=data.results[i].ProductLittle;
       }
       $(".as-sort-drawer").css("display","none");
	}, function(er) {
		console.log(er);
	});
	});
});