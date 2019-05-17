import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            dataSource: {
                data: "//bi.syncfusion.com/olap/msmdpump.dll", //data
                catalog: "Adventure Works DW 2008 SE",
                cube: "Adventure Works",
                rows: [
                    {
                        fieldName: "[Date].[Fiscal]"
                    }
                ],
                columns: [
                    {
                        fieldName: "[Customer].[Customer Geography]"
                    }
                ],
                values: [
                    {
                        measures: [
                            {
                                fieldName: "[Measures].[Internet Sales Amount]",
                            }
                        ],
                        axis: "columns"
                    }
                ]
            },
            enableGroupingBar: true,
            pivotTableFieldListID: "PivotSchemaDesigner"
        }
    }
});
