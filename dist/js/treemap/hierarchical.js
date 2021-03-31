import Ember from 'ember';
var hierarchical_sales_data = [
    {
        Name: "United States", Sales: 28092, Expense: 26000, States: [
            { Name: "New York", Sales: 2353, Expense: 2000 },
            { Name: "Los Angeles", Sales: 3453, Expense: 3000 },
            { Name: "San Francisco", Sales: 8456, Expense: 8000 },
            { Name: "Chicago", Sales: 6785, Expense: 7000 },
            { Name: "Miami", Sales: 7045, Expense: 6000 },
        ]
    },

    {
        Name: "Canada", Sales: 19240, Expense: 18500, States: [
            { Name: "Toronto", Sales: 7045, Expense: 7000 },
            { Name: "Vancouver", Sales: 4352, Expense: 4000 },
            { Name: "Winnipeg", Sales: 7843, Expense: 7500 }
        ]
    },

    {
        Name: "Mexico",Sales: 16980, Expense: 14500, States: [
            { Name: "Mexico City", Sales: 7843, Expense: 6500 },
            { Name: "Cancun", Sales: 6683, Expense: 6000 },
            { Name: "Acapulco", Sales: 2454, Expense: 2000 }
        ]
    },

];
export default Ember.Route.extend({
    model() {
        return {
            dataSource: hierarchical_sales_data,
                //Specifies data is present in hierarchical format
                isHierarchicalDatasource: true,
                borderBrush: "#666666",
                borderThickness: 0,
                tooltipTemplate: "tooltiptemp",
                showTooltip: true,
                colorValuePath: "Expense",
                weightValuePath: "Sales",
                desaturationColorMapping: { from: 1, to: 0.5, color: "#41B8C4", rangeMinimum: 2000, rangeMaximum: 8000 },
                levels: [
                  { groupPath: "States", groupGap: 3, showHeader: true, headerHeight: 25, headerTemplate: 'headertemplate', showLabels: true, labelTemplate: 'labeltemplate' }
                ],
                leafItemSettings: {
                    labelPath: "Name"
                }
        }
    }
});
