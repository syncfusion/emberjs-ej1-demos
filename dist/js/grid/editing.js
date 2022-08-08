import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
            data: window.gridData,
            cols:[
                        { field: "OrderID", headerText: "Order ID", width: 75, isPrimaryKey: true, textAlign: ej.TextAlign.Right},
                        { field: "CustomerID", headerText: "Customer ID", width: 80 },
                        { field: "EmployeeID", headerText: "Employee ID", width: 75, textAlign: ej.TextAlign.Right, priority: 4 },
                        { field: "Freight", width: 75, format: "{0:C}", textAlign: ej.TextAlign.Right, priority: 3 },
                        { field: "OrderDate", headerText: "Order Date", width: 80, format: "{0:MM/dd/yyyy}", textAlign: ej.TextAlign.Right, priority: 2 },
                        { field: "ShipCity", headerText: "Ship City", width: 110, priority: 2 }
                ],
            edit: { allowEditing: true, allowAdding: true, allowDeleting: true },
            toolbar: { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Add, ej.Grid.ToolBarItems.Edit, ej.Grid.ToolBarItems.Delete, ej.Grid.ToolBarItems.Update, ej.Grid.ToolBarItems.Cancel] }    
        }
    },
});
