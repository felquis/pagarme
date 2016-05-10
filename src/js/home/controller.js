'use strict'

import angular from 'angular'

export const homeController = 'app.route.home.controller'

function controller($scope) {
  console.log('homeController', $scope)

  $scope.text = 'Hello World'
}

angular
  .module(homeController, [])
  .controller('homeController', ['$scope', controller])
