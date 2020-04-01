import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            dataSource: window.animation_DataSource,
            enableAnimation: true,
            valueMemberPath: "Population",
            levels: [
                { groupMemberPath: "Continent" },
                { groupMemberPath: "Country" },
                { groupMemberPath: "State" }
            ],
            dataLabelSettings: { visible: true },
            tooltip: { visible: true },
            innerRadius: 0.2,
            size: { height: "600" },
            title: { text: "Population Details" },
            legend: { visible: true, position: "top" },
            animationChange: function (args) {
                Ember.$("#SunburstChart").ejSunburstChart({ enableAnimation: args.isChecked });
            },
            animationTypeChange: function (args) {
                Ember.$("#SunburstChart").ejSunburstChart({ animationType: args.value.toLowerCase() });
            }
        }
    }
});
