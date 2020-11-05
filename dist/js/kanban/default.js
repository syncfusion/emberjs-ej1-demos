import Ember from 'ember';
let data = ej.DataManager(window.kanbanData).executeLocal(ej.Query().take(30));

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
