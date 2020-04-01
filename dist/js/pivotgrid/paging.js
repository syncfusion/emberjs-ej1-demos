import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            dataSource: {
                data: [{
                        Amount: 100,
                        Country: "Canada",
                        Date: "FY 2005",
                        Product: "Bike",
                        Quantity: 2,
                        State: "Alberta"
                    },
                    {
                        Amount: 200,
                        Country: "Canada",
                        Date: "FY 2006",
                        Product: "Van",
                        Quantity: 3,
                        State: "British Columbia"
                    },
                    {
                        Amount: 300,
                        Country: "Canada",
                        Date: "FY 2007",
                        Product: "Car",
                        Quantity: 4,
                        State: "Brunswick"
                    },
                    {
                        Amount: 150,
                        Country: "Canada",
                        Date: "FY 2008",
                        Product: "Bike",
                        Quantity: 3,
                        State: "Manitoba"
                    },
                    {
                        Amount: 200,
                        Country: "Canada",
                        Date: "FY 2006",
                        Product: "Car",
                        Quantity: 4,
                        State: "Ontario"
                    },
                    {
                        Amount: 100,
                        Country: "Canada",
                        Date: "FY 2007",
                        Product: "Van",
                        Quantity: 1,
                        State: "Quebec"
                    },
                    {
                        Amount: 200,
                        Country: "France",
                        Date: "FY 2005",
                        Product: "Bike",
                        Quantity: 2,
                        State: "Charente-Maritime"
                    },
                    {
                        Amount: 250,
                        Country: "France",
                        Date: "FY 2006",
                        Product: "Van",
                        Quantity: 4,
                        State: "Essonne"
                    },
                    {
                        Amount: 300,
                        Country: "France",
                        Date: "FY 2007",
                        Product: "Car",
                        Quantity: 3,
                        State: "Garonne (Haute)"
                    },
                    {
                        Amount: 150,
                        Country: "France",
                        Date: "FY 2008",
                        Product: "Van",
                        Quantity: 2,
                        State: "Gers"
                    },
                    {
                        Amount: 200,
                        Country: "Germany",
                        Date: "FY 2006",
                        Product: "Van",
                        Quantity: 3,
                        State: "Bayern"
                    },
                    {
                        Amount: 250,
                        Country: "Germany",
                        Date: "FY 2007",
                        Product: "Car",
                        Quantity: 3,
                        State: "Brandenburg"
                    },
                    {
                        Amount: 150,
                        Country: "Germany",
                        Date: "FY 2008",
                        Product: "Car",
                        Quantity: 4,
                        State: "Hamburg"
                    },
                    {
                        Amount: 200,
                        Country: "Germany",
                        Date: "FY 2008",
                        Product: "Bike",
                        Quantity: 4,
                        State: "Hessen"
                    },
                    {
                        Amount: 150,
                        Country: "Germany",
                        Date: "FY 2007",
                        Product: "Van",
                        Quantity: 3,
                        State: "Nordrhein-Westfalen"
                    },
                    {
                        Amount: 100,
                        Country: "Germany",
                        Date: "FY 2005",
                        Product: "Bike",
                        Quantity: 2,
                        State: "Saarland"
                    },
                    {
                        Amount: 150,
                        Country: "United Kingdom",
                        Date: "FY 2008",
                        Product: "Bike",
                        Quantity: 5,
                        State: "England"
                    },
                    {
                        Amount: 250,
                        Country: "United States",
                        Date: "FY 2007",
                        Product: "Car",
                        Quantity: 4,
                        State: "Alabama"
                    },
                    {
                        Amount: 200,
                        Country: "United States",
                        Date: "FY 2005",
                        Product: "Van",
                        Quantity: 4,
                        State: "California"
                    },
                    {
                        Amount: 100,
                        Country: "United States",
                        Date: "FY 2006",
                        Product: "Bike",
                        Quantity: 2,
                        State: "Colorado"
                    },
                    {
                        Amount: 150,
                        Country: "United States",
                        Date: "FY 2008",
                        Product: "Car",
                        Quantity: 3,
                        State: "New Mexico"
                    },
                    {
                        Amount: 200,
                        Country: "United States",
                        Date: "FY 2005",
                        Product: "Bike",
                        Quantity: 4,
                        State: "New York"
                    },
                    {
                        Amount: 250,
                        Country: "United States",
                        Date: "FY 2008",
                        Product: "Car",
                        Quantity: 3,
                        State: "North Carolina"
                    },
                    {
                        Amount: 300,
                        Country: "United States",
                        Date: "FY 2007",
                        Product: "Van",
                        Quantity: 4,
                        State: "South Carolina"
                    }
                ],
                rows: [{
                        fieldName: "Country",
                        fieldCaption: "Country"
                    },
                    {
                        fieldName: "State",
                        fieldCaption: "State"
                    }
                ],
                columns: [{
                    fieldName: "Product",
                    fieldCaption: "Product"
                }],
                values: [{
                        fieldName: "Amount",
                        fieldCaption: "Amount"
                    },
                    {
                        fieldName: "Quantity",
                        fieldCaption: "Quantity"
                    }
                ],
                filters: [],
                pagerOptions: {
                    categoricalPageSize: 5,
                    seriesPageSize: 5,
                    categoricalCurrentPage: 1,
                    seriesCurrentPage: 1
                }
            },
			enablePaging: true,
			renderSuccess: function (){
					var pagerDiv = ej.buildTag("div#Pager", "", {
                        "margin-top": "10px"
                    })[0].outerHTML;
                    Ember.$(pagerDiv).appendTo(".e-container-pivotgrid");
                    Ember.$("#Pager").ejPivotPager({
                        mode: ej.PivotPager.Mode.Both,
                        targetControlID: "PivotGrid"
                    });
			},
            checked: true,
            renderGrid: function() {
                var paging = Ember.$('#paging').data("ejRadioButton");
                var rdbRelational = Ember.$('#rdbRelational').data("ejRadioButton");
                Ember.$(".e-pivotgrid").remove();
                Ember.$(".e-pivotpager").remove();
                var clientData = rdbRelational.model.checked ? {
                    data: [{
                            Amount: 100,
                            Country: "Canada",
                            Date: "FY 2005",
                            Product: "Bike",
                            Quantity: 2,
                            State: "Alberta"
                        },
                        {
                            Amount: 200,
                            Country: "Canada",
                            Date: "FY 2006",
                            Product: "Van",
                            Quantity: 3,
                            State: "British Columbia"
                        },
                        {
                            Amount: 300,
                            Country: "Canada",
                            Date: "FY 2007",
                            Product: "Car",
                            Quantity: 4,
                            State: "Brunswick"
                        },
                        {
                            Amount: 150,
                            Country: "Canada",
                            Date: "FY 2008",
                            Product: "Bike",
                            Quantity: 3,
                            State: "Manitoba"
                        },
                        {
                            Amount: 200,
                            Country: "Canada",
                            Date: "FY 2006",
                            Product: "Car",
                            Quantity: 4,
                            State: "Ontario"
                        },
                        {
                            Amount: 100,
                            Country: "Canada",
                            Date: "FY 2007",
                            Product: "Van",
                            Quantity: 1,
                            State: "Quebec"
                        },
                        {
                            Amount: 200,
                            Country: "France",
                            Date: "FY 2005",
                            Product: "Bike",
                            Quantity: 2,
                            State: "Charente-Maritime"
                        },
                        {
                            Amount: 250,
                            Country: "France",
                            Date: "FY 2006",
                            Product: "Van",
                            Quantity: 4,
                            State: "Essonne"
                        },
                        {
                            Amount: 300,
                            Country: "France",
                            Date: "FY 2007",
                            Product: "Car",
                            Quantity: 3,
                            State: "Garonne (Haute)"
                        },
                        {
                            Amount: 150,
                            Country: "France",
                            Date: "FY 2008",
                            Product: "Van",
                            Quantity: 2,
                            State: "Gers"
                        },
                        {
                            Amount: 200,
                            Country: "Germany",
                            Date: "FY 2006",
                            Product: "Van",
                            Quantity: 3,
                            State: "Bayern"
                        },
                        {
                            Amount: 250,
                            Country: "Germany",
                            Date: "FY 2007",
                            Product: "Car",
                            Quantity: 3,
                            State: "Brandenburg"
                        },
                        {
                            Amount: 150,
                            Country: "Germany",
                            Date: "FY 2008",
                            Product: "Car",
                            Quantity: 4,
                            State: "Hamburg"
                        },
                        {
                            Amount: 200,
                            Country: "Germany",
                            Date: "FY 2008",
                            Product: "Bike",
                            Quantity: 4,
                            State: "Hessen"
                        },
                        {
                            Amount: 150,
                            Country: "Germany",
                            Date: "FY 2007",
                            Product: "Van",
                            Quantity: 3,
                            State: "Nordrhein-Westfalen"
                        },
                        {
                            Amount: 100,
                            Country: "Germany",
                            Date: "FY 2005",
                            Product: "Bike",
                            Quantity: 2,
                            State: "Saarland"
                        },
                        {
                            Amount: 150,
                            Country: "United Kingdom",
                            Date: "FY 2008",
                            Product: "Bike",
                            Quantity: 5,
                            State: "England"
                        },
                        {
                            Amount: 250,
                            Country: "United States",
                            Date: "FY 2007",
                            Product: "Car",
                            Quantity: 4,
                            State: "Alabama"
                        },
                        {
                            Amount: 200,
                            Country: "United States",
                            Date: "FY 2005",
                            Product: "Van",
                            Quantity: 4,
                            State: "California"
                        },
                        {
                            Amount: 100,
                            Country: "United States",
                            Date: "FY 2006",
                            Product: "Bike",
                            Quantity: 2,
                            State: "Colorado"
                        },
                        {
                            Amount: 150,
                            Country: "United States",
                            Date: "FY 2008",
                            Product: "Car",
                            Quantity: 3,
                            State: "New Mexico"
                        },
                        {
                            Amount: 200,
                            Country: "United States",
                            Date: "FY 2005",
                            Product: "Bike",
                            Quantity: 4,
                            State: "New York"
                        },
                        {
                            Amount: 250,
                            Country: "United States",
                            Date: "FY 2008",
                            Product: "Car",
                            Quantity: 3,
                            State: "North Carolina"
                        },
                        {
                            Amount: 300,
                            Country: "United States",
                            Date: "FY 2007",
                            Product: "Van",
                            Quantity: 4,
                            State: "South Carolina"
                        }
                    ],
                    cube: "",
                    rows: [{
                        fieldName: "Country",
                        fieldCaption: "Country"
                    }, {
                        fieldName: "State",
                        fieldCaption: "State"
                    }],
                    columns: [{
                        fieldName: "Product",
                        fieldCaption: "Product"
                    }],
                    values: [{
                        fieldName: "Amount",
                        fieldCaption: "Amount"
                    }, {
                        fieldName: "Quantity",
                        fieldCaption: "Quantity"
                    }],
                    filters: [],
                    pagerOptions: {
                        categoricalPageSize: 5,
                        seriesPageSize: 5,
                        categoricalCurrentPage: 1,
                        seriesCurrentPage: 1
                    }
                } : {
                    data: "//bi.syncfusion.com/olap/msmdpump.dll",
                    catalog: "Adventure Works DW 2008 SE",
                    cube: "Adventure Works",
                    rows: [{
                        fieldName: "[Customer].[Customer Geography]"
                    }],
                    columns: [{
                        fieldName: "[Date].[Date]"
                    }],
                    values: [{
                        measures: [{
                            fieldName: "[Measures].[Internet Sales Amount]"
                        }],
                        axis: "columns"
                    }],
                    filters: [],
                    pagerOptions: {
                        categoricalPageSize: 5,
                        seriesPageSize: 5,
                        categoricalCurrentPage: 1,
                        seriesCurrentPage: 1
                    }
                }
                var gridPanel = ej.buildTag("div#PivotGrid", "", {
                    height: paging.model.checked ? "auto" : "290px",
                    width: "100%"
                })[0].outerHTML;
                if (paging.model.checked) {
                    var pagerDiv = ej.buildTag("div#Pager", "", {
                        "margin-top": "10px"
                    })[0].outerHTML;
                    Ember.$(gridPanel).appendTo(".e-container-pivotgrid");
                    Ember.$(pagerDiv).appendTo(".e-container-pivotgrid");
                    Ember.$("#PivotGrid").ejPivotGrid({
                        dataSource: clientData,
                        enablePaging: true
                    });
                    Ember.$("#Pager").ejPivotPager({
                        mode: ej.PivotPager.Mode.Both,
                        targetControlID: "PivotGrid"
                    });
                } else {
                    Ember.$(gridPanel).appendTo(".e-container-pivotgrid");
                    Ember.$(".e-container-pivotgrid").children().eq(0).height("330");
                    Ember.$("#PivotGrid").ejPivotGrid({
                        dataSource: clientData,
                        enableVirtualScrolling: true
                    });
                }
            }
        }
    }
});