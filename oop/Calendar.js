class Calendar {
	constructor (monthName) {
		// this.monthName = monthName;
		this.findMonthIndex (monthName)
		// this.create();
	}

	render() {
		var calendarTitle = document.createElement('h3');
		calendarTitle.id = 'calendar-title';
		calendarTitle.textContent = 'new created calendar';
		document.body.append(calendarTitle)
	}

	destroy () {
		document.querySelector('#calendar-title').remove();
	}

	findMonthIndex (monthName) {
		var months = ['June'];
		// this.monthIndex = 0;
		// for (var i = 0; i < months.length; i++) {
		// 	if (months[i] === monthName) {
		// 		this.monthIndex = i;
		// 		break;
		// 	}
		// }
		this.monthIndex = months.findIndex(m => m === monthName);
		// this.monthIndex = months.findIndex(function (month) {
		// 	return month === monthName;
		// });
	}
}