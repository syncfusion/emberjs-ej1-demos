import Ember from 'ember';
let dateFormat = "{0:" + ej.preferredCulture()["calendars"]["standard"]["patterns"]["d"] + "}";
let treeGridDataSource = [
    {
        "Name": "Windows",
        "DateModified": new Date("06/26/2017"),
        "Type": "File Folder",
        "DateCreated": new Date("06/16/2017"),
        "Children": [
            {
                "Name": "Users",
                "DateModified": new Date("06/26/2017"),
                "Type": "File Folder",
                "DateCreated": new Date("06/16/2017"),
                "Children": [
                    {
                        "Name": "Public",
                        "DateModified": new Date("06/26/2017"),
                        "Type": "File Folder",
                        "DateCreated": new Date("06/16/2017"),
                        "Children": [
                            {
                                "Name": "Documents ",
                                "DateModified": new Date("06/26/2017"),
                                "Type": "File Folder",
                                "DateCreated": new Date("06/16/2017"),
                                "Children": [
                                    { "Name": "Document 1", "DateModified": new Date("06/26/2017"), "Type": "HTML document", "DateCreated": new Date("06/16/2017"), },
                                    { "Name": "Document 2", "DateModified": new Date("06/26/2017"), "Type": "HTML document", "DateCreated": new Date("06/16/2017"), },
                                    { "Name": "Document 3", "DateModified": new Date("06/26/2017"), "Type": "HTML document", "DateCreated": new Date("06/16/2017"), }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
export default Ember.Route.extend({
    model() {
        return {
            dataSource: treeGridDataSource,
            isResponsive: true,
            sizeSettings: {
                height: '350px'
            },
            columns: [
                { field: "Name", headerText: "Name", isTemplateColumn: true, templateID: "customColumnTemplate" },
                { field: "Type", headerText: "Type" },
                { field: "DateCreated", headerText: "Date Created", format: dateFormat },
                { field: "DateModified", headerText: "Date Modified", format: dateFormat }]
        }
    }
});