$(function() {
	var ryuStatus = 'still',
		isHovering = false,
		$ryu = $('.ryu'),
		$ryustill = $('.ryustill'), 
		$ryuready = $('.ryuready'),
		$ryuthrowing = $('.ryuthrowing'),
		$ryucool = $('.ryucool'); 
	
	// readying
	$ryu.mouseenter(function(){
		isHovering = true;
		if(ryuStatus != 'still') return;
		clear();
		$ryuready.show();
		ryuStatus = 'ready';
	})
	
	// stilling
	.mouseleave(function() {
		isHovering = false;
		if(ryuStatus != 'ready') return;
		clear();
		$ryustill.show();
		ryuStatus = 'still';
	})
	// throwing
	.mousedown(function() {
		if(ryuStatus != 'ready') return;
		clear();
		$ryuthrowing.show();
		playHadouken();
		$('.hadouken').finish().show().animate(	//Animate hadouken
			{'left': '400px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-150px');
			}
		);
		ryuStatus = 'throwing';
	})
	// readying
	.mouseup(function(){
		if(ryuStatus != 'throwing') return;
		clear();
		$ryuready.show();
		ryuStatus = 'ready';
	});

	// cooling
	$(document).keydown(function(e) {
		if(e.which==88) {
			clear();
			$ryucool.show();
			ryuStatus = 'cool';
		}
	});

	// stilling
	$(document).keyup(function(){
		clear();
		if (isHovering) {
			$ryuready.show();
			ryuStatus = 'ready';
		}
		else {
			$ryustill.show();
			ryuStatus = 'still';
		}
	});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

function clear(){
		$ryustill.hide();
		$ryuready.hide();
		$ryuthrowing.hide();
		$ryucool.hide();
	}

});