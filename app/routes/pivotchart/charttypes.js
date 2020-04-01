import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            dataSource: {
                data: "//bi.syncfusion.com/olap/msmdpump.dll", //data
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
                        fieldName: "[Measures].[Internet Sales Amount]",
                    }],
                    axis: "columns"
                }]
            },
            isResponsive: true,
            zooming: {
                enableScrollbar: true
            },
            type: ej.PivotChart.ChartTypes.Column,
            commonSeriesOptions: {
                enableAnimation: true,
                type: ej.PivotChart.ChartTypes.Column,
                tooltip: {
                    visible: true
                }
            },
            size: {
                height: "560px",
                width: "100%"
            },
            primaryXAxis: {
                title: {
                    text: "Date - Fiscal"
                },
                labelRotation: 0
            },
            primaryYAxis: {
                title: {
                    text: "Internet Sales Amount"
                }
            },
            legend: {
                visible: true,
                rowCount: 2
            },
            list: ["column", "line", "spline", "area", "bar", "pie", "pyramid", "stepline", "splinearea", "steparea",
                "stackingarea", "stackingcolumn", "stackingbar", "funnel", "doughnut", "scatter", "bubble"
            ],
            value: ej.PivotChart.ChartTypes.Column,
            onTypeChange: function(args) {
                var chartTarget = Ember.$('#PivotChart').data("ejPivotChart");
                chartTarget.model.type = args.text.toLowerCase();
                chartTarget.model.commonSeriesOptions.type = args.text.toLowerCase();
                if (Ember.$.inArray(chartTarget.model.type, ["line", "spline", "area", "splinearea", "stepline", "steparea", "stackingarea", "scatter"]) > -1)
                    chartTarget.model.commonSeriesOptions.marker = {
                        shape: ej.PivotChart.SymbolShapes.Circle,
                        size: {
                            height: 12,
                            width: 12
                        },
                        visible: true,
                        connectorLine: {
                            height: 30,
                            type: "line"
                        },
                        border: {
                            width: 3,
                            color: 'white'
                        }
                    };
                else if (Ember.$.inArray(chartTarget.model.type, ["funnel", "pyramid"]) > -1) {
                    chartTarget.model.commonSeriesOptions.marker = {
                        dataLabel: {
                            visible: true,
                            shape: 'none',
                            font: {
                                color: 'white',
                                size: '12px',
                                fontWeight: 'lighter'
                            }
                        }
                    }
                } else
                    chartTarget.model.commonSeriesOptions.marker = {
                        visible: false
                    };
                if (chartTarget.model.type == "pyramid" || chartTarget.model.type == "funnel")
                    chartTarget.model.legend.rowCount = 1;
                else
                    chartTarget.model.legend.rowCount = 2;
                if (Ember.$.inArray(chartTarget.model.type, ["pie", "doughnut"]) > -1)
                    chartTarget.model.commonSeriesOptions.explode = true;
                else
                    chartTarget.model.commonSeriesOptions.explode = false;
                chartTarget.renderControlSuccess({
                    "JsonRecords": JSON.stringify(chartTarget.getJSONRecords()),
                    "OlapReport": chartTarget.getOlapReport()
                });
            },

        }
    }
});