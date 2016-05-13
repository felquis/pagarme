'use strict'

import angular from 'angular'
import { PAGARME_API_KEY } from 'constants'

export const cancelTransaction = 'app.service.cancelTransaction'

// https://docs.pagar.me/transactions/#cancelando-uma-transacao

// curl -X POST 'https://api.pagar.me/1/transactions/:id/refund' \
//     -d 'api_key=ak_test_grXijQ4GicOa2BLGZrDRTR5qNQxJW0'

angular.module(cancelTransaction, [])
  .service('cancelTransaction', ['$http', '$q', function ($http) {
    return function (transactionId) {
      return $http({
        method: 'POST',
        url: `https://api.pagar.me/1/transactions/${transactionId}/refund`,
        data: {
          api_key: PAGARME_API_KEY
        }
      })
    }
  }])

