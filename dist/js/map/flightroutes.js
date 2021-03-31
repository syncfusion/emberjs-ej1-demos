import Ember from 'ember';

export default Ember.Route.extend({    
    model() {       
        return {           
           enableAnimation: true,
                navigationControl: {
                    enableNavigation: true,
                    orientation: 'vertical',
                    absolutePosition: { x: 5, y: 15 },
                    dockPosition: 'none'
                },
                layers: [
                      {
                          layerType: 'geometry',
                          enableMouseHover: false,
                          enableSelection: false,
                          shapeSettings: {
                              fill: "#C6C35C",
                              autoFill: false,
                              highlightStroke: "white",
                              stroke: "white",
                              strokeThickness: 0.5,
                              highlightStrokeWidth: 1,
                              highlightColor: "#BFBFBF"
                          },
                          shapeData: window.world_map,
                          subLayers: [{
                              layerType: 'geometry',
                              shapeData: window.flightRoutes,
                              shapePropertyPath: "name",
                              enableMouseHover: true,
                              enableSelection: false,
                              showTooltip: true,
                              tooltipTemplate: 'flightroute_template',
                              dataSource: window.flightRoutes_data,
                              shapeDataPath: "name",
                              shapeSettings: {
                                  strokeThickness: 1,
                                  fill: "#BC0C0C",
                                  stroke: '#BC0C0C',
                                  valuePath: "departure",
                                  selectionColor: "transparent",
                                  highlightColor: "transparent",
                                  highlightStroke: "#4E1493",
                                  highlightBorderWidth: 2
                              },
                          },
                          {
                              layerType: 'geometry',
                              shapePropertyPath: "name",
                              enableMouseHover: true,
                              enableSelection: false,
                              showTooltip: true,
                              tooltipTemplate: 'airport_template',
                              dataSource: window.airports_data,
                              shapeDataPath: "name",
                              shapeSettings: {
                                  strokeThickness: 0.1,
                                  fill: "#BC0C0C",
                                  stroke: 'white',
                                  valuePath: "departure",
                                  selectionColor: "transparent",
                                  highlightColor: "transparent",
                                  highlightStroke: "white"
                              },
                              shapeData: window.airports
                          },
                          {
                              layerType: 'geometry',
                              shapeData: window.intermediatestops1,
                              shapePropertyPath: "name",
                              enableMouseHover: true,
                              enableSelection: false,
                              showTooltip: true,
                              tooltipTemplate: 'intermediatestop1_template',
                              dataSource: window.intermediatestops1_data,
                              shapeDataPath: "name",
                              shapeSettings: {
                                  strokeThickness: 0.1,
                                  fill: "#4E1493",
                                  stroke: 'white',
                                  valuePath: "departure",
                                  selectionColor: "transparent",
                                  highlightColor: "transparent",
                                  highlightStroke: "white"
                              },
                          },
                          {
                              layerType: 'geometry',
                              shapeData: window.intermediatestops2,
                              shapePropertyPath: "name",
                              enableMouseHover: true,
                              enableSelection: false,
                              showTooltip: true,
                              tooltipTemplate: 'intermediatestop2_template',
                              dataSource: window.intermediatestops2_data,
                              shapeDataPath: "name",
                              shapeSettings: {
                                  strokeThickness: 0.1,
                                  fill: "#4E1493",
                                  stroke: 'white',
                                  valuePath: "departure",
                                  selectionColor: "transparent",
                                  highlightColor: "transparent",
                                  highlightStroke: "white"
                              },
                          }]
                      }
                ]

        }
    }
});