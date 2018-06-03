console.log('this')

$('body').text('test')
$('body').addClass('red')

$('<p>', {
	id: "paragraph", 
	class: "short-p", 
	text: "Lorem", 
	css: {
		color: `#0${Math.round(Math.random()*10)}0${Math.round(Math.random()*10)}0${Math.round(Math.random()*10)}`,
		fontWeight: Math.round(Math.random()*10) + '00'
	},
	click: function () {
		$('p#paragraph').text('clicked')
	}, 
}).appendTo('body')

$('<button>', {
	text: "Remove p", 
	click: function () {
		$('body').empty();
		// $('#paragraph').remove();
	}
}).appendTo('body')

var libraries = [
	{name: "jquery", year: 2006, weight: 86},
	{name: "react", year: 2014, weight: 52},
	{name: "angularjs", year: 2012, weight: 150},
];

for (var i = 0; i < libraries.length; i++) {
	buildLibrary(libraries[i]);
}

function buildLibrary(libraryObj) {
	var library = $('<section>', {
		class: "library", 
	})
	$('<p>', {
		text: libraryObj.name, 
		class: "library-name", 
	}).appendTo(library);
	$('<p>', {
		text: libraryObj.year, 
		class: "library-year",
		dblclick: editLibraryYear, 
	}).appendTo(library);
	$('<p>', {
		text: libraryObj.weight, 
		class: "library-weight", 
	}).appendTo(library);

	library.appendTo('body')
}

function editLibraryYear(eYear) {
	var input = $('<input>', {
		type: "year", 
		value: $(eYear.target).text(), 
		keyup: function (eInput) {
			var input = $(eInput.target);
			if (eInput.keyCode === 27) {
				var year = $('<p>', {
					text: input.val(), 
					class: "library-year",
					dblclick: editLibraryYear, 				
				})
				year.after(input)
				input.remove();
			}
		}, 
	})
	$(eYear.target).after(input)
}