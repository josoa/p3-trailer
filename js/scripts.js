// My Scripts

var click = 0;

var player = $('video').mediaelementplayer();
		
$('#trailer').hide();
$('#static').show();


$('#channel').click( 
	function () {
		$('#dial').removeClass('dial' + click);
		click++;
		player[1].play;
		$('#dial').addClass('dial' + click);
		

			if (click > 3) {
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

