import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            dataSource: {
                data: "//bi.syncfusion.com/olap/msmdpump.dll",
                catalog: "Adventure Works DW 2008 SE",
                cube: "Adventure Works",
                rows: [{
                    fieldName: "[Date].[Fiscal]",
                    filterItems: {
                        filterType: "include",
                        values: ["[Date].[Fiscal].[Fiscal Year].&amp;[2004]"]
                    }
                }, ],
                columns: [{
                    fieldName: "[Customer].[Customer Geography]"
                }],
                values: [{
                    measures: [{
                            fieldName: "[Measures].[Internet Sales Amount]"
                        },
                        {
                            fieldName: "[Measures].[Internet Revenue Status]"
                        },
                        {
                            fieldName: "[Measures].[Internet Revenue Trend]"
                        },
                        {
                            fieldName: "[Measures].[Internet Revenue Goal]"
                        },
                    ],
                    axis: ej.PivotGauge.AxisName.Columns
                }]
            },
            labelFormatSettings: {
                decimalPlaces: 2
            },
            enableTooltip: true,
            isResponsive: true,
            backgroundColor: "transparent",
            scales: [{
                showRanges: true,
                radius: 150,
                showScaleBar: true,
                size: 1,
                border: {
                    width: 0.5
                },
                showIndicators: true,
                showLabels: true,
                pointers: [{
                        showBackNeedle: true,
                        backNeedleLength: 20,
                        length: 120,
                        width: 7
                    },
                    {
                        type: "marker",
                        markerType: ej.datavisualization.CircularGauge.MarkerType.Diamond,
                        distanceFromScale: 5,
                        placement: "center",
                        backgroundColor: "#29A4D9",
                        length: 25,
                        width: 15
                    }
                ],
                ticks: [{
                        type: "major",
                        distanceFromScale: 2,
                        height: 16,
                        width: 1,
                        color: "#8c8c8c"
                    },
                    {
                        type: "minor",
                        height: 6,
                        width: 1,
                        distanceFromScale: 2,
                        color: "#8c8c8c"
                    }
                ],
                labels: [{
                    color: "#8c8c8c"
                }],
                ranges: [{
                    distanceFromScale: -5,
                    backgroundColor: "#fc0606",
                    border: {
                        color: "#fc0606"
                    }
                }, {
                    distanceFromScale: -5
                }],
                customLabels: [{
                    position: {
                        x: 180,
                        y: 290
                    },
                    font: {
                        size: "10px",
                        fontFamily: "Segoe UI",
                        fontStyle: "Normal"
                    },
                    color: "#666666"
                }, {
                    position: {
                        x: 180,
                        y: 320
                    },
                    font: {
                        size: "10px",
                        fontFamily: "Segoe UI",
                        fontStyle: "Normal"
                    },
                    color: "#666666"
                }, {
                    position: {
                        x: 180,
                        y: 150
                    },
                    font: {
                        size: "12px",
                        fontFamily: "Segoe UI",
                        fontStyle: "Normal"
                    },
                    color: "#666666"
                }]
            }],
            countdata: ["1", "2", "3"],
            width: "110px",
            height: "22px",
            framedata: ["Full - Circular", "Semi - Circular"],
            frameindex: "Full - Circular",
            rowindex: "2",
            colindex: "3",
            checked: true,
            onchange1: function(args) {
                var pivotGauge = Ember.$("#PivotGauge").data("ejPivotGauge");
                var gaugeRows = Ember.$("#rowscount").data("ejDropDownList");
                var gaugeColumns = Ember.$("#columnscount").data("ejDropDownList");

                if (this._id == "rowscount" && (args.text != "0" || (gaugeColumns != undefined))) {
                    pivotGauge.model.rowsCount = args.text;
                    pivotGauge._renderControlSuccess({
                        "PivotRecords": JSON.stringify(pivotGauge.getJSONRecords()),
                        "OlapReport": pivotGauge.getOlapReport()
                    });
                } else if (this._id == "columnscount" && (args.text != "0" || gaugeRows.text != 0)) {
                    pivotGauge.model.columnsCount = args.text;
                    pivotGauge._renderControlSuccess({
                        "PivotRecords": JSON.stringify(pivotGauge.getJSONRecords()),
                        "OlapReport": pivotGauge.getOlapReport()
                    });
                } else if (args.text == "0" && (gaugeColumns != undefined && gaugeColumns.text == 0) && (gaugeRows != undefined && gaugeRows.text == 0)) {
                    pivotGauge.model.columnsCount = 0;
                    pivotGauge.model.rowsCount = 0;
                    if (pivotGauge.getJSONRecords())
                        pivotGauge._renderControlSuccess({
                            "PivotRecords": JSON.stringify(pivotGauge.getJSONRecords()),
                            "OlapReport": pivotGauge.getOlapReport()
                        });
                }
            },

            onchange: function(args) {
                var pivotGauge = Ember.$("#PivotGauge").data("ejPivotGauge");
                if (this._id == "frameType") {
                    if (args.type == "change" && args.text == "Semi - Circular") {
                        pivotGauge.model.frame.frameType = "halfcircle";
                        pivotGauge.model.frame.halfCircleFrameStartAngle = 180;
                        pivotGauge.model.scales[0].startAngle = 180;
                        pivotGauge.model.scales[0].sweepAngle = 180;
                        pivotGauge.model.scales[0].customLabels[2].position.y = 210
                        pivotGauge._renderControlSuccess({
                            "PivotRecords": JSON.stringify(pivotGauge.getJSONRecords()),
                            "OlapReport": pivotGauge.getOlapReport()
                        });
                    } else {
                        pivotGauge.model.frame.frameType = "fullcircle";
                        pivotGauge.model.scales[0].startAngle = 122;
                        pivotGauge.model.scales[0].sweepAngle = 296;
                        pivotGauge.model.scales[0].customLabels[2].position.y = 150
                        pivotGauge._renderControlSuccess({
                            "PivotRecords": JSON.stringify(pivotGauge.getJSONRecords()),
                            "OlapReport": pivotGauge.getOlapReport()
                        });
                    }
                }
                if (this._id == "check1" && !args.model.checked) {
                    pivotGauge.model.enableTooltip = false;
                    pivotGauge.refresh();
                } else if (this._id == "check1" && args.model.checked) {
                    pivotGauge.model.enableTooltip = true;
                    pivotGauge._renderControlSuccess({
                        "PivotRecords": JSON.stringify(pivotGauge.getJSONRecords()),
                        "OlapReport": pivotGauge.getOlapReport()
                    });
                } else if (this._id == "check2" && !args.model.checked) {
                    pivotGauge.model.showHeaderLabel = false;
                    pivotGauge._renderControlSuccess({
                        "PivotRecords": JSON.stringify(pivotGauge.getJSONRecords()),
                        "OlapReport": pivotGauge.getOlapReport()
                    });
                } else if (this._id == "check2" && args.model.checked) {
                    pivotGauge.model.showHeaderLabel = true;
                    pivotGauge._renderControlSuccess({
                        "PivotRecords": JSON.stringify(pivotGauge.getJSONRecords()),
                        "OlapReport": pivotGauge.getOlapReport()
                    });
                }
            }
        }
    }
});