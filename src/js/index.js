import angular from 'angular'
import { routes } from 'routes'
import { appView } from 'appView'
import { addCreditCard } from 'directives/add-credit-card/add-credit-card'
import { saveCard } from 'service/save-card'
import { cancelTransaction } from 'service/cancel-transaction'
import { createTransaction } from 'service/create-transaction'
import { randomUsers } from 'service/random-users'
import { getCard } from 'service/get-card'

console.info(`Angular ${angular.version.full}`)
console.info(`RequireJS ${require.version}`)

// setup angular with our angular dependencies
angular.module('app', [routes, appView, saveCard,
    cancelTransaction, createTransaction, randomUsers,
    getCard])

// dynamically bootstrap angularjs
// also check if DOM is ready
angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'])
})
