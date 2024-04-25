var vector='streets-navigation-vector';
var view =undefined;
var map = undefined;
var Layer = undefined;

function LoadMap(){
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",

        "esri/layers/GraphicsLayer"
    ],
    (Map, MapView, Graphic, GraphicsLayer) => {
        map = new Map({
        basemap: vector
        });

        view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-97.96383133452758, 19.937106633402326], // longitude, latitude     
            zoom: 15
        });

        AddGeoJSONLayer();

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);
     
      const point = { //Create a point
         type: "point",
         longitude: -118.80657463861,
         latitude: 34.0005930608889
      };
      const simpleMarkerSymbol = {
         type: "simple-marker",
         color: [226, 119, 40],  // Orange
         outline: {
             color: [255, 255, 255], // White
             width: 1
         }
      };
    });
}

function AddGeoJSONLayer(){
    require([
       "esri/layers/GeoJSONLayer",
       "esri/layers/FeatureLayer"
    ],function(GeoJSONLayer, FeatureLayer){
 
       Layer = new GeoJSONLayer({
          url:"./Ahuacatlan.json",
          renderer: {
             type: "simple",
             field: "mag",
             symbol: {
                type: "simple-fill",
                color: [193, 186, 151 , 0.4],
                outline: {
                   width: 1,
                   color: "gray"
                }
             }
          },
 
 
       });
       map.add(Layer);
 
 
    });
}
