import Ember from 'ember';
let dateFormat = "{0:" + ej.preferredCulture()["calendars"]["standard"]["patterns"]["d"] + "}";
let sampleData = [
    {
        taskID: 1,
        taskName: "Planning",
        startDate: new Date("02/03/2017"),
        endDate: new Date("02/07/2017"),
        progress: 100,
        duration: 5,
        priority: "Normal",
        approved: false,
        subtasks: [
            { taskID: 2, taskName: "Plan timeline", startDate: new Date("02/03/2017"), endDate: new Date("02/07/2017"), duration: 5, progress: 100, priority: "Normal", approved: false },
            { taskID: 3, taskName: "Plan budget", startDate: new Date("02/03/2017"), endDate: new Date("02/07/2017"), duration: 5, progress: 100, approved: true },
            { taskID: 4, taskName: "Allocate resources", startDate: new Date("02/03/2017"), endDate: new Date("02/07/2017"), duration: 5, progress: 100, priority: "Critical", approved: false },
            { taskID: 5, taskName: "Planning complete", startDate: new Date("02/07/2017"), endDate: new Date("02/07/2017"), duration: 0, progress: 0, priority: "Low", approved: true }
        ]
    },
    {
        taskID: 6,
        taskName: "Design",
        startDate: new Date("02/10/2017"),
        endDate: new Date("02/14/2017"),
        duration: 3,
        progress: 86,
        priority: "High",
        approved: false,
        subtasks: [
            { taskID: 7, taskName: "Software Specification", startDate: new Date("02/10/2017"), endDate: new Date("02/12/2017"), duration: 3, progress: 60, priority: "Normal", approved: false },
            { taskID: 8, taskName: "Develop prototype", startDate: new Date("02/10/2017"), endDate: new Date("02/12/2017"), duration: 3, progress: 100, priority: "Critical", approved: false },
            { taskID: 9, taskName: "Get approval from customer", startDate: new Date("02/13/2017"), endDate: new Date("02/14/2017"), duration: 2, progress: 100, approved: true },
            { taskID: 10, taskName: "Design Documentation", startDate: new Date("02/13/2017"), endDate: new Date("02/14/2017"), duration: 2, progress: 100, approved: true },
            { taskID: 11, taskName: "Design complete", startDate: new Date("02/14/2017"), endDate: new Date("02/14/2017"), duration: 0, progress: 0, priority: "Normal", approved: true }
        ]
    },
    {
        taskID: 12,
        taskName: "Implementation Phase",
        startDate: new Date("02/17/2017"),
        endDate: new Date("02/27/2017"),
        priority: "Normal",
        approved: false,
        duration: 11,
        subtasks: [
            {
                taskID: 13,
                taskName: "Phase 1",
                startDate: new Date("02/17/2017"),
                endDate: new Date("02/27/2017"),
                priority: "High",
                approved: false,
                duration: 11,
                subtasks: [{
                    taskID: 14,
                    taskName: "Implementation Module 1",
                    startDate: new Date("02/17/2017"),
                    endDate: new Date("02/27/2017"),
                    priority: "Normal",
                    duration: 11,
                    approved: false,
                    subtasks: [
                        { taskID: 15, taskName: "Development Task 1", startDate: new Date("02/17/2017"), endDate: new Date("02/19/2017"), duration: 3, progress: "50", priority: "High", approved: false },
                        { taskID: 16, taskName: "Development Task 2", startDate: new Date("02/17/2017"), endDate: new Date("02/19/2017"), duration: 3, progress: "50", priority: "Low", approved: true },
                        { taskID: 17, taskName: "Testing", startDate: new Date("02/20/2017"), endDate: new Date("02/21/2017"), duration: 2, progress: "0", priority: "Normal", approved: true },
                        { taskID: 18, taskName: "Bug fix", startDate: new Date("02/24/2017"), endDate: new Date("02/25/2017"), duration: 2, progress: "0", priority: "Critical", approved: false },
                        { taskID: 19, taskName: "Customer review meeting", startDate: new Date("02/26/2017"), endDate: new Date("02/27/2017"), duration: 2, progress: "0", priority: "High", approved: false },
                        { taskID: 20, taskName: "Phase 1 complete", startDate: new Date("02/27/2017"), endDate: new Date("02/27/2017"), duration: 0, priority: "Low", approved: true }

                    ]
                }]
            }
        ]
    }
];
export default Ember.Route.extend({
    model() {
        return {
            dataSource: sampleData,
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                editMode: "cellEditing",
                rowPosition: "belowSelectedRow"

            },
            columns: [
                { field: "taskID", headerText: "Task Id", editType: "numericedit", width: 45 },
                { field: "taskName", headerText: "Task Name", editType: "stringedit" },
                { field: "startDate", headerText: "Start Date", editType: "datepicker", format: dateFormat },
                { field: "endDate", headerText: "End Date", editType: "datepicker", format: dateFormat },
                { field: "duration", headerText: "Duration", editType: "numericedit" },
                { field: "progress", headerText: "Progress", editType: "numericedit" }
            ],
            toolbarSettings: {
                showToolbar: true,
                toolbarItems: [ej.TreeGrid.ToolbarItems.Add,
                ej.TreeGrid.ToolbarItems.Edit,
                ej.TreeGrid.ToolbarItems.Delete,
                ej.TreeGrid.ToolbarItems.Update,
                ej.TreeGrid.ToolbarItems.Cancel,
                ej.TreeGrid.ToolbarItems.ExpandAll,
                ej.TreeGrid.ToolbarItems.CollapseAll,
                ej.TreeGrid.ToolbarItems.Search
                ]
            },
        }
    }
});