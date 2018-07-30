"use strict";

var app = require('./app');

var filtersController = function($scope, $filter) {
  $scope.name = "MarCos CosTa";
  $scope.filteredNameUpper = $filter('uppercase')("MarCos CosTa");
  $scope.filteredNameLower = $filter('lowercase')("MarCos CosTa");

  $scope.unfilteredName = "Marcos CostA";
  $scope.ammount = "1234.67";

  $scope.data = [];
  $scope.data.push({id: 1, name: "Marcos Costa", state: "TX"});
  $scope.data.push({id: 23, name: "Ana Goula", state: "WA"});
  $scope.data.push({id: 12, name: "Sunny Costa", state: "OR"});
};

app.controller("filtersController", ['$scope', '$filter', filtersController]);
module.exports = app;
