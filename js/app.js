$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$('.ryustill').hide();
		$('.ryuready').show();
	})
	.mouseleave(function() {
		$('.ryustill').show();
		$('.ryuready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryuready').hide();
		$('.ryuthrowing').show();
		$('.hadouken').finish().show().animate(
			{'left': '400px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-150px');
			}
		);
	})
	.mouseup(function(){
		$('.ryuready').show();
		$('.ryuthrowing').hide();
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};


$(document).keydown(function(e) {
		if(e.which==88) {
	$('.ryuthrowing').hide();
	$('.ryustill').hide();
	$('.ryuready').hide();
	$('.ryucool').show();
}});




$(document).keyup(function(){
	$('.ryucool').hide();
	if ($('.ryu').hover()) {
	$('.ryuready').show();
	}
	else {$('.ryustill').show();
	};
});

