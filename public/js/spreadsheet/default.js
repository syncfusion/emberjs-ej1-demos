import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            scrollSettings: {
                height: "530"
            },
            importSettings: {
                importMapper: window.baseurl + "api/Spreadsheet/Import"
            },
            exportSettings: {
                excelUrl: window.baseurl + "api/Spreadsheet/ExcelExport",
                csvUrl: window.baseurl + "api/Spreadsheet/CsvExport",
                pdfUrl: window.baseurl + "api/Spreadsheet/PdfExport"
            },
            sheets: [{
                rangeSettings: [{ dataSource: window.defaultData, startCell: "A1" }]
            }],
            loadComplete: function() {
                var xlFormat = this.XLFormat;
                if (!this.isImport) {
                    this.setWidthToColumns([140, 128, 105, 100, 100, 110, 120, 120, 100]);   
                    xlFormat.format({ "style": { "font-weight": "bold" } }, "A1:H1");
                    xlFormat.format({ "type": "currency" }, "E2:H11");
                    this.XLRibbon.updateRibbonIcons();
                }
            }
        }
    },
});
