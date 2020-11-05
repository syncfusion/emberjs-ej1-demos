import Ember from 'ember';
export default Ember.Route.extend({

    model() {
        var dataManger = new ej.DataManager({
            url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
        });
        // Query creation
        var query = ej.Query().from("Products").take(10).where("UnitPrice", ej.FilterOperators.greaterThan, 18, false).where("UnitPrice", ej.FilterOperators.lessThanOrEqual, 40, false).where("UnitsInStock", ej.FilterOperators.greaterThan, 5, false).where("UnitsInStock", ej.FilterOperators.lessThanOrEqual, 45, false);
        return {
            height: 540, enableAnimation: true, qualitativeRangeSize: 320,
            quantitativeScaleLength: 475, tooltipSettings: { template: "Tooltip", visible: true }, orientation: ej.datavisualization.BulletGraph.Orientation.Vertical,
            flowDirection: ej.datavisualization.BulletGraph.FlowDirection.Backward,
            fields: {
                dataSource: dataManger, query: query, category: "ProductID",
                featureMeasures: "UnitPrice",
                comparativeMeasure: "UnitsInStock"
            },
            quantitativeScaleSettings: {
                location: { x: 50, y: 60 },
                minimum: 5,
                maximum: 45,
                interval: 10,
                minorTicksPerInterval: 4,
                tickPosition: ej.datavisualization.BulletGraph.TickPosition.Near,
                majorTickSettings: { width: 1, size: 13, stroke: 'gray' },
                minorTickSettings: { width: 1, size: 5, stroke: 'gray' },
                labelSettings: {
                    position: ej.datavisualization.BulletGraph.LabelPosition.Above, offset: 15, size: 10
                }
            },
            qualitativeRanges: [{
                rangeEnd: 25
            }, {
                rangeEnd: 37
            }, {
                rangeEnd: 45
            }],
            captionSettings: {
                textAngle: 270,
                location: { x: 15, y: 290 }, text: "Product (with ID's)", font: { color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '12px', fontWeight: 'regular', opacity: 1 }, //'#707070'
                subTitle: {
                    textAngle: 0,
                    text: "Production in Units", location: { x: 170, y: 540 }, font: { color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal ', size: '12px', fontWeight: 'regular', opacity: 1 } //'#707070'
                }
            }
        }
    }
});
