import Ember from 'ember';

let data = ej.DataManager({url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true});
let query = ej.Query().from("Suppliers").select("SupplierID", "ContactName");
export default Ember.Route.extend({
    model() {
        return {
            dataSource: data,
            query: query,
            fields: { text: "ContactName", value: "SupplierID" },
            width: "100%",
            placeholder: "Select a Customer"
        }
    }
});
