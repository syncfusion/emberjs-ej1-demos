import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
            data: ej.DataManager({
                url: window.baseurl + "Wcf/Northwind.svc/Orders/"
            }),
            cols:[
                        { field: "OrderID", headerText: "Order ID", width: 75 , textAlign: ej.TextAlign.Right},
                        { field: "CustomerID", headerText: "Customer ID", width: 80 },
                        { field: "EmployeeID", headerText: "Employee ID", width: 75, textAlign: ej.TextAlign.Right, priority: 4 },
                        { field: "Freight", width: 75, format: "{0:C}", textAlign: ej.TextAlign.Right, priority: 3 },
                        { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right, priority: 2 },
                        { field: "ShipCity", headerText: "Ship City", width: 110, priority: 2 }
                ]
        }
    },
});
