import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            dataSource: {
                                    data: "//bi.syncfusion.com/olap/msmdpump.dll;Locale identifier=1033;", //data
                                    catalog: "Adventure Works DW 2008 SE",
                                    cube: "Adventure Works",
                                    rows: [
                                        {
                                            fieldName: "[Core Product Group]", isNamedSets: true
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
                                                    fieldName: "[Measures].[Internet Sales Amount]"
                                                }
                                            ],
                                            axis: "columns"
                                        }
                                    ]
                                },
        }
    }
});
