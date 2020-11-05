import Ember from 'ember';
export default Ember.Route.extend({
    model() {
        return {
            qualitativeRangeSize: 32, load: "loadBulletTheme",
            quantitativeScaleLength: 475,
            tooltipSettings: { visible: true },
            orientation: ej.datavisualization.BulletGraph.Orientation.Horizontal,
            flowDirection: ej.datavisualization.BulletGraph.FlowDirection.Forward,
            quantitativeScaleSettings: {
                location: { x: 110, y: 10 },
                minimum: 0,
                maximum: 10,
                interval: 1,
                minorTicksPerInterval: 4,
                majorTickSettings: { size: 13, width: 1, stroke: 'gray' },
                minorTickSettings: { size: 5, width: 1, stroke: 'gray' },
                tickPosition: ej.datavisualization.BulletGraph.TickPosition.Far,
                labelSettings: {
                    position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10
                },
                featuredMeasureSettings: { width: 6 },
                comparativeMeasureSettings: {
                    width: 5
                },
                featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7 }]
            },
            qualitativeRanges: [{
                rangeEnd: 4.3
            }, {
                rangeEnd: 7.3
            }, {
                rangeEnd: 10
            }],
            captionSettings: {
                textAngle: 0,
                location: { x: 17, y: 20 }, text: "Revenue YTD", font: { color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '12px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1 }, //'#707070'
                subTitle: {
                    textAngle: 0,
                    text: "$ in Thousands", location: { x: 10, y: 35 }, font: { color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '12px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1 } //'#707070'
                }
            },
            //Bullet Graph 2
            qualitativeRangeSize2: 32, height2: 140,
            quantitativeScaleLength2: 475,
            orientation2: ej.datavisualization.BulletGraph.Orientation.Horizontal,
            flowDirection2: ej.datavisualization.BulletGraph.FlowDirection.Forward,
            quantitativeScaleSettings2: {
                location: { x: 110, y: 10 },
                minimum: -10,
                maximum: 10,
                interval: 2,
                minorTicksPerInterval: 4,
                majorTickSettings: { size: 13, width: 1 },
                minorTickSettings: { size: 5, width: 1 },
                tickPosition: ej.datavisualization.BulletGraph.TickPosition.Far,
                labelSettings: {
                    position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10, labelSuffix: ' %'
                },
                featuredMeasureSettings: { width: 6 },
                comparativeMeasureSettings: {
                    width: 5
                },
                featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7 }]
            },
            qualitativeRanges2: [{
                rangeEnd: -4, rangeStroke: "#61a301"
            }, {
                rangeEnd: 3, rangeStroke: "#fcda21"
            }, {
                rangeEnd: 10, rangeStroke: "#d61e3f"
            }],
            captionSettings2: {
                textAngle: 0,
                location: { x: 60, y: 25 }, text: "Profit", font: { color: null, fontFamily: 'Segoe UI', fontStyle: ej.datavisualization.BulletGraph.FontStyle.Normal, size: '13px', fontWeight: ej.datavisualization.BulletGraph.FontWeight.Normal, opacity: 1 }, //'#707070'
            },

            //Bullet Graph 3
            qualitativeRangeSize3: 32,
            quantitativeScaleLength3: 475,
            orientation3: ej.datavisualization.BulletGraph.Orientation.Horizontal,
            flowDirection3: ej.datavisualization.BulletGraph.FlowDirection.Backward,
            quantitativeScaleSettings3: {
                location: { x: 105, y: 10 },
                minimum: -10,
                maximum: 10,
                interval: 2,
                minorTicksPerInterval: 4,
                majorTickSettings: { size: 13, width: 1, stroke: 'gray' },
                minorTickSettings: { size: 5, width: 1, stroke: 'gray' },
                tickPosition: ej.datavisualization.BulletGraph.TickPosition.Far,
                labelSettings: {
                    position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10, labelSuffix: ' %',
                },
                featuredMeasureSettings: { width: 6 },
                comparativeMeasureSettings: {
                    width: 5
                },
                featureMeasures: [{ value: -2, comparativeMeasureValue: -2 }]
            },
            qualitativeRanges3: [{
                rangeEnd: -4.3
            }, {
                rangeEnd: 4.3
            }, {
                rangeEnd: 10
            }],
            captionSettings3: {
                textAngle: 0,
                location: { x: 38, y: 25 }, text: "Expenses", font: { color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '13px', fontWeight: 'regular', opacity: 1 }, //'#707070'
            },

            //Bullet Graph 4
            qualitativeRangeSize4: 32,
            quantitativeScaleLength4: 475,
            tooltipSettings4: { visible: true },
            orientation4: ej.datavisualization.BulletGraph.Orientation.Horizontal,
            flowDirection4: ej.datavisualization.BulletGraph.FlowDirection.Backward,
            quantitativeScaleSettings4: {
                location: { x: 105, y: 10 },
                minimum: 0,
                maximum: 10,
                interval: 1,
                minorTicksPerInterval: 4,
                majorTickSettings: { size: 13, width: 1 },
                minorTickSettings: { size: 5, width: 1 },
                tickPosition: ej.datavisualization.BulletGraph.TickPosition.Far,
                labelSettings: {
                    position: ej.datavisualization.BulletGraph.LabelPosition.Below, offset: 14, size: 10, labelPrefix: '$ ', labelSuffix: 'K'
                },
                featuredMeasureSettings: { width: 6 },
                comparativeMeasureSettings: {
                    width: 5
                },
                featureMeasures: [{ value: 8, comparativeMeasureValue: 6.7, category: "" }]
            },
            qualitativeRanges4: [{
                rangeEnd: 4.3, rangeStroke: "#61a301", rangeOpacity: 1
            }, {
                rangeEnd: 7.3, rangeStroke: "#fcda21", rangeOpacity: 1
            }, {
                rangeEnd: 10, rangeStroke: "#d61e3f", rangeOpacity: 1
            }],
            captionSettings4: {
                textAngle: 0,
                location: { x: 17, y: 20 }, text: "Revenue YTD", font: { color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal', size: '12px', fontWeight: 'regular', opacity: 1 }, //'#707070'
                subTitle: {
                    textAngle: 0,
                    text: "$ in Thousands", location: { x: 10, y: 35 }, font: { color: null, fontFamily: 'Segoe UI', fontStyle: 'Normal ', size: '12px', fontWeight: 'regular', opacity: 1 } //'#707070'
                }
            }
        }
    }
});
