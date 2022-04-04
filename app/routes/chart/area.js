import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            //Initializing Primary X Axis
            primaryXAxis:
            {
                axisLine: { visible: false },
                majorGridLines: { visible: false },
                majorTickLines: { visible: false },
                range: { min: 1900, max: 2000, interval: 10 },
                title: { text: 'Year' }
            },
            //Initializing Primary Y Axis
            primaryYAxis:
            {
                axisLine: { visible: false },
                majorTickLines: { visible: false },
                range: { min: 2, max: 5, interval: 0.5 },
                title: { text: 'Sales Amount in Millions' }
            },
            //Initializing Series	
            series:
            [
                {
                    points: [{ x: 1900, y: 4 }, { x: 1920, y: 3.0 }, { x: 1940, y: 3.8 }, { x: 1960, y: 3.4 },
                    { x: 1980, y: 3.2 }, { x: 2000, y: 3.9 }],
                    name: 'Product A',
                    type: 'Area',
                    enableAnimation: true,
                    border: { color: 'transparent' },
                    opacity: 0.5,
                    fill: '#69D2E7'
                },
                {
                    points: [{ x: 1900, y: 2.6 }, { x: 1920, y: 2.8 }, { x: 1940, y: 2.6 }, { x: 1960, y: 3 },
                    { x: 1980, y: 3.6 }, { x: 2000, y: 3 }],
                    name: 'Product B',
                    type: 'Area',
                    enableAnimation: true,
                    opacity: 0.5,
                    border: { color: 'transparent' },
                    fill: '#C4C24A'
                },
                {
                    points: [{ x: 1900, y: 2.8 }, { x: 1920, y: 2.5 }, { x: 1940, y: 2.8 }, { x: 1960, y: 3.2 },
                    { x: 1980, y: 2.9 }, { x: 2000, y: 2 }],
                    name: 'Product C',
                    type: 'Area',
                    enableAnimation: true,
                    opacity: 0.5,
                    border: { color: 'transparent' },
                    fill: '#6A4B82'
                }
            ],
            isResponsive: true,
            title: { text: 'Average Sales Comparison' },
            size: { height: "600" },
            legend: { visible: true }
        }
    }
});
