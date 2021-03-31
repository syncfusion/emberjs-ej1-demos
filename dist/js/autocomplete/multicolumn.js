import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
        dataSource: window.gridData,
        fields: { key: "OrderID", text: "ShipCity" },
        highlightSearch: true,
        watermarkText: "Select a order",
        width:"100%",
        showPopupButton: true,
        multiColumnSettings:{
        stringFormat: "{0}  ({3}) ({1})",
        enable:true,
        showHeader: true,
        columns: [{
        field: "CustomerID",
        headerText: "CustomerID",
        },
        {
        field: "OrderID",
        headerText: "OrderID"
        },
        {
        field: "EmployeeID",
        headerText: "EmployeeID"
        },
        {
        field: "ShipCity",
        headerText: "ShipCity"
        }
    ]}
        }
    }
});
