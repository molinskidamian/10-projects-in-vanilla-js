(function () {
	const products = [
		'Mleko',
		'Piwo',
		'Whisky',
		'Pepsi',
		'Woda gazowana',
		'Woda niegazowana',
		'Sok jabłkowy',
		'Sok pomarańczowy',
		'Sok bananowy',
		'Sok wieloowocowy',
		'Wino czdrwone',
		'Wino białe',
		'Energy drink',
	];

	const searchField = document.querySelector('.search-field');
	const output = document.querySelector('output');
	const list = document.querySelector('.list');
	let text;

	products.forEach(el => {
		const li = document.createElement('li');
		li.append(el);
		li.classList.add('item');
		list.appendChild(li);
	});

	searchField.addEventListener('keyup', e => {
		output.textContent = e.target.value;
		console.log(e.target.value);

		const listItems = document.querySelectorAll('.item');
		const listItemsArr = [...listItems];

		listItemsArr.forEach(el => {
			text = e.target.value;
			const textItem = el.textContent;

			if (textItem.indexOf(text) !== -1) {
				el.style.display = 'block';
			} else {
				el.style.display = 'none';
			}
		});
	});

	products.pop();
})();
