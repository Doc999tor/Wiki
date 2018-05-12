var a = 5;
var b = 15;
console.log(a);

if (a % 2 === 1) {
	console.log('odd');
} else {
	console.log('even');
}

printDigitName(a);
printDigitName(b);
printDigitName(77);
printDigitName(3.5);

function printDigitName(digit) {
	var digitName = '';
	switch (digit) {
		case 1: digitName = 'one'; break;
		case 2: digitName = 'two'; break;
		case 3: digitName = 'three'; break;
		case 5: digitName = 'five'; break;
		case 15: digitName = 'fifteen'; break;
	}
	console.log(digitName);
}

for (var i = 1; i <= 10; i++) {
	// console.log(i % 2 == true ? 'Odd' : 'Even');
	console.log(i + ' ' + (i % 2 ? 'Odd' : 'Even'));
}