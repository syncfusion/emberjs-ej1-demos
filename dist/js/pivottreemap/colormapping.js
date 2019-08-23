import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            dataSource: {
                data: "//bi.syncfusion.com/olap/msmdpump.dll;Locale identifier=1033;", //data
                catalog: "Adventure Works DW 2008 SE",
                cube: "Adventure Works",
                rows: [{
                    fieldName: "[Date].[Fiscal]"
                }],
                columns: [{
                    fieldName: "[Customer].[Customer Geography]"
                }],

                values: [{
                    measures: [{
                        fieldName: "[Measures].[Customer Count]",
                    }],
                    axis: "columns"
                }]
            },
            list: ["Normal", "Range"],
            value: "Normal",
            onTypeChange: function() {
                var ddlTarget = Ember.$('#dropdownlist').data("ejDropDownList");
                var treemapTarget = Ember.$('#PivotTreeMapTreeMapContainer').data("ejTreeMap");
                treemapTarget.model.colorValuePath = "";
                treemapTarget.model.enableGradient = false;
                treemapTarget.model.showLegend = false;
                treemapTarget.model.legendSettings.leftLabel = "";
                treemapTarget.model.legendSettings.rightLabel = "";
                treemapTarget.model.rangeColorMapping = [];
                if (ddlTarget._currentText.toLocaleLowerCase() == "normal") {
                    treemapTarget.model.colorValuePath = "Index";
                    treemapTarget.model.rangeColorMapping.push({
                        color: "#9de24f",
                        from: "0",
                        to: "0"
                    }, {
                        color: "#a2e2fe",
                        from: "1",
                        to: "1"
                    }, {
                        color: "#ffff66",
                        from: "2",
                        to: "2"
                    }, {
                        color: "#FF0040",
                        from: "3",
                        to: "3"
                    }, {
                        color: "#f6b53f",
                        from: "4",
                        to: "4"
                    }, {
                        color: "#6FAAB0",
                        from: "5",
                        to: "5"
                    }, {
                        color: "#C4C24A",
                        from: "6",
                        to: "6"
                    })
                } else {
                    treemapTarget.model.colorValuePath = "Value";
                    treemapTarget.model.rangeColorMapping.push({
                        color: "#a2e2fe",
                        from: "0",
                        to: "10"
                    }, {
                        color: "#9de24f",
                        from: "11",
                        to: "250"
                    }, {
                        color: "#ffff66",
                        from: "251",
                        to: "1000"
                    }, {
                        color: "#C4C24A",
                        from: "1001",
                        to: "3000"
                    }, {
                        color: "#f6b53f",
                        from: "3001",
                        to: "5000"
                    }, {
                        color: "#6FAAB0",
                        from: "5001",
                        to: "10000"
                    }, {
                        color: "#FF0040",
                        from: "10001",
                        to: "20000"
                    })
                }
                treemapTarget.refresh();
            }
        }
    }
});