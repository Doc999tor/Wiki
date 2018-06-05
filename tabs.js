console.log('tabs')

$('nav button').click(function (e) {
	var clickedLink = $(e.target);
	console.log(clickedLink)
	// var index = clickedLink.text().slice(-1)
	// var index = Number(clickedLink.text().match(/[0-9]/)[0]);
	// var index = Number(clickedLink.text().match(/\d/)[0]);

	var index = Number(clickedLink.attr('data-section'));

	// $(`section:not(:nth-of-type(${index}))`).css('display', 'none');
	// $(`section:nth-of-type(${index})`).css('display', 'block');

	$(`section:not([data-order=${index}])`).css('display', 'none');
	$(`section[data-order=${index}]`).css('display', 'block');
});




















/*
/[0-9]/.test('link #3')
true
/[0-9]$/.test('link #3')
true
/[0-9]^/.test('link #3')
false
/^[a-z]/.test('link #3')
true
/^[a-z][0-9]$/.test('link #3')
false
/^\w.*[0-9]$/.test('link #3')
/^[a-z].*[0-9]$/.test('link #3')
true
'link #3'.match(/[0-9]/)
["3", index: 6, input: "link #3", groups: undefined]0: "3"groups: undefinedindex: 6input: "link #3"length: 1__proto__: Array(0)
'link #3456'.match(/[0-9]/)
["3", index: 6, input: "link #3456", groups: undefined]
'link #3456'.match(/[0-9][0-9]/)
["34", index: 6, input: "link #3456", groups: undefined]
'link #3456'.match(/[0-9]$/)
["6", index: 9, input: "link #3456", groups: undefined]
'link #3456'.match(/[0-9]+/)
["3456", index: 6, input: "link #3456", groups: undefined]
'link #'.match(/[0-9]+/)
null
'link #'.match(/[0-9])
["", index: 0, input: "link #", groups: undefined]
*/