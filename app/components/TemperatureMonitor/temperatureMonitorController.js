/**
 * Defines the monitor controller to handle display and input of temperatures
 */
 
 ( function() {
   
  var app = angular.module( 'app' );

  app.controller( 'monitorCtrl', [ 'SETTINGS', 'TemperatureMonitor', function( SETTINGS, temperatureMonitor ) {
    //Set local scope
    var sco = this;
    
    //Set initialise controller properties
    sco.error = null;
    sco.latestTemperature = null;
    sco.medianTemperature = null;
    sco.SETTINGS = SETTINGS;
    sco.temperatures = [];
    
    sco.recordTemperature = function( temperature ) {
      
      /* Call the Temperature Monitor Service to record temperature and update
      displayed temperature values */
      
      try {
        //Reset the error value
        sco.error = null;
        
        //Record the temperature value
        temperatureMonitor.recordTemperature( temperature );
        
        //Reset the median value
        sco.medianTemperature = null;
        
        //Update the temperature list and latest temperature
        sco.latestTemperature = temperatureMonitor.getLatestTemperature();
        sco.temperatures = temperatureMonitor.listTemperatures();
      }
      catch ( e ) {
        //Set error object to thrown error
        sco.error = e;
      }
    };
    
    sco.getCurrentMedian = function() {
      
      /* Call the Temperature Monitor Service to calculate median temperature and
      pass it out to the display */
      try {
        sco.error = null;
        temperatureMonitor.getCurrentMedian();
        sco.medianTemperature = temperatureMonitor.getCurrentMedian();
      }
      catch ( e ) {
        sco.error = e;
      }
    };
    
    sco.clearTemperatureLog = function() {
      /* Reset the displayed temperatures and clear the recorded values */
      temperatureMonitor.clearTemperatures();
      sco.temperatures = temperatureMonitor.listTemperatures;
      sco.medianTemperature = null;
      sco.latestTemperature = null;
    };
  }]);
   
 })();