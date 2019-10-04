import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
            dataSource: {
                                data: "//bi.syncfusion.com/olap/msmdpump.dll", //data
                                catalog: "Adventure Works DW 2008 SE",
                                cube: "Adventure Works",
                                rows: [
                                    {
                                        fieldName: "[Date].[Fiscal]"
                                    }
                                ],
                                columns: [
                                    {
                                        fieldName: "[Customer].[Customer Geography]"
                                    }
                                ],
                                values: [
                                    {
                                        measures: [
                                            {
                                                fieldName: "[Measures].[Internet Sales Amount]",
                                            }
                                        ],
                                        axis: "columns"
                                    }
                                ]
                            },
							isResponsive: true,zooming : { enableScrollbar : true},
                            type: ej.PivotChart.ChartTypes.Column,
							commonSeriesOptions: {
								enableAnimation: true,
								type: ej.PivotChart.ChartTypes.Column, tooltip: { visible: true }
							},
							size: { height: "560px", width: "100%" },
							primaryXAxis: { title: { text: "Date - Fiscal" }, labelRotation: 0 },
							primaryYAxis: { title: { text: "Internet Sales Amount" } },
							legend: { visible: true, rowCount: 2 },
        }
    }
});
