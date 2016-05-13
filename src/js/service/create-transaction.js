'use strict'

import angular from 'angular'
import { PAGARME_API_KEY } from 'constants'

export const createTransaction = 'app.service.createTransaction'

// https://docs.pagar.me/cards/#realizando-uma-transacao-usando-um-cartao
// curl -X POST 'https://api.pagar.me/1/transactions' \
//     -d 'api_key=ak_test_grXijQ4GicOa2BLGZrDRTR5qNQxJW0' \
//     -d 'amount=1000' \
//     -d 'card_hash={CARD_HASH}'
//     OR 'card_id'

angular.module(createTransaction, [])
  .service('createTransaction', ['$http', 'getCard', function ($http, getCard) {
    return function (amount) {
      var card = getCard()

      return $http({
        method: 'POST',
        url: 'https://api.pagar.me/1/transactions',
        data: {
          api_key: PAGARME_API_KEY,
          amount: amount,
          card_id: card.id

          // antifraude desabilitado https://dashboard.pagar.me/#/myaccount/antifraud?sid=1003
          // customer: {
          //   name: 'John Applessed',
          //   document_number: '92545278157',
          //   email: 'jappleseed@apple.com',
          //   address: {
          //     street: 'Av. Brigadeiro Faria Lima',
          //     neiborhood: 'Jardim Paulistano',
          //     zipcode: '014520000',
          //     street_number: '2941',
          //     complementary: '8º andar',
          //     ddd: '11',
          //     number: '30713261'
          //   }
          // }
        }
      })
    }
  }])
