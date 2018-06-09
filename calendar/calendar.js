// var counterClicksCalendar = 0;
// document.querySelector('#show_calendar')
// 	.addEventListener('click', function () {
// 		counterClicksCalendar++;
// 		if (counterClicksCalendar % 2) {
// 			createCalendar()
// 		} else {
// 			document.querySelector('#calendar').remove();
// 		}
// 	})

document.querySelector('#show_calendar')
	.addEventListener('click', function () {
		if (document.querySelector('#calendar')) {
			document.querySelector('#calendar').remove();
		} else {
			createCalendar()
		}
	})


function createCalendar() {
	var calendar = document.createElement('div');
	calendar.id = 'calendar';

	var today = new Date();
	var todayDate = today.getDate();

	var maxDays = 30;
	for (var i = 1; i <= maxDays; i++) {
		var dayTag = createDayTag(i);
		if (i === todayDate) {
			dayTag.classList.add('today')
		}
		calendar.append(dayTag)
	}

	document.body.append(calendar);
}

function createDayTag(day) {
	var span = document.createElement('span');
	span.classList.add('day');
	span.textContent = day;
	return span;
}