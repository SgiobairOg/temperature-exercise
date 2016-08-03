/**
 * Defines a custom directive for displaying temperatures to the user
 */

( function () {
  
  var app = angular.module( 'app' );
  
  app.directive( 'temperatureDisplay', function() {
    return {
        restrict: 'E',
        scope: {
          title: '@',       //String input from element attributes
          units: '@',       //String input from element attributes
          temperature: '='  //Two-way binding to an output temperature
        },
        templateUrl: 'app/components/TemperatureMonitor/_temperatureDisplay.html'
    };
});
  
})();