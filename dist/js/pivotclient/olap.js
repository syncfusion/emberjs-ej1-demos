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
							title: "OLAP Browser",
							beforeExport: function (args) {
								args.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap/Export";
							},
                            loadReport: function (args) {
                                if (args.fetchReportSetting)
                                    args.fetchReportSetting.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap";
                                else if (args.loadReportSetting)
                                    args.loadReportSetting.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap";
                                else
                                    args.saveReportSetting.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap";
                                return args;
                            },
                            saveReport: function (args) {
                                if (args.fetchReportSetting)
                                    args.fetchReportSetting.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap";
                                else if (args.loadReportSetting)
                                    args.loadReportSetting.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap";
                                else
                                    args.saveReportSetting.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap";
                                return args;
                            },
                            fetchReport: function (args) {
                                if (args.fetchReportSetting)
                                    args.fetchReportSetting.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap";
                                else if (args.loadReportSetting)
                                    args.loadReportSetting.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap";
                                else
                                    args.saveReportSetting.url = "//js.syncfusion.com/ejservices/api/PivotClient/Olap";
                                return args;
                            },
							renderSuccess: function (args) {
								this._pivotChart.model.load = "loadTheme";
								if (args._successAction == undefined || args._successAction == "Filter") {
									this._pivotChart.model.legend.rowCount = 2;
									this._pivotChart.model.primaryXAxis = { title: { text: "Customer Geography" }, labelRotation: 270 };
									this._pivotChart.model.primaryYAxis = { title: { text: "Internet Sales Amount" } };
								}
							},
							size:{width:"910px"}
        }
    }
});
