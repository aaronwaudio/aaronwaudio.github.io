var lowSum = 0;
var highSum = 0;

function lowTierCalc(t2, t3) {
	lowSum = Math.round((parseInt(t2)-(parseInt(t3)/2))*(6/7)/3);
	if (lowSum >= 0) {
		document.getElementById('answer').innerHTML = lowSum;
	} else {
		document.getElementById('answer').innerHTML = 0;
	}
};

function highTierCalc(t4, t5) {
	highSum = Math.round((parseInt(t4)-parseInt(t5))*(3/4)/3);
	if (highSum >= 0) {
		document.getElementById('high-answer').innerHTML = highSum;
	} else {
		document.getElementById('high-answer').innerHTML = 0;
	};
};