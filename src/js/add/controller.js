'use strict'

import angular from 'angular'
import { PAGARME_CRIPTO_KEY } from 'constants'
PagarMe.encryption_key = PAGARME_CRIPTO_KEY

export const addController = 'app.route.add.controller'

function controller($scope, $location, saveCard) {
  $scope.text = 'Qual seu cartão de crédito?'

  var creditCard = new PagarMe.creditCard();

  // form model
  $scope.card = {}

  $scope.formSubmit = function (event) {
    event.preventDefault()

    Array.prototype.slice
    .call(document.querySelectorAll('[data-validation]'))
    .forEach((elem) => {
      elem.parentElement.removeChild(elem)
    })

    creditCard.cardHolderName = $scope.card.cardHolderName
    creditCard.cardExpirationMonth = $scope.card.cardExpirationMonth
    creditCard.cardExpirationYear = $scope.card.cardExpirationYear
    creditCard.cardNumber = $scope.card.cardNumber
    creditCard.cardCVV = $scope.card.cardCVV

    // // pega os erros de validação nos campos do form
    var fieldErrors = creditCard.fieldErrors();

    var elem

    for(var field in fieldErrors) {
      elem = document.querySelector('#' + field)

      if (!elem) { return }

      elem.insertAdjacentHTML('afterend', `<span data-validation>${fieldErrors[field]}</span>`)

      return
    }

    Array.prototype.slice
    .call(event.target.querySelectorAll('[type]'))
    .forEach(function (el) {
      el.setAttribute('readonly', 'readonly')
    })

    var sub = event.target.querySelector('[type="submit"]')

    if (sub) {
      sub.childNodes[0].nodeValue = 'Salvando \n'
    }

    // card is valid by Pagarme, so get CardHash
    creditCard.generateHash(function(cardHash) {
        if (cardHash) {
          saveCard(cardHash).then(function (res) {
            localStorage.setItem('PAGARME_CLIENT_CARD', JSON.stringify(res.data))
            $location.path('/card-success')
          }, function (res) {
            var errors = res && res.data && res.data.errors

            if (!errors.forEach) { return }

            errors.forEach(function (error) {
              alert(error.message || 'Algo deu errado, por favor tente novamente mais tarde')
            })

            Array.prototype.slice
            .call(event.target.querySelectorAll('[type]'))
            .forEach(function (el) {
              el.removeAttribute('readonly')
            })

            var sub = event.target.querySelector('[type="submit"]')

            if (sub) {
              sub.childNodes[0].nodeValue = 'Salvar \n'
            }
          })
        } else {
          alert('Something really weird just happened, sorry')
        }
    });
  }
}

angular
  .module(addController, [])
  .controller('addController', ['$scope', '$location', 'saveCard', controller])
