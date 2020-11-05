import Ember from 'ember';
let dataManger= ej.DataManager({url:window.baseurl + "Wcf/Northwind.svc/", crossDomain: true});
 let query = ej.Query().from("Customers").take(10);
export default Ember.Route.extend({
   model(){
    return {
				dataSource: dataManger,
                fields: { text: "CustomerID" },
                query: query,
				height:"220",
				width:"auto",
         }
    }
});
