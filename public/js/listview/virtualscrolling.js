import Ember from 'ember';
let dataManger = ej.DataManager({ url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true });
let query = ej.Query().from("Customers");
export default Ember.Route.extend({
    model() {
        return {
            dataSource: dataManger,
            fieldSettings: { text: "CustomerID" },
            query: query, height: 300,
            totalItemsCount: 10,
            allowVirtualScrolling: true,
            virtualScrollMode: ej.VirtualScrollMode.Normal,
            dropWidth: "120px", selectedItemIndex: 0,
            onValueChange: function (args) {
                var dataManger = ej.DataManager({
                    url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
                });
                // Query creation
                var query = ej.Query()
                    .from("Customers");
                if (args.value == "enablevirtual") {
                    Ember.$("#selectcustomer").ejListView({
                        dataSource: dataManger,
                        fieldSettings: { text: "CustomerID" },
                        query: query,
                        virtualScrollMode: ej.VirtualScrollMode.Continuous,
                        height: 300,
                        allowVirtualScrolling: true
                    });
                }
                if (args.value == "disablevirtual") {
                    Ember.$$("#selectcustomer").ejListView({
                        dataSource: dataManger,
                        fieldSettings: { text: "CustomerID" },
                        query: query,
                        height: 300,
                        allowVirtualScrolling: true
                    });
                }
            },

        }
    }
});
