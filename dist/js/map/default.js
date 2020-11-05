import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            enableAnimation: true,
            layers: [
                {
                    layerType: "geometry",
                    enableSelection: false,
                    enableMouseHover: false,
                    markers: window.syncfusion_locations,
                    showMapItems: false,
                    markerTemplate: 'template',
                    shapeSettings: {
                        fill: "#626171",
                        strokeThickness: "1",
                        stroke: "#6F6F79",
                        highlightStroke: "#6F6F79",
                        valuePath: "name",
                        highlightColor: "gray"
                    },
                    shapeData: window.world_map
                }
            ]
        }
    }
});
