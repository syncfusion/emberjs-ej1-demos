import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            scrollSettings: {
                height: "530"
            },
            sheets: [{ rangeSettings: [{ dataSource: window.cellFormat, showHeader: false }] }],
            loadComplete: function () {
                var xlFormat = this.XLFormat;
                this.setWidthToColumns([150, 140, 130, 168, 110, 110, 127, 130]);
                xlFormat.format({ "style": { "font-weight": "bold", "color": "#4857a6" } }, "A1:A13");
                xlFormat.format({ "style": { "font-family": "Arial" } }, "B1:B13");
                xlFormat.format({ "style": { "font-family": "Times New Roman" } }, "C1:C13");
                xlFormat.format({ "style": { "font-family": "Tahoma" } }, "D1:D13");
                xlFormat.format({ "style": { "font-family": "Verdana" } }, "E1:E13");
                xlFormat.format({ "style": { "font-family": "Calibri" } }, "F1:F13");
                xlFormat.format({ "style": { "font-weight": "bold" } }, "B3");
                xlFormat.format({ "style": { "font-style": "italic" } }, "C3");
                xlFormat.format({ "style": { "color": "#ec2024" } }, "B7");
                xlFormat.format({ "style": { "background-color": "#FFEB9C" } }, "C7");
                xlFormat.format({ "style": { "color": "#006100", "background-color": "#C6EFCE" } }, "D7");
                xlFormat.format({ "style": { "text-decoration": "underline" } }, "B9");
                xlFormat.format({ "style": { "text-decoration": "line-through" } }, "C9");
                xlFormat.format({ "style": { "text-align": "left" } }, "B11");
                xlFormat.format({ "style": { "text-align": "center" } }, "C11");
                xlFormat.format({ "style": { "text-align": "right" } }, "D11");
                xlFormat.format({ "style": { "vertical-align": "top" } }, "B13");
                xlFormat.format({ "style": { "vertical-align": "middle" } }, "C13");
                xlFormat.format({ "style": { "vertical-align": "bottom" } }, "D13");
                xlFormat.format({ "style": { "font-size": "8pt" } }, "B5");
                xlFormat.format({ "style": { "font-size": "11pt" } }, "C5");
                xlFormat.format({ "style": { "font-size": "12pt" } }, "D5");
                xlFormat.format({ "style": { "font-size": "14pt" } }, "E5");
                xlFormat.format({ "style": { "font-size": "16pt" } }, "F5");
                this.XLResize.setRowHeight(12, 50);
                this.performSelection("A1");
            }
        }
    },
});
