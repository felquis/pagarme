'use strict'

import angular from 'angular'
import $routeProvider from '$routeProvider'
import { cardSuccessController } from './controller'

export const cardSuccessRoute = 'app.route.card-success'

// definition of home route
function home($routeProvider) {
  $routeProvider.when('/card-success', {
      templateUrl: '/js/card-success/templates/template.html',
      controller: 'cardSuccessController'
  })
}

angular
  .module(cardSuccessRoute, ['ngRoute', cardSuccessController])
  .config(['$routeProvider', home])
