import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
             dataSource: [12, 14, 11, 12, 11, 15, 12, 10, 11, 12, 15, 13, 12, 11, 10, 13, 15, 12, 14, 16, 14, 12, 11],
             type: "line",
             size: { height: 40, width: 170 },
            //Column
             dataSourceColumn: [2, 6, -1, 1, 12, 5, -2, 7, -3, 5, 8, 10, ],
             negativePointColorColumn: "red",
             highPointColorColumn: "blue",
             tooltip: {
                 visible: true,
                 font: {
                     size: "12px",
                 }
             },
             typeColumn: "column",
             sizeColumn: { height: 100, width: 150 },
            //Area
             dataSourceArea: [12, -10, 11, 8, 17, 6, 2, -17, 13, -6, 8, 10, ],
             markerSettingsArea: { visible: true },
             highPointColorArea: "blue",
             lowPointColorArea: "orange",
             typeArea: "area",
             opacityArea: 0.5,
            //Winloss
             dataSourceWinloss: [12, 15, -11, 13, 17, 0, -12, 17, 13, -15, 8, 10, ],
             typeWinloss: "winloss",
             sizeWinloss: { height: 100, width: 150 },
            //pie1
             dataSourcePie1: [4, 6, 7],
             typePie: "pie",
             sizePie: { height: 40, width: 40 },
            //pie2
             dataSourcePie2: [8, 9, 1, ],
            //pie3
             dataSourcePie3: [2, 3, 5],
            //pie4
             dataSourcePie4: [10, 12, 11],

        }
    }
});
