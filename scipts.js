const buttons = Array.from(document.querySelectorAll('.button'));

let consoleFunction = function(e) {
    console.log(this.dataset.key);
	console.log(e);
	const keyValue = document.querySelector(`.button[data-key]`);
	console.log(keyValue);
};

buttons.forEach(click => click.addEventListener('click', consoleFunction));

let cancelButton = document.querySelector('#cancel');
console.log(cancelButton.dataset.key);
