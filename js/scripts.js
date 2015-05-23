// My Scripts

// #mep_0 = 

var click = 0;

var player = $('video').mediaelementplayer({
	alwaysShowControls: false,
	features: []
});


$('#mep_0').addClass('hide');


$('#channel').click( 
	function () {
		player[0].pause();

		$('#mep_0').addClass('hide');
		$('#mep_1').removeClass('hide');
		player[1].play();

		$('#dial').removeClass('dial' + click);
		click++;
		$('#dial').addClass('dial' + click);
		

			if (click == 4) {
		$('#mep_1').addClass('hide');
		$('#mep_0').removeClass('hide');
				player[0].play();
				click = 0;
				$('#dial').removeClass('dial4');

			}


			console.log('dial' + click);
	}
);

$('#channel-1').click(
	function() {
		player[0].pause();

		$('#dial').removeClass('dial' + click);
		click = 1;
		$('#dial').addClass('dial' + click);
		$('.mejs-mediaelement #trailer').addClass('hide');
		$('.mejs-mediaelement #static').removeClass('hide');
		player[1].play();
	}
);
$('#channel-2').click(
	function() {
		player[0].pause();

		$('#dial').removeClass('dial' + click);
		click = 2;
		$('#dial').addClass('dial' + click);
		$('.mejs-mediaelement #trailer').addClass('hide');
		$('.mejs-mediaelement #static').removeClass('hide');
		player[1].play();
	}
);
$('#channel-3').click(
	function() {
		player[0].pause();

		$('#dial').removeClass('dial' + click);
		click = 3;
		$('#dial').addClass('dial' + click);
		$('.mejs-mediaelement #trailer').addClass('hide');
		$('.mejs-mediaelement #static').removeClass('hide');
		player[1].play();
	}
);

$('#channel-4').click(
	function() {
		$('#dial').removeClass('dial' + click);
		click = 0;
		$('.mejs-mediaelement #static').addClass('hide');
		$('.mejs-mediaelement #trailer').removeClass('hide');
		player[0].play();

	}


);

