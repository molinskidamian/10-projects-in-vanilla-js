(function () {
	const addInput = document.querySelector('.add-input');
	const addBtn = document.querySelector('.add-btn');
	const list = document.querySelector('.list');

	addInput.addEventListener('keyup', e => {
		console.log(e.target.value);
	});

	addBtn.addEventListener('click', e => {
		e.preventDefault();
		console.log('click');

		if (addInput.value === '') {
			console.log('puste pole');
		} else {
			const li = document.createElement('li');
			li.append(addInput.value);
			list.appendChild(li);
		}
	});
})();
