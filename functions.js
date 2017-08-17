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
	} else {
		sum = Math.round((parseInt(t2)-parseInt(t3))*(3/4)/3);
		if (sum >= 0) {
			document.getElementById('answer').innerHTML = sum;
		} else {
			document.getElementById('answer').innerHTML = 0;
		};
	};
};