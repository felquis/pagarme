'use strict'

import angular from 'angular'

export const productController = 'app.route.home.product'

function controller($scope, randomUsers, getCard, $routeParams,
  createTransaction, $location, cancelTransaction, $timeout) {
  $scope.hasCard = !!getCard()

  $scope.comprarButtonText = 'Comprar'
  $scope.cancelarButtonText = 'Cancelar Compra'

  randomUsers.getId($routeParams.id).then(function (product) {
    $scope.item = product
  })

  $scope.comprar = function (item) {
    $scope.comprarButtonText = 'Comprando..'

    createTransaction(item.price.replace('.', '')).then(function (transaction) {
      if(!transaction) { return }

      $scope.item.comprado = transaction.data

      randomUsers.addTransaction($routeParams.id, transaction.data)
    }, function (err) {
      $scope.comprarButtonText = 'Comprar'

      alert('Não foi possível comprar, nossos minions vão verificar o problema')
    })
  }

  $scope.addCartao = function () {
    localStorage.setItem('onsuccess_redirect_to', `/buy/${$routeParams.id}`)

    $location.path('/add')
  }

  $scope.cancelarCompra = function () {
    $scope.cancelarButtonText = 'Cancelando'

    cancelTransaction($scope.item.comprado.id).then(function (res) {
      $scope.cancelarButtonText = 'Cancelada'
      randomUsers.cancelTransaction($routeParams.id)

      $timeout(function () {
        $scope.item.comprado = false
      }, 1000)
    }, function (err) {
      $scope.cancelarButtonText = 'Cancelar Compra'
      console.error(err)
      alert('Algo deu errado, Temer tomou posse numa sexta 13')
    })
  }
}

angular
  .module(productController, [])
  .controller('productController', ['$scope', 'randomUsers', 'getCard',
    '$routeParams', 'createTransaction', '$location', 'cancelTransaction', '$timeout', controller])
