'use strict'

import angular from 'angular'
import $routeProvider from '$routeProvider'
import { productController } from './controller'

export const productRoute = 'app.route.product'

// definition of home route
function home($routeProvider) {
  $routeProvider.when('/buy/:id', {
      templateUrl: '/js/product/templates/template.html',
      controller: 'productController'
  })
}

angular
  .module(productRoute, ['ngRoute', productController])
  .config(['$routeProvider', home])
