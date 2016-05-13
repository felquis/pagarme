'use strict'

import angular from 'angular'

export const randomUsers = 'app.service.randomUsers'

/***
  Get data from randomuser.me and save it on localStorage
  http://randomuser.me/
***/
angular.module(randomUsers, [])
.service('randomUsers', ['$q', '$http', '$location', function ($q, $http, $location) {

  var randomuserMe = angular.fromJson(localStorage.randomuserMe) || []

  return {
    get: function () {

      var deferred = $q.defer();

      if (randomuserMe.length > 0) {
        deferred.resolve(setPrices(randomuserMe));

        return deferred.promise;
      }

      $http({
        method: 'get',
        url: 'http://api.randomuser.me/?lego&results=10' // 40 is the max
      }).success(function (data) {
        let list = setPrices(data.results)

        localStorage.randomuserMe = angular.toJson(list);

        deferred.resolve(list);
      }).error(function (error) {
        deferred.reject(error);
      });

     return deferred.promise;
    },
    getId: function (id) {

      var deferred = $q.defer();

      if (!localStorage.getItem('randomuserMe')) {
        $location.path('/')

        deferred.reject(id)

        return deferred.promise
      }

      let list = JSON.parse(localStorage.randomuserMe)

      if (list[id]) {
        deferred.resolve(list[id])
      } else {
        deferred.reject(id)
      }

      return deferred.promise
    },
    addTransaction: function (id, transactionInfo) {
      this.get().then((list) => {
        list[id].comprado = transactionInfo

        localStorage.randomuserMe = angular.toJson(list);
      })
    },
    cancelTransaction: function (id) {
      this.get().then((list) => {
        list[id].comprado = false

        localStorage.randomuserMe = angular.toJson(list);
      })
    }
  }
}]);

function setPrices(list) {
  if (list[0].price) {
    return list
  }

  return list.map((val) => {
    val.price = (Math.random() * 100).toFixed(2)

    return val
  })
}
