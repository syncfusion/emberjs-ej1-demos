import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            //Initializing Primary X Axis	
            primaryXAxis:
            {
                title: { text: 'Countries' }
            },

            //Initializing Primary Y Axis	
            primaryYAxis:
            {
                range: { min: 0, max: 80, interval: 20 },
                title: { text: 'Medals' }
            },

            //Initializing Common Properties for all the series
            commonSeriesOptions:
            {
                type: 'column',
                enableAnimation: true,
                tooltip:
                {
                    visible: true,
                    format: "#point.x# : #point.y# #series.name# Medals"
                }
            },

            //Initializing Series
            series:
            [
                {
                    points: [{ x: "USA", y: 50 }, { x: "China", y: 40 },
                    { x: "Japan", y: 70 }, { x: "Australia", y: 60 },
                    { x: "France", y: 50 }, { x: "Germany", y: 40 },
                    { x: "Italy", y: 40 }, { x: "Sweden", y: 30 }],
                    name: 'Gold', fill: "rgba(135,206,235,1)"
                },
                {
                    points: [{ x: "USA", y: 70 }, { x: "China", y: 60 },
                    { x: "Japan", y: 60 }, { x: "Australia", y: 56 },
                    { x: "France", y: 45 }, { x: "Germany", y: 30 },
                    { x: "Italy", y: 35 }, { x: "Sweden", y: 25 }],
                    name: 'Silver', fill: "rgba(255,255,0,0.7)"
                },
                {
                    points: [{ x: "USA", y: 45 }, { x: "China", y: 55 },
                    { x: "Japan", y: 50 }, { x: "Australia", y: 40 },
                    { x: "France", y: 35 }, { x: "Germany", y: 22 },
                    { x: "Italy", y: 37 }, { x: "Sweden", y: 27 }],
                    name: 'Bronze', fill: "rgba(255,204,153,1)"
                }
            ],
            isResponsive: true,
            title: { text: 'Olympic Medals' },
            size: { height: "600" },
            legend: { visible: true, position: 'top' }
        }
    }
});
