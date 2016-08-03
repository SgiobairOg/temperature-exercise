#CODING EXERCISE - JavaScript/SPA
#*Jason P. Wilson*

##Exercise Completed 

**User Result #1**
Anonymous end users can enter any number of temperture records by entering a value and then clicking on the "Add" button.

**User Result #2**
Anonymous end users can click on the "Get Median Temperture" button to see the median of the entered temperture records that they have entered.

**User Result #3**
Anonymous end users are prevented from entering invalid values such as strings in the "temperature" field.
The UI and back-end inform them that they tried an invalid action.


##Implementation Details

**Temperature Validation**
The UI and the back-end resrtict the input to numeric values between 55 &deg;F and 120 &deg;F, this range is based on the survivable min and max temperatures for the human body. 
The min and max temperatures are defined as constants in the app module. Changin the constants in the module will also update the min and max sent to the UI.
**Median Validation**
The UI and back-end will not do a median calculation until there are records in the temperature arrays

**Technical Tasks**
 - For user story #1 and #2. Create a javascript object (or an Angular service) named "TemperatureMonitor". &#10003;
 - This object MUST have a method named "recordTemperature" that will accept a number value. &#10003;
 - This object MUST have a method called "getCurrentMedian" that will return the median of the recorded values. &#10003;
 - This object MUST be easily reusable and have no coupling with the UI &#10003;
 - Use this TemperatureMonitor object in the Angular SPA. &#10003;
 - The Code that calculates the median MUST be your own (no libraries allowed) &#10003;
 - The Code that calculates the median MUST be covered by Unit Tests (As much as you feel necessary to ensure good code quality) &#10003;
 - Twitter Bootstrap CSS is already included in the index file, use it at will &#10003;

**Note**: Plnkr seems to randomly have trouble loading the jasmine-test-runner.html page. Reloading seems to fix the issue.
 
