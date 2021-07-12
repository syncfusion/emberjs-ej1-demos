import Ember from 'ember';
let rowDragGanttData = [
    {
        "TaskID": 1,
        "TaskName": "Parent Task 1",
        "StartDate": new Date("02/27/2017"),
        "EndDate": new Date("03/03/2017"),
        "Progress": "40",
        "isManual": true,
        "Children": [
            { "TaskID": 2, "TaskName": "Child Task 1", "StartDate": new Date("02/27/2017"), "EndDate": new Date("03/03/2017"), "Progress": "40", duration: 4 },
            { "TaskID": 3, "TaskName": "Child Task 2", "StartDate": new Date("02/27/2017"), "EndDate": new Date("03/03/2017"), "Progress": "40", "isManual": true, duration: 4 },
            { "TaskID": 4, "TaskName": "Child Task 3", "StartDate": new Date("02/27/2017"), "EndDate": new Date("03/03/2017"), "Duration": 5, "Progress": "40", duration: 4 }
        ]
    },
    {
        "TaskID": 5,
        "TaskName": "Parent Task 2",
        "StartDate": new Date("03/06/2017"),
        "EndDate": new Date("03/10/2017"),
        "Progress": "40",
        "isManual": true,
        "Children": [
            { "TaskID": 6, "TaskName": "Child Task 1", "StartDate": new Date("03/06/2017"), "EndDate": new Date("03/10/2017"), "Progress": "40", duration: 4 },
            { "TaskID": 7, "TaskName": "Child Task 2", "StartDate": new Date("03/06/2017"), "EndDate": new Date("03/10/2017"), "Progress": "40", duration: 4 },
            { "TaskID": 8, "TaskName": "Child Task 3", "StartDate": new Date("03/06/2017"), "EndDate": new Date("03/10/2017"), "Progress": "40", "isManual": true, duration: 4 },
            { "TaskID": 9, "TaskName": "Child Task 4", "StartDate": new Date("03/06/2017"), "EndDate": new Date("03/10/2017"), "Progress": "40", "isManual": true, duration: 4 }
        ]
    },
    {
        "TaskID": 10,
        "TaskName": "Parent Task 3",
        "StartDate": new Date("03/13/2017"),
        "EndDate": new Date("03/17/2017"),
        "Progress": "40",
        "Children": [
            { "TaskID": 11, "TaskName": "Child Task 1", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", duration: 4 },
            { "TaskID": 12, "TaskName": "Child Task 2", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", duration: 4 },
            { "TaskID": 13, "TaskName": "Child Task 3", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", duration: 4 },
            { "TaskID": 14, "TaskName": "Child Task 4", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", "isManual": true, duration: 4 },
            { "TaskID": 15, "TaskName": "Child Task 5", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", duration: 4 }
        ]
    }

];
export default Ember.Route.extend({
    model() {
        return {
            dataSource: rowDragGanttData,
            scheduleStartDate: new Date("02/23/2017"),
            scheduleEndDate: new Date("04/10/2017"),
            dragTooltip: {
                showTooltip: true
            },
        }
    }
});