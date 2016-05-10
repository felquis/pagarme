'use strict'

import angular from 'angular'
import $routeProvider from '$routeProvider'
import { homeController } from './controller'

export const homeRoute = 'app.route.home'

// definition of home route
function home($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: '/js/home/templates/home.html',
      controller: 'homeController'
  })
}

angular
  .module(homeRoute, ['ngRoute', homeController])
  .config(['$routeProvider', home])
