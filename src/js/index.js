import angular from 'angular'
import { routes } from 'routes'
import { appView } from 'appView'

console.info(`Angular ${angular.version.full}`)
console.info(`RequireJS ${require.version}`)

// setup angular with our angular dependencies
angular.module('app', [routes, appView])

// dynamically bootstrap angularjs
// also check if DOM is ready
angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'])
})
