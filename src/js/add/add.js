'use strict'

import angular from 'angular'
import $routeProvider from '$routeProvider'
import { addController } from './controller'

export const addRoute = 'app.route.add'

// definition of add page
function add($routeProvider) {
  $routeProvider.when('/add', {
      templateUrl: '/js/add/templates/add.html',
      controller: 'addController'
  })
}

angular
  .module(addRoute, ['ngRoute', addController])
  .config(['$routeProvider', add])
