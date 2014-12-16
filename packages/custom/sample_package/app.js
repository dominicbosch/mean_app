'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var SamplePackage = new Module('sample_package');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
SamplePackage.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  SamplePackage.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  SamplePackage.menus.add({
    title: 'samplePackage example page',
    link: 'samplePackage example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  SamplePackage.aggregateAsset('css', 'samplePackage.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    SamplePackage.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    SamplePackage.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    SamplePackage.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return SamplePackage;
});
