 var time = 10800;
	 var hours;
	 var minutes;
	 var seconds;

setInterval(function() {
time = time-1;
hours = Math.floor(time/3600);
minutes = Math.floor((time - hours*3600)/60);
seconds = time - hours*3600 - minutes*60;
if (seconds < 10) {
seconds = `0${seconds}`;
}
if (minutes < 10) {
minutes = `0${minutes}`;
}
document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000);
