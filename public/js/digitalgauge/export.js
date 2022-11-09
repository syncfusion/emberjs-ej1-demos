import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            width: 525, isResponsive: true,
            height: 305,
            items: [{
                segmentSettings: {
                    width: 1,
                    spacing: 0,
                },
                characterSettings: {
                    opacity: 0.8,
                },
                value: "Syncfusion",
                position: { x: 52, y: 52 }
            }],
            fileFormatChange: function (args) {
                Ember.$("#fileFormat").ejDropDownList({ enabled: args.isChecked });
            },
            buttonClick: function () {                
                var fileName = Ember.$("#fileName").val().trim() == "" ? "DigitalGauge" : Ember.$("#fileName").val();                
                var fileFormat = Ember.$("#fileFormat").ejDropDownList("option", "value");
                var flag = Ember.$("#CoreExportImage").ejDigitalGauge("exportImage", fileName, fileFormat);
                if (!flag)
                    alert("Sorry for the inconvenience. Export is currently not supported in Internet Explorer 9 and below version");                                
            }
        }
    }
});
