import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var data = GetData();
        return {
            primaryXAxis:
            {
                rangePadding: "none"
            },
            primaryYAxis:
            {
                labelFormat: '${value}',
                range: { min: 60, max: 160, interval: 20 }
            },
            crosshair: {
                visible: true,
                type: 'trackball',
                marker:
                {
                    shape: 'circle',
                    size:
                    {
                        height: 9, width: 9
                    },
                    visible: true,
                    border: { width: 1 }
                },
                line: {
                    color: 'transparent'
                }
            },
            series: [{
                type: 'line',
                name: 'Product X',
                enableAnimation: true,
                tooltip: { format: "#point.x#  : #point.y#", visible: true },
                border: { width: 2 },
            },
            {
                type: 'line',
                name: 'Product Y',
                enableAnimation: true,
                tooltip: { format: "#point.x#  : #point.y#", visible: true },
                border: { width: 2 },
            }
            ],
            load: function (sender) {
                sender.model.series[0].dataSource = data.Open;
                sender.model.series[0].xName = "XValue";
                sender.model.series[0].yName = "YValue";
                sender.model.series[1].dataSource = data.Close;
                sender.model.series[1].xName = "XValue";
                sender.model.series[1].yName = "YValue";
            },
            size: { height: "400" },
            legend: { visible: true },
            //RangeNavigator properties
            enableDeferredUpdateRange: true,
            paddingRange: "15",
            allowSnappingRange: true,
            valueType: "numeric",
            selectedRangeSettingsRange: {
                start: "100", end: "250"
            },
            isResponsiveRange: true,
            tooltipSettingsRange: {
                visible: true, backgroundColor: "gray", tooltipDisplayMode: "ondemand",
                font: {
                    color: 'white',
                    family: 'Segoe UI',
                    style: 'Normal',
                    size: '12px',
                    opacity: 1,
                    weight: 'regular'
                }
            },
            seriesRange: [
                {
                    name: 'Product A',
                    enableAnimation: false,
                    type: 'line',
                    dataSource: data.Open, xName: "XValue", yName: "YValue",
                    opacity: 0.5, fill: '#69D2E7',
                    border: { color: 'transparent', width: 2 }
                }
            ],
            isRTL: false,
            seriesSettingsRange: {
                type: 'column', enableAnimation: true,
            },
            rangeChangedRange: function (sender) {
                var chartobj = Ember.$("#ChartRange").data("ejChart");
                if (chartobj != null) {
                    chartobj.model.primaryXAxis.zoomPosition = sender.zoomPosition;
                    chartobj.model.primaryXAxis.zoomFactor = sender.zoomFactor;
                    Ember.$("#ChartRange").ejChart("redraw");
                }
            },
        }
        function GetData() {
            var series1 = [];
            var series2 = [];
            var value = 100;
            var value1 = 120;
            for (var i = 0; i < 351; i++) {
                if (Math.random() > .5) {
                    value += Math.random();
                    value1 += Math.random();
                } else {
                    value -= Math.random();
                    value1 -= Math.random();
                }
                var point1 = { XValue: i, YValue: value };
                var point2 = { XValue: i, YValue: value1 };
                series1.push(point1);
                series2.push(point2);
            }
            data = { Open: series1, Close: series2 };
            return data;
        }
    }
});
