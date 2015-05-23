// My Scripts

// #mep_0 = #trailer
// #mep_1 = #static

var click = 0;

var player = $('video').mediaelementplayer({
	alwaysShowControls: false,
	features: [],
	loop: true
});


$('#mep_0').addClass('hide');
player[1].play();

$('#channel').click( 
	function () {
		player[0].pause();
		$('#instruct').removeClass('hide');
		$('#mep_0').addClass('hide');
		$('#mep_1').removeClass('hide');
		player[1].play();

		$('#dial').removeClass('dial' + click);
		click++;
		$('#dial').addClass('dial' + click);
		
		if (click == 2) {
			$('#mep_1').addClass('hide');
			$('#instruct').addClass('hide');
			$('#mep_0').removeClass('hide');
			player[0].play();
		}


		if (click == 4) {
			$('#mep_0').addClass('hide');
			$('#mep_1').removeClass('hide');
			click = 0;
			$('#dial').removeClass('dial4');

		}


			console.log('dial' + click);
	}
);

$('#channel-1').click(
	function() {
		$('#instruct').removeClass('hide');
		$('#dial').removeClass('dial' + click);
		click = 0;
		$('#dial').addClass('dial' + click);
		$('#mep_0').addClass('hide');
		$('#mep_1').removeClass('hide');
		player[1].play();
	}
);
$('#channel-2').click(
	function() {
		$('#instruct').removeClass('hide');
		$('#dial').removeClass('dial' + click);
		click = 1;
		$('#dial').addClass('dial' + click);
		$('#mep_0').addClass('hide');
		$('#mep_1').removeClass('hide');
		player[1].play();
	}
);
$('#channel-3').click(
	function() {		
		$('#instruct').addClass('hide');
		$('#dial').removeClass('dial' + click);
		click = 2;
		$('#dial').addClass('dial' + click);
		$('#mep_1').addClass('hide');
		$('#mep_0').removeClass('hide');
		player[0].play();
	}
);

$('#channel-4').click(
	function() {
		$('#instruct').removeClass('hide');
		$('#dial').removeClass('dial' + click);
		click = 3;
		$('#dial').addClass('dial' + click);
		$('#mep_0').addClass('hide');
		$('#mep_1').removeClass('hide');
		player[1].play();

	}


);

