'use strict'

import angular from 'angular'
import $routeProvider from '$routeProvider'
import { homeRoute } from 'home/home'
import { addRoute } from 'add/add'

export const routes = 'app.routes'

angular.module(routes, [homeRoute, addRoute])
