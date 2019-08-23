import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            dataSource: window.population_data,
            colorValuePath: "Population",
            borderThickness: 0,
            weightValuePath: "Population",
            showLegend: true,
            showTooltip: true,
            tooltipTemplate: 'template',
            enableGradient: true,
            leafItemSettings: {
                showLabels: true,
                labelPath: "Country"
            },
            legendSettings: {

                leftLabel: "20000000",
                width: 150,
                height: 20,
                rightLabel: "300000000",
                title: "Population",
                mode: "interactive",
                dockPosition:"top",
                alignment :"center"
            },
           rangeColorMapping: [{
                from: 29671000,
                to: 315646000,
                gradientColors: ["#fde6cc", "#fab665"]
            }],
           levels: [{
                groupPath: "Continent",
                groupGap: 5,
                headerHeight: 25,
                showHeader: true,
                headerTemplate: 'headertemplate'
            }]
        }
    }
});
