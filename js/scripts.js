// My Scripts

var click = 0;

var player = $('video').mediaelementplayer();
		
$('#static').hide();

$('#channel').click( 
	function () {
		player[0].stop();
		$('#static').show();
		$('#trailer').hide();
		$('#dial').removeClass('dial' + click);
		click++;
		player[1].play;
		$('#dial').addClass('dial' + click);
		

			if (click == 4) {
				$('#static').hide();
				$('#trailer').show();
				player[0].play();
				click = 0;
				$('#dial').removeClass('dial4');

			}


			console.log('dial' + click);
	}
);

$('#channel-1').click(
	function() {
		player[0].stop();

		$('#dial').removeClass('dial' + click);
		click = 1;
		$('#dial').addClass('dial' + click);
		$('#static').show();
		$('#trailer').hide();
		player[1].play();
	}
);
$('#channel-2').click(
	function() {
		player[0].stop();

		$('#dial').removeClass('dial' + click);
		click = 2;
		$('#dial').addClass('dial' + click);
		$('#static').show();
		$('#trailer').hide();
		player[1].play();
	}
);
$('#channel-3').click(
	function() {
		player[0].stop();
		
		$('#dial').removeClass('dial' + click);
		click = 3;
		$('#dial').addClass('dial' + click);
		$('#static').show();
		$('#trailer').hide();
		player[1].play();
	}
);

$('#channel-4').click(
	function() {
		$('#dial').removeClass('dial' + click);
		click = 0;
		$('#static').hide();
		$('#trailer').show();
		player[0].play();

	}


);

