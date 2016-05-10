'use strict';

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Redux = Redux;
var createStore = _Redux.createStore;


var store = createStore(_reducers2.default);

var unsubscribe = store.subscribe(function () {
	console.log(store.getState());
});

store.dispatch((0, _actions.addTodo)('learn about actions'));
store.dispatch((0, _actions.addTodo)('learn about reducers'));
store.dispatch((0, _actions.addTodo)('learn about store'));

store.dispatch((0, _actions.completeTodo)(0));
store.dispatch((0, _actions.completeTodo)(1));
store.dispatch((0, _actions.setVisibilityFilter)(_actions.VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
