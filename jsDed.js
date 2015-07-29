var startTime;
var stopTime; 
var interval;

function timeUpdate () {
	var num = new Date();
	var hours;
	var minutes;
	var seconds;
	var milli;
	
	if (num.getHours() < 10) {
		hours = "0" + num.getHours().toString();
	}
	else {
		hours = num.getHours().toString();
	}
	if (num.getMinutes() < 10) {
		minutes = "0" + num.getMinutes().toString();
	}
	else {
		minutes = num.getMinutes().toString();
	}
	if (num.getSeconds() < 10) {
		seconds = "0" + num.getSeconds().toString();
	}	
	else {
		seconds = num.getSeconds().toString();
	}
	if (Math.floor(num.getMilliseconds()/10) < 10) {
		milli = "0" + Math.floor(num.getMilliseconds()/10).toString();
	}
	else {
		milli = Math.floor(num.getMilliseconds()/10).toString();
	}
		
	$('.stuff').text(hours + " " + minutes + " " + seconds + " " + milli);
}

var main = function() {
	
	$("#time").hover( function(){
		$(this).addClass('stuff',100);
		startTime = Date.now();
		if(typeof stopTime === 'undefined'){
			interval = setInterval(timeUpdate,100);
		}
		else {
			$(this).removeClass('stuff',100);
			$(this).text("End");
		}
		console.log(startTime - stopTime);
	},
	
	function(){
		if(typeof stopTime === 'undefined'){
			clearInterval(interval);
			$(this).removeClass('stuff',100);
			$(this).text("Mouseover for the time");
			stopTime = Date.now();
		}
		else {
			return false;
		}
	});

}

$(document).ready(main);