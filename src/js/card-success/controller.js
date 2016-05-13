'use strict'

import angular from 'angular'

export const cardSuccessController = 'app.route.card-success.controller'

function controller($scope, $interval, $location) {

  let redirect = localStorage['onsuccess_redirect_to']

  if (redirect) {
    $scope.wait = 1 // seconds
    $scope.waitFor = `Vai para o inicio em ${$scope.wait}s`
  } else {
    $scope.wait = 3 // seconds
    $scope.waitFor = `Vai para o inicio em ${$scope.wait}s`
  }

  var stop = $interval(function () {
    $scope.wait = $scope.wait - 1
    $scope.waitFor = `Redirect para o inicio em ${$scope.wait}s`

    if (!$scope.wait) {
      $scope.goHome()
    }
  }, $scope.wait * 1000)

  $scope.goHome = function () {
    $interval.cancel(stop)

    localStorage.removeItem('onsuccess_redirect_to')

    $location.path(redirect || '/')
  }
}

angular
  .module(cardSuccessController, [])
  .controller('cardSuccessController', ['$scope', '$interval', '$location', controller])
