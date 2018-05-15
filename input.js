var input = document.querySelector('input[name=age]');
var min = Number(input.min);
var max = Number(input.max);
console.log(min, max);

document.querySelector('#range').prepend(createLabel(min));
document.querySelector('#range').append(createLabel(max));

setRangeOutput(input.value);
input.addEventListener('input', function () {
	setRangeOutput(input.value);
});

function setRangeOutput(value) {
	document.querySelector('#range output').textContent = value;
}

function createLabel(num) {
	var span = document.createElement('span');
	span.textContent = num;
	return span;
}