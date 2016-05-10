'use strict'

import angular from 'angular'

export const addController = 'app.route.add.controller'

function controller($scope) {
  console.log('addController', $scope)

  $scope.text = 'Add Page'
}

angular
  .module(addController, [])
  .controller('addController', ['$scope', controller])

