// Your code goes here
document.addEventListener('DOMContentLoaded', function() {
	console.log('The DOM has loaded');
	let edit = document.querySelector('#text');
	console.log(edit);

	edit.textContent = 'This is really cool!';
});
