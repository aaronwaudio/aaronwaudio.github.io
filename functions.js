var sum = 0;

function tierCalc(t2, t3) {
	var optionVal = document.getElementById('tier-select').value
	if (optionVal == 'none') {
		alert('Please select a valid tier option');
	} else if (optionVal == 't2-t3') {
		sum = Math.round((parseInt(t2)-(parseInt(t3)/2))*(6/7)/3);
		if (sum >= 0) {
			document.getElementById('answer').innerHTML = sum;
		} else {
			document.getElementById('answer').innerHTML = 0;
		};
	} else if (optionVal == 't3-t4') {
		sum = Math.round((parseInt(t2)-parseInt(t3))*(6/7)/6);
		if (sum >= 0) {
			document.getElementById('answer').innerHTML = sum;
		} else {
			document.getElementById('answer').innerHTML = 0;
		};
	} else if (optionVal == 't4-t5') {
		sum = Math.round((parseInt(t2)-parseInt(t3))*(9/10)/9);
		if (sum >= 0) {
			document.getElementById('answer').innerHTML = sum;
		} else {
			document.getElementById('answer').innerHTML = 0;
		};
	} else if (optionVal == 't5-t6') {
		sum = Math.round((parseInt(t2)-parseInt(t3))*(15/16)/15);
		if (sum >= 0) {
			document.getElementById('answer').innerHTML = sum;
		} else {
			document.getElementById('answer').innerHTML = 0;
		};
	} else if (optionVal == 't6-t7') {
		sum = Math.round((parseInt(t2)-parseInt(t3))*(24/25)/24);
		if (sum >= 0) {
			document.getElementById('answer').innerHTML = sum;
		} else {
			document.getElementById('answer').innerHTML = 0;
		};
	} else if (optionVal == 't7-t8') {
		alert('coming soon');
	};
};

$("#high-tier").on("keyup", function(event){
	if(event.keyCode == 13){
		$("#submit").click();
	}
});