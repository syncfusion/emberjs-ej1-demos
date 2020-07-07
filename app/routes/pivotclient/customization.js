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
            title: "OLAP Browser",
            beforeExport: function(args) {
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
                    this._pivotChart.model.primaryXAxis = {
                        title: {
                            text: "Customer Geography"
                        },
                        labelRotation: 270
                    };
                    this._pivotChart.model.primaryYAxis = {
                        title: {
                            text: "Internet Sales Amount"
                        }
                    };
                }
            },
            size: {
                width: "910px"
            },
            checked: true,
            btntext: "Apply",
            roundedCorner: true,
            btnsize: "small",
            type: ej.ButtonType.Button,
            controlPalcements: [{
                option: "Tab",
                value: ej.PivotClient.ControlPlacement.Tab
            }, {
                option: "Tile",
                value: ej.PivotClient.ControlPlacement.Tile
            }],
            displayModes: [{
                option: "Chart Only",
                value: ej.PivotClient.DisplayMode.ChartOnly
            }, {
                option: "Grid Only",
                value: ej.PivotClient.DisplayMode.GridOnly
            }, {
                option: "Chart and Grid",
                value: ej.PivotClient.DisplayMode.ChartAndGrid
            }],
            fields: {
                text: "option",
                value: "value"
            },
            controlValue: ej.PivotClient.ControlPlacement.Tab,
            displayValue: ej.PivotClient.DisplayMode.ChartAndGrid,
            ApplyChanges: function() {
                var ddlTarget1 = Ember.$('#ctrlPlace').data("ejDropDownList");
                var ddlTarget2 = Ember.$('#dispMode').data("ejDropDownList");
                var rbTarget1 = Ember.$('#Radio1').data("ejRadioButton");
                var rbTarget2 = Ember.$('#Radio2').data("ejRadioButton");
                var rbTarget3 = Ember.$('#Radio3').data("ejRadioButton");
                var rbTarget4 = Ember.$('#Radio4').data("ejRadioButton");
                var rbTarget5 = Ember.$('#Radio5').data("ejRadioButton");
                var rbTarget6 = Ember.$('#Radio6').data("ejRadioButton");
                var clientTarget = Ember.$('#PivotClient').data("ejPivotClient");
                var ctlPlace = ddlTarget1.model.text == "Tab" ? "tab" : ddlTarget1.model.text == "Tile" ? "tile" : "";
                var dispMode = ddlTarget2.model.dataSource[ddlTarget2.selectedIndexValue].value;
                var dftView = rbTarget1.model.checked ? "chart" : rbTarget2.model.checked ? "grid" : "chart";
                var tglPanel = rbTarget3.model.checked ? true : rbTarget4.model.checked ? false : false;
                var responsive = rbTarget5.model.checked ? true : rbTarget6.model.checked ? false : false;
                if (clientTarget != null) {
                    clientTarget._destroy();
                    Ember.$("#PivotClient").ejPivotClient({
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
                                    fieldName: "[Measures].[Internet Sales Amount]"
                                }],
                                axis: "columns"
                            }]
                        },
                        title: "OLAP Browser",
                        isResponsive: responsive,
                        displaySettings: {
                            mode: dispMode,
                            defaultView: dftView,
                            controlPlacement: ctlPlace,
                            enableTogglePanel: tglPanel,
                        },
                        load: "OnLoad",
                        beforeExport: function(args) {
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
                                this._pivotChart.model.primaryXAxis = {
                                    title: {
                                        text: "Customer Geography"
                                    },
                                    labelRotation: 270
                                };
                                this._pivotChart.model.primaryYAxis = {
                                    title: {
                                        text: "Internet Sales Amount"
                                    }
                                };
                            }
                        },
                    });
                }
            }
        }
    }
});