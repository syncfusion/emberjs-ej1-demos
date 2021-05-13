import Ember from 'ember';
let data = ej.DataManager({url:window.baseurl + "Wcf/Northwind.svc/Tasks", crossDomain: true});

export default Ember.Route.extend({
   model(){
    return {
        dataSource: data,
        isResponsive:true,
        columns: [
            { headerText: "Backlog", key: "Open" },
            { headerText: "In Progress", key: "InProgress" },
            { headerText: "Testing", key: "Testing" },
            { headerText: "Done", key: "Close" }
        ],
        keyField: "Status",
        allowTitle: true,
        fields: {
           primaryKey: "Id",
           content: "Summary",
           tag: "Tags"
        },
        allowSelection: false
        }
    }
});
