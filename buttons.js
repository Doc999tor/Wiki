console.log('msg');

var btn = document.querySelector('button');
btn.addEventListener('click', function () {
	var input = document.querySelector('input');
	var number = input.value;
	var output = document.querySelector('output');
	output.textContent = 'User entered ' + number;
});

var tasks = [
	'do hw',
	'clean house',
	'print stuff in console',
	'be nice',
];
for (var i = 0; i < tasks.length; i++) {
	addTask(tasks[i]);
}

var createTaskBtn = document.querySelector('button#new_task');
createTaskBtn.addEventListener('click', function () {
	var newTaskText = document.querySelector('input[name=new-task]').value;
	addTask(newTaskText);
});

function addTask(taskText) {
	var task = document.createElement('li');
	task.textContent = taskText;
	document.querySelector('ul').append(task);
}