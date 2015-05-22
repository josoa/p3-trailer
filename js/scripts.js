// My Scripts

var click = 0;

var player = $('video').mediaelementplayer();


$('#channel').click( 
	function () {
		click++;
		console.log(player);

			if (click > 3) {
				player[0].play();
				click = 0;
			}
	}

);

