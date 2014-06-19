'use strict';

//goog.require('AngularSPA.home');

goog.provide('AngularSPA.application.module');

AngularSPA.application.module = angular.module('AngularSPA', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
]);

AngularSPA.application.module.config(function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(false);

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'components/home/home.tmpl.html',
      controller: 'homeCtrl as home'
    })
});