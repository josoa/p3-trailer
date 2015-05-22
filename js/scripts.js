// My Scripts

var click = 0;

$('video').mediaelementplayer();

$('#channel').click(
	click++;
	if (click > 3) {
		//play video
		click = 0;
	}
);

