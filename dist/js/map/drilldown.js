import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        Load();
        IsValidImageUrl("content/images/map/backtext.png");
        function IsValidImageUrl(url) {
            var img = new Image();
            img.src = url;
            img.onerror = function () { Ember.$("#backtext").attr("src", "content/images/map/backtext.png"); };
        }
        function Load() {
            var button = document.getElementById("button");
            Ember.$(button).css("display", "none");
            var title = document.getElementById("title");
            Ember.$(title).css("display", "block");
        }
        return {
            shapeSelected: function (event) {
                if (event.model.baseMapIndex == 0) {
                    var mapObj = Ember.$("#Map").data("ejMap");
                    mapObj.model.enableAnimation = true;
                    mapObj.model.layers[0].selectedItems = [];
                    mapObj.model.layers[0].subLayers[0].selectedItems = [];
                    if (event.originalEvent[0].shapeData.properties.continent == "Africa") {
                        mapObj.option("baseMapIndex", 1);
                    }
                    else if (event.originalEvent[0].shapeData.properties.continent == "Asia") {
                        mapObj.option("baseMapIndex", 2);
                    }
                    else if (event.originalEvent[0].shapeData.properties.continent == "Europe") {
                        mapObj.option("baseMapIndex", 3);
                    }
                    else if (event.originalEvent[0].shapeData.properties.continent == "North America") {
                        mapObj.option("baseMapIndex", 4);
                    }
                    else if (event.originalEvent[0].shapeData.properties.continent == "Oceania") {
                        mapObj.option("baseMapIndex", 5);
                    }
                    else if (event.originalEvent[0].shapeData.properties.continent == "South America") {
                        mapObj.option("baseMapIndex", 6);
                    }
                    var button = document.getElementById("button");
                    Ember.$(button).css('background-color', '#0F77B7');
                    var title = document.getElementById("title");
                    Ember.$(title).css("display", "none");
                    Ember.$(button).fadeIn(500);
                }
            },
            zoomSettings: {
                level: 1,
                maxValue: 30,
                factor: 1,
                enableZoom: false
            },
            enableAnimation: true,
            layers: [
                {
                    layerType: "geometry",
                    enableSelection: true,
                    shapeDataPath: "name",
                    enableMouseHover: true,
                    shapePropertyPath: "name",
                    showMapItems: false,
                    dataSource: window.cont_countriesdata,
                    shapeSettings: {
                        fill: "#C3E6ED",
                        strokeThickness: "0.5",
                        stroke: "white",
                        highlightColor: "#63B7B7",
                        highlightStroke: "white",
                        valuePath: "name"

                    },
                    shapeData: window.world_map,
                    subLayers: [
                        {
                            shapeDataPath: "country",
                            shapePropertyPath: "name",
                            mapItemsTemplate: 'labeltemplate',
                            showMapItems: true,
                            enableMouseHover: true,
                            dataSource: window.randomcountriesData,
                            shapeSettings: {
                                fill: "#9FD0D3",
                                strokeThickness: "0.2",
                                stroke: "white",
                                highlightColor: "#63B7B7",
                            },
                            bubbleSettings: {
                                showBubble: true,
                                valuePath: "Sales",
                                minValue: 20,
                                maxValue: 30,
                                color: "#379F64",
                            },
                            shapeData: window.mapSalesData2
                        }

                    ]
                },
                { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: window.Africa },
                { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: window.Asia },
                { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: window.Europe },
                { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: window.NorthAmerica },
                { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: window.Oceania },
                { layerType: "geometry", enableMouseHover: true, shapeSettings: { stroke: "black", fill: "#C3E6ED", highlightColor: "#63B7B7", selectionColor: "#207BB2", strokeThickness: "0.5" }, shapeData: window.SouthAmerica }
            ]
        }
    }
});
