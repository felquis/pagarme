'use strict'

import angular from 'angular'
import { PAGARME_API_KEY } from 'constants'

export const saveCard = 'app.service.saveCard'

// https://docs.pagar.me/cards/#armazenando-um-cartao
// curl -X POST 'https://api.pagar.me/1/cards' \
//     -d 'api_key=ak_test_grXijQ4GicOa2BLGZrDRTR5qNQxJW0' \
//     -d 'card_hash={CARD_HASH}' > card.json

// CARD_ID=parse('card.json')['id']

angular.module(saveCard, [])
  .service('saveCard', ['$http', '$q', function ($http) {
    return function (CARD_HASH) {
      return $http({
        method: 'POST',
        url: 'https://api.pagar.me/1/cards',
        data: {
          api_key: PAGARME_API_KEY,
          card_hash: CARD_HASH
        }
      })
    }
  }])
