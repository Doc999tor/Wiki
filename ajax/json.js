$.get('persons.json', function(data) {
	console.log(data);
	buildPersonsList(data);
});

function buildPersonsList(persons) {
	$('<ul>').appendTo('body')
	for (var i = 0; i < persons.length; i++) {
		buildPerson(persons[i]);
	}
	$('<p>', {text: JSON.stringify(persons)}).appendTo('body')
}

function buildPerson(person) {
	$('<li>', {
		text: `Name: ${person.name}, age: ${person.age}, address: ${person.address}`,
	}).appendTo('ul');
}

$('form').submit(function(event) {
	event.preventDefault();
	var data = {
		name: $('input[name=name]').val(),
		address: $('input[name=address]').val(),
		age: $('input[name=age]').val(),
	};
	$.post('persons.json', data, function(data) {

	});
});