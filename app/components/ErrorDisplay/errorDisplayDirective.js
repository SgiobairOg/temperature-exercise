/**
 * Defines a custom directive for displaying errors to the user
 */

( function () {
  
  var app = angular.module( 'app' );
  
  app.directive( 'errorDisplay', function() {
    return {
        restrict: 'E',
        scope: {
          error: '='    //Two-way binding to an error object with title and message attributes
        },
        templateUrl: 'app/components/ErrorDisplay/_errorDisplay.html'
    };
  });
  
})();