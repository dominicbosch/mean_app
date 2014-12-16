'use strict';

angular.module('mean.sample_package').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('samplePackage example page', {
      url: '/samplePackage/example',
      templateUrl: 'sample_package/views/test.html'
    });
  }
]);
