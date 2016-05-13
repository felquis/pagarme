'use strict'

import angular from 'angular'

export const homeController = 'app.route.home.controller'

function controller($scope, randomUsers, getCard) {
  randomUsers.get().then(function (list) {
    $scope.options = list
  })

  $scope.hasntAddedCreditCard = !getCard()

  $scope.text = 'Bem vindo a loja de personagens da Lego'
}

angular
  .module(homeController, [])
  .controller('homeController', ['$scope', 'randomUsers', 'getCard', controller])
