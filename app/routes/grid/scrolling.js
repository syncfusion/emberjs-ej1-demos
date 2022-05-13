import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
            data: window.gridData,
            cols:[
                        { field: "OrderID", headerText: "Order ID", width: 175 , textAlign: ej.TextAlign.Right},
                        { field: "CustomerID", headerText: "Customer ID", width: 180 },
                        { field: "EmployeeID", headerText: "Employee ID", width: 175, textAlign: ej.TextAlign.Right, priority: 4 },
                        { field: "Freight", width: 175, format: "{0:C}", textAlign: ej.TextAlign.Right, priority: 3 },
                        { field: "OrderDate", headerText: "Order Date", width: 180, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right, priority: 2 },
                        { field: "ShipCity", headerText: "Ship City", width: 110, priority: 2 }
                ],
            scroll: { width:600, height: 300 }
        }
    },
});
