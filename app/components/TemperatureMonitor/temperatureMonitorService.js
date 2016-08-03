/**
 * Defines the Temperature Monitor Service to handle temperature records
 **/

( function() {
  
  var app = angular.module( 'app' );
  
  app.service( 'TemperatureMonitor', [ 'SETTINGS', '$log', function( SETTINGS, $log ) {
    //Set local scope
    var sco = this;
    
    //Initialise temperature array
    sco.temperatures = [];
    
    sco.recordTemperature = function( temperature ) {
      //Validate temperature entry
      if( temperature == null || isNaN( temperature ) || temperature > SETTINGS.MAX_TEMP || temperature < SETTINGS.MIN_TEMP ) {
        throw { title:"Invalid Value", message:'Temperature must be a number between ' + SETTINGS.MIN_TEMP + ' and ' + SETTINGS.MAX_TEMP };
      }
      
      sco.temperatures.push( { time: Date.now(), temperature: temperature } );
    };
    
    sco.getLatestTemperature = function( temperatures ) {
      temperatures = temperatures || sco.temperatures;
      temperatures.sort( function (a, b) {
        return b.time - a.time;
      });
        
      return temperatures[0].temperature;
    };
    
    sco.getCurrentMedian = function( temperatures ) {
      temperatures = temperatures || sco.temperatures;
      if( temperatures.length <= 0 ) {
        throw {
          title:"Not Enough Data", 
          message:"You must add temperatures before getting the median."
        };
      }
      
      temperatures.sort( function( a, b ) {
        return b.temperature - a.temperature;
      });
      
      var halfLength = Math.floor( temperatures.length/2 );
  
      if( temperatures.length % 2 ) {
        return temperatures[halfLength].temperature;
      } else {
        return (temperatures[halfLength-1].temperature + temperatures[halfLength].temperature) / 2.0;
      }  
    };
    
    sco.listTemperatures = function( temperatures ) {
      temperatures = temperatures || sco.temperatures;
      return temperatures;
    };
    
    sco.clearTemperatures = function() {
      sco.temperatures = [];
    };
    
  }]);
})();