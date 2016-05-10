'use strict'
/*
  appView.js is where the whole application navigation is rendered
*/
import angular from 'angular'

export const appView = 'app.view'

function appViewDirective() {
  return {
    // all the pages are rendered inside this template
    template: '<div ng-view>Loading</div>'
  };
}

// define module and directive
angular.module(appView, [])
  .directive('appView', appViewDirective)
