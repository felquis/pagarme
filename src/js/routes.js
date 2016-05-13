'use strict'

import angular from 'angular'
import $routeProvider from '$routeProvider'
import { homeRoute } from 'home/home'
import { productRoute } from 'product/product'
import { addRoute } from 'add/add'
import { cardSuccessRoute } from 'card-success/card-success'

export const routes = 'app.routes'

angular.module(routes, [homeRoute, addRoute, cardSuccessRoute, productRoute])
