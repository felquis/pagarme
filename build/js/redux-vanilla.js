'use strict';

(function () {
	'use strict';

	function counter(state, action) {
		if (typeof state === 'undefined') {
			return 0;
		}
		switch (action.type) {
			case 'INCREMENT':
				return state + 1;
			case 'DECREMENT':
				return state - 1;
			default:
				return state;
		}
	}

	// var store = Redux.createStore(counter) //@replace
	var store = 0;

	document.addEventListener('action', function (e) {
		store = counter(store, e.detail);
		document.dispatchEvent(new CustomEvent('state'));
	}, false);

	var valueEl = document.getElementById('value');
	function render() {
		// store.getState().toString() //@replace
		valueEl.innerHTML = store.toString();
	}
	render();

	// store.subscribe(render) //@replace
	document.addEventListener('state', render);
	document.getElementById('increment').addEventListener('click', function () {
		// store.dispatch({ type: 'INCREMENT' }) //@replace
		document.dispatchEvent(new CustomEvent('action', { detail: { type: 'INCREMENT' } }));
	});

	document.getElementById('decrement').addEventListener('click', function () {
		// store.dispatch({ type: 'DECREMENT' }) //@replace
		document.dispatchEvent(new CustomEvent('action', { detail: { type: 'DECREMENT' } }));
	});

	document.getElementById('incrementIfOdd').addEventListener('click', function () {
		// if (store.getState() % 2 !== 0) { // @replace
		if (store % 2 !== 0) {
			// store.dispatch({ 'INCREMENT' }) //@replace
			document.dispatchEvent(new CustomEvent('action', { detail: { type: 'INCREMENT' } }));
		}
	});

	document.getElementById('incrementAsync').addEventListener('click', function () {
		setTimeout(function () {
			// store.dispatch({ 'INCREMENT'}) //@replace
			document.dispatchEvent(new CustomEvent('action', { detail: { type: 'INCREMENT' } }));
		}, 1000);
	});
})();