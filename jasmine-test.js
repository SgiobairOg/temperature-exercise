describe( "TemperatureMonitor Unit Tests", function() {
  
  describe( "TemperatureMonitor Service", function() {
    
    var TemperatureMonitor;
    
    beforeEach( module( "app" ) );

    beforeEach( inject( function ( _TemperatureMonitor_, $httpBackend ) {
      TemperatureMonitor = _TemperatureMonitor_;
    }));
        
    it( "contains a TemperatureMonitorService",
      inject( function( TemperatureMonitor ) {
      expect( TemperatureMonitor ).not.toEqual( null );
    }));
    
    it( "rejects subhuman temperatures (below 55)",
      inject( function( TemperatureMonitor ) {
      expect( function() { TemperatureMonitor.recordTemperature( 45 ) }).toThrow();
    }));
    
    it( "rejects superhuman temperatures (above 120)",
      inject( function( TemperatureMonitor ) {
      expect( function() { TemperatureMonitor.recordTemperature( 130 ) }).toThrow();
    }));
    
    it( "accepts a normal temperature (55-120)",
      inject( function( TemperatureMonitor ) {
      expect( function() { TemperatureMonitor.recordTemperature( 70 ) }).not.toThrow();
    }));
    
    it( "expects an array to store temperatures",
      inject(function( TemperatureMonitor ) {
      expect( Array.isArray( TemperatureMonitor.temperatures ) ).toBe( true );
    }));
    
    it( "doesn't accept nonsense as a temperature",
      inject( function( TemperatureMonitor ) {
      expect( function() { TemperatureMonitor.recordTemperature( 'pickle' ) }).toThrow();
    }));
    
    it( "provides a list of temperature readings",
      inject( function( TemperatureMonitor ) {
        var temps = [
          { time: 12, temperature: 70 }, 
          { time: 13, temperature: 70 }, 
          { time: 14, temperature: 70 } 
        ];
      expect( Array.isArray( TemperatureMonitor.listTemperatures( temps ) )).toBe(true);
    }));
    
    it("returns the median temperature from an even number of readings",
      inject( function( TemperatureMonitor) {
        var temps = [
          { time: 12, temperature: 71 }, 
          { time: 13, temperature: 72 }, 
          { time: 14, temperature: 73 }, 
          { time: 15, temperature: 72 } 
        ];
      expect( TemperatureMonitor.getCurrentMedian( temps ) ).toBe( 72 );
    }));
    
    it( "returns the median temp from an even number of unique readings",
      inject( function( TemperatureMonitor ) {
        var temperatures = [
          { time: 12, temperature: 71 }, 
          { time: 13, temperature: 74 }, 
          { time: 14, temperature: 73 }, 
          { time: 15, temperature: 72 } 
        ];
      expect( TemperatureMonitor.getCurrentMedian( temperatures ) ).toBe(72.5);
    }));
    
    it( "returns the median temp from an odd number of unique readings",
      inject( function( TemperatureMonitor ) {
        var temperatures = [
          { time: 13, temperature: 74 }, 
          { time: 14, temperature: 73 }, 
          { time: 15, temperature: 72 } 
        ];
      expect( TemperatureMonitor.getCurrentMedian( temperatures ) ).toBe(73);
    }));

    it( "returns the median temp from readings containing negative values, in case the limits are changed",
      inject( function( TemperatureMonitor ) {
        var temperatures = [
          { time: 12, temperature: -2 }, 
          { time: 13, temperature: -1 }, 
          { time: 14, temperature: 0 }, 
          { time: 15, temperature: 1 }, 
          { time: 15, temperature: 2 }  
        ];
      expect( TemperatureMonitor.getCurrentMedian( temperatures ) ).toBe(0);
    }));
    
    it("returns the median temp from readings containing negative values, in case the limits are changed",
      inject( function( TemperatureMonitor ) {
        var temperatures = [
          { time: 12, temperature: -2 }, 
          { time: 13, temperature: -1 }, 
          { time: 15, temperature: 1 }, 
          { time: 15, temperature: 2 }  
        ];
      expect( TemperatureMonitor.getCurrentMedian( temperatures ) ).toBe( 0 );
    }));
  });

});