'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = require('./actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _Redux = Redux;
var combineReducers = _Redux.combineReducers;
var _visibilityFilters = visibilityFilters;
var SHOW_ALL = _visibilityFilters.SHOW_ALL;

// const initialState = {
//   visibilityFilter: SHOW_ALL,
//   todos: []
// }

function visibilityFilter() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? SHOW_ALL : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _actions.SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

function todos() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _actions.ADD_TODO:
			return [].concat(_toConsumableArray(state), [{
				text: action.text,
				completed: false
			}]);
		case _actions.COMPLETE_TODO:
			return state.map(function (todo, index) {
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: true
					});
				}
				return todo;
			});
		default:
			return state;
	}
}

var todoApp = combineReducers({
	visibilityFilter: visibilityFilter,
	todos: todos
});

exports.default = todoApp;