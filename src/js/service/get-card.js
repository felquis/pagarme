'use strict'

import angular from 'angular'
import { LOCALSTORAGE_CARD } from 'constants'

export const getCard = 'app.service.getCard'

angular.module(getCard, [])
  .service('getCard', [function () {
    return function (CARD_HASH) {
      if (localStorage[LOCALSTORAGE_CARD]) {
        return JSON.parse(localStorage[LOCALSTORAGE_CARD])
      } else {
        return false
      }
    }
  }])
