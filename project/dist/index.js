(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var app = angular.module("myApp", []);

module.exports = app;

},{}],2:[function(require,module,exports){
"use strict";

var app = require('./app');
//document-section
app.directive("documentSection", function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      title: '@'
    },
    templateUrl: './app/templates/document-section.html'
  };
});

module.exports = app;

},{"./app":1}],3:[function(require,module,exports){
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

},{"./app":1}],4:[function(require,module,exports){
"use strict";

var app = require('./app');

//directives
require('./document-section');

// controllers
require('./filters-controller');

//filters
require('./internal-id-filter');

},{"./app":1,"./document-section":2,"./filters-controller":3,"./internal-id-filter":5}],5:[function(require,module,exports){
"use strict";

var app = require('./app');

app.filter('internalId', function() {
  return function(input) {
    var output = "BGP000" + input + (input*3 / 2);
    return output;
  }
});

module.exports = app;

},{"./app":1}]},{},[4]);
