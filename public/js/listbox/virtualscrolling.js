import Ember from 'ember';
let dataManger = ej.DataManager({ url: window.baseurl + "Wcf/Northwind.svc/", crossDomain: true });
let query = ej.Query().from("Customers");
export default Ember.Route.extend({
    model() {
        return {
            dataSource: dataManger,
            fields: { text: "CustomerID" },
            itemRequestCount: 10,
            query: query,
            allowVirtualScrolling: true,
            height: "220",
            width: "auto",
            dropWidth: "120px",
            selectedItemIndex: 0,
            onValueChange: function (args) {
                var dataManger = ej.DataManager({
                    url:window.baseurl + "Wcf/Northwind.svc/", crossDomain: true
                });
                // Query creation
                var query = ej.Query()
                    .from("Customers");
                if (args.value == "enablevirtual") {
                    Ember.$("#selectcustomer").ejListBox({
                        dataSource: dataManger,
                        fields: { text: "CustomerID" },
                        query: query, virtualScrollMode: ej.VirtualScrollMode.Continuous, allowVirtualScrolling: true
                    });
                }
                if (args.value == "disablevirtual") {
                    Ember.$("#selectcustomer").ejListBox({
                        dataSource: dataManger,
                        fields: { text: "CustomerID" },
                        query: query, allowVirtualScrolling: true
                    });
                }
            },

        }
    }
});
