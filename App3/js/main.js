<html>
    <head>
        <meta charset="utf-8">
            <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
                <title>BasemapToggle widget</title>

                <link rel="stylesheet" href="https://js.arcgis.com/4.7/esri/css/main.css">
                    <script src="https://js.arcgis.com/4.7/"></script>
                    <style>
                        html,
body{
                            padding: 0;
                                    margin: 0;
                                    height: 100%;
                                    width: 100%;
                    }
#viewDiv, #viewDiv3 {
                            padding: 0;
                        margin: 0;
                        height: 50%;
                        width: 50%;
                        float: right;
                      }
#viewDiv2, #viewDiv4 {
                            padding: 0;
                        margin: 0;
                        height: 50%;
                        width: 50%;
                        float: left;
                      }
                    </style>

                    <script>
                        require([
           "esri/Map",
           "esri/views/MapView",
           "esri/layers/MapImageLayer",
           "esri/layers/FeatureLayer",
            
           "dojo/domReady!"
         ], function(
           Map,
           MapView,
           MapImageLayer,
           FeatureLayer
) { // TOP of REQUIRE

  // Create the Map
  var map = new Map({
                            basemap: "gray"
                  });

                  // Create the MapView

  var mapImageLayer = new MapImageLayer({
                            url : "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
                        opacity : 0.4
                      });
                     
                    
                      /*********************
                       * Add feature layer *
                       *********************/
  var featureLayer = new FeatureLayer({
                            url: "http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Earthquakes/EarthquakesFromLastSevenDays/FeatureServer/0"
                      });
                    
                      // Note: layers are added to the map when the map is constructed
  var map = new Map({
                            basemap: "dark-gray",
                        layers : [mapImageLayer, featureLayer]
                      });
var view = new MapView({
                            container: "viewDiv",
                    map: map,
                    center: [-98.5795, 39.8283], // 39.8283° N, 98.5795° W
                    zoom: 4
                  });
 /*********************
   * Add feature layer *
   *********************/
  var featureLayer = new FeatureLayer({
                            url: "https://services.arcgis.com/N4oRqIRfFV0YuFE1/arcgis/rest/services/Hogdatafinal_XYTableToPoint/FeatureServer"
                      });
                    
                      // Note: layers are added to the map when the map is constructed
  var map = new Map({
                            basemap: "dark-gray",
                        layers : [mapImageLayer, featureLayer]
                      });
                                     
	var view2 = new MapView({
                            container: "viewDiv2",
                    map: map,
                    center: [-98.5795, 39.8283], // 39.8283° N, 98.5795° W
                    zoom: 4
                  });

/*********************
   * Add feature layer *
   *********************/
  var featureLayer = new FeatureLayer({
                            url: "https://services.arcgis.com/N4oRqIRfFV0YuFE1/arcgis/rest/services/Fire_Map/FeatureServer"
                      });
                    
                      // Note: layers are added to the map when the map is constructed
  var map = new Map({
                            basemap: "dark-gray",
                        layers : [mapImageLayer, featureLayer]
                      });
	var view3 = new MapView({
                            container: "viewDiv3",
                    map: map,
                    center: [-98.5795, 39.8283], // 39.8283° N, 98.5795° W
                    zoom: 4
                  });
 /*********************
   * Add feature layer *
   *********************/
  var featureLayer = new FeatureLayer({
                            url: "https://livefeeds.arcgis.com/arcgis/rest/services/LiveFeeds/USGS_Seismic_Data/MapServer/9"
                      });
                    
                      // Note: layers are added to the map when the map is constructed
  var map = new Map({
                            basemap: "dark-gray",
                        layers : [mapImageLayer, featureLayer]
                      });
                    
	var view4 = new MapView({
                            container: "viewDiv4",
                    map: map,
                    center: [-98.5795, 39.8283], // 39.8283° N, 98.5795° W
                    zoom: 4
                  });


                });  // BOTTOM of REQUIRE
                        </script>
                
  </head>
                <body>
                    <div id="viewDiv"></div>
                    <div id="viewDiv2"></div>
                    <div id="viewDiv3"></div>
                    <div id="viewDiv4"></div>
                </body>


</html>