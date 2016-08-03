/**
 * Defines a custom directive for displaying temperatures in a log element to the user
 */

( function () {
  
  var app = angular.module( 'app' );
  
  app.directive( 'temperatureLog', function() {
      return {
          restrict: 'E',
          scope: {
            temperatures: '=' //Two-way binding to array of temperature reading objects
          },
          templateUrl: 'app/components/TemperatureMonitor/_temperatureLog.html'
      };
  });
  
})();