$(function() {
	$(".trigger1").click(function() {
		$(".detail1").slideToggle(800);
	});
	$(".trigger2").click(function() {
		$(".detail2").slideToggle(800);
	});
	$(".trigger3").click(function() {
		$(".detail3").slideToggle(800);
	});
	$(".trigger4").click(function() {
		$(".detail4").slideToggle(800);
	});
	$(".btn1").click(function() {
		$(".video1")[0].play();
	})
	$(".btn2").click(function() {
		$(".video2")[0].play();
	})
	$(".btn3").click(function() {
		$(".video3")[0].play();
	})
	$(".btn4").click(function() {
		$(".video4")[0].play();
	})
	$(".btn5").click(function() {
		$(".video5")[0].play();
	})
});