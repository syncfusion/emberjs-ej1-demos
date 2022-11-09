import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
            dataSource: {
                                data: [
									{ Amount: 100, Country: "Canada", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Alberta" },
									{ Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Van", Quantity: 3, State: "British Columbia" },
									{ Amount: 300, Country: "Canada", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Brunswick" },
									{ Amount: 150, Country: "Canada", Date: "FY 2008", Product: "Bike", Quantity: 3, State: "Manitoba" },
									{ Amount: 200, Country: "Canada", Date: "FY 2006", Product: "Car", Quantity: 4, State: "Ontario" },
									{ Amount: 100, Country: "Canada", Date: "FY 2007", Product: "Van", Quantity: 1, State: "Quebec" },
									{ Amount: 200, Country: "France", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Charente-Maritime" },
									{ Amount: 250, Country: "France", Date: "FY 2006", Product: "Van", Quantity: 4, State: "Essonne" },
									{ Amount: 300, Country: "France", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Garonne (Haute)" },
									{ Amount: 150, Country: "France", Date: "FY 2008", Product: "Van", Quantity: 2, State: "Gers" },
									{ Amount: 200, Country: "Germany", Date: "FY 2006", Product: "Van", Quantity: 3, State: "Bayern" },
									{ Amount: 250, Country: "Germany", Date: "FY 2007", Product: "Car", Quantity: 3, State: "Brandenburg" },
									{ Amount: 150, Country: "Germany", Date: "FY 2008", Product: "Car", Quantity: 4, State: "Hamburg" },
									{ Amount: 200, Country: "Germany", Date: "FY 2008", Product: "Bike", Quantity: 4, State: "Hessen" },
									{ Amount: 150, Country: "Germany", Date: "FY 2007", Product: "Van", Quantity: 3, State: "Nordrhein-Westfalen" },
									{ Amount: 100, Country: "Germany", Date: "FY 2005", Product: "Bike", Quantity: 2, State: "Saarland" },
									{ Amount: 150, Country: "United Kingdom", Date: "FY 2008", Product: "Bike", Quantity: 5, State: "England" },
									{ Amount: 250, Country: "United States", Date: "FY 2007", Product: "Car", Quantity: 4, State: "Alabama" },
									{ Amount: 200, Country: "United States", Date: "FY 2005", Product: "Van", Quantity: 4, State: "California" },
									{ Amount: 100, Country: "United States", Date: "FY 2006", Product: "Bike", Quantity: 2, State: "Colorado" },
									{ Amount: 150, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "New Mexico" },
									{ Amount: 200, Country: "United States", Date: "FY 2005", Product: "Bike", Quantity: 4, State: "New York" },
									{ Amount: 250, Country: "United States", Date: "FY 2008", Product: "Car", Quantity: 3, State: "North Carolina" },
									{ Amount: 300, Country: "United States", Date: "FY 2007", Product: "Van", Quantity: 4, State: "South Carolina" }
								],
                                rows: [
                                        {
                                            fieldName: "Country",
                                            fieldCaption: "Country"
                                        },
                                        {
                                            fieldName: "State",
                                            fieldCaption: "State"
                                        },
                                        {
                                            fieldName: "Date",
                                            fieldCaption: "Date"
                                        }
                                    ],
                                    columns: [
                                        {
                                            fieldName: "Product",
                                            fieldCaption: "Product"
                                        }
                                    ],
                                    values: [
                                        {
                                            fieldName: "Amount",
                                            fieldCaption: "Amount"
                                        }
                                    ]
                            },
							isResponsive: true,
							zooming : { enableScrollbar : true},
							enableRTL: false,
							type: ej.PivotChart.ChartTypes.Column,
                            commonSeriesOptions: {
								enableAnimation: true,
								type: ej.PivotChart.ChartTypes.Column, tooltip: { visible: true }
							},
							size: { height: "640px", width: "100%" },
							primaryYAxis: { title: { text: "Amount" } },
							legend: { visible: true }
        }
    }
});
