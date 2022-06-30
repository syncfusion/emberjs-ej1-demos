import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
            data: window.gridData,
            cols:[
                        { field: "OrderID", headerText: "Order ID", width: 75 , textAlign: ej.TextAlign.Right},
                        { field: "CustomerID", headerText: "Customer ID", width: 80 },
                        { field: "EmployeeID", headerText: "Employee ID", width: 75, textAlign: ej.TextAlign.Right, priority: 4 },
                        { field: "Freight", width: 75, format: "{0:C}", textAlign: ej.TextAlign.Right, priority: 3 },
                        { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right, priority: 2 },
                        { field: "ShipCity", headerText: "Ship City", width: 110, priority: 2 }
                ],
            summaryRows: [
                    { title: "Sum", summaryColumns: [{ summaryType: ej.Grid.SummaryType.Sum, displayColumn: "Freight", dataMember: "Freight", format: "{0:C2}" }] },
                                    { title: "Average", summaryColumns: [{ summaryType: ej.Grid.SummaryType.Average, displayColumn: "Freight", dataMember: "Freight", format: "{0:C2}" }] },
                                    { title: "Smallest", summaryColumns: [{ summaryType: ej.Grid.SummaryType.Minimum,  dataMember: "Freight", displayColumn: "Freight", format: "{0:C2}" }] },
                                    { title: "Largest", summaryColumns: [{ summaryType: ej.Grid.SummaryType.Maximum, displayColumn: "Freight", dataMember: "Freight", format: "{0:C2}" }] }
                ]
        }
    },
});
