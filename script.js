var bg = document.getElementById('bg');
var time = document.getElementById('time');

refreshTime();

var rands = [];
for (var i = 0; i < 6; i++) {
	rands.push(Math.floor(Math.random() * 255) + 1)
}

var c1 = 'rgb(' + rands[0] + ',' + rands[1] + ',' + rands[2] + ')';
var c2 = 'rgb(' + rands[3] + ',' + rands[4] + ',' + rands[5] + ')';

bg.style.background = 'linear-gradient(to top right, ' + c1 + ',' + c2 + ')';

window.setTimeout(() => {
	bg.style.opacity = 1;
}, 10);

window.setInterval(() => {
	refreshTime();
}, 15000);

function refreshTime(date = new Date()) {
	var hours = date.getHours()
	var ampm = hours < 12 ? 'AM' : 'PM';
	if (hours > 12) hours -= 12;
	if (hours == 0) hours = 12;

	var mins = date.getMinutes();
	if (mins < 10) mins = '0' + mins;

	time.innerText = hours + ':' + mins + ' ' + ampm;
}
