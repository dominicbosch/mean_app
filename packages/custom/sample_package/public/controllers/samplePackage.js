'use strict';

angular.module('mean.sample_package').controller('SamplePackageController', ['$scope', 'Global', 'SamplePackage',
  function($scope, Global, SamplePackage) {
    $scope.global = Global;
    $scope.package = {
      name: 'sample_package'
    };
  }
]);
