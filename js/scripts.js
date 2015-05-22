// My Scripts

var click = 0;

var player = $('video').mediaelementplayer();
		
$('#trailer').hide();
$('#static').show();


$('#channel').click( 
	function () {
		click++;
		player[1].play;
		$('#dial').addClass('dial' + click)
		
		console.log(player);

			if (click > 3) {
				$('#static').hide();
				$('#trailer').show();
				player[0].play();
				click = 0;
			}
	}
);



$('#channel-4').click(
	function() {
		$('#static').hide();
		$('#trailer').show();
		player[0].play();
	}

);

