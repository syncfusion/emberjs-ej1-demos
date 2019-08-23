import Ember from 'ember';
let dateFormat = "{0:" + ej.preferredCulture()["calendars"]["standard"]["patterns"]["d"] + "}";
let pagingdata = [
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
                subtasks: [
                    { taskID: 15, taskName: "Development Task 1", startDate: new Date("02/17/2017"), endDate: new Date("02/19/2017"), duration: 3, progress: "50", priority: "High", approved: false },
                    { taskID: 16, taskName: "Development Task 2", startDate: new Date("02/17/2017"), endDate: new Date("02/19/2017"), duration: 3, progress: "50", priority: "Low", approved: true },
                    { taskID: 17, taskName: "Testing", startDate: new Date("02/20/2017"), endDate: new Date("02/21/2017"), duration: 2, progress: "0", priority: "Normal", approved: true },
                    { taskID: 18, taskName: "Bug fix", startDate: new Date("02/24/2017"), endDate: new Date("02/25/2017"), duration: 2, progress: "0", priority: "Critical", approved: false },
                    { taskID: 19, taskName: "Customer review meeting", startDate: new Date("02/26/2017"), endDate: new Date("02/27/2017"), duration: 2, progress: "0", priority: "High", approved: false },
                    { taskID: 20, taskName: "Phase 1 complete", startDate: new Date("02/27/2017"), endDate: new Date("02/27/2017"), duration: 0, priority: "Low", approved: true }

                ]
            },

            {
                taskID: 21,
                taskName: "Phase 2",
                startDate: new Date("02/17/2017"),
                endDate: new Date("02/28/2017"),
                priority: "High",
                approved: false,
                duration: 12,
                subtasks: [
                    { taskID: 23, taskName: "Development Task 1", startDate: new Date("02/17/2017"), endDate: new Date("02/20/2017"), duration: 4, progress: "50", priority: "Normal", approved: true },
                    { taskID: 24, taskName: "Development Task 2", startDate: new Date("02/17/2017"), endDate: new Date("02/20/2017"), duration: 4, progress: "50", priority: "Critical", approved: true },
                    { taskID: 25, taskName: "Testing", startDate: new Date("02/21/2017"), endDate: new Date("02/24/2017"), duration: 2, progress: "0", priority: "High", approved: false },
                    { taskID: 26, taskName: "Bug fix", startDate: new Date("02/25/2017"), endDate: new Date("02/26/2017"), duration: 2, progress: "0", priority: "Low", approved: false },
                    { taskID: 27, taskName: "Customer review meeting", startDate: new Date("02/27/2017"), endDate: new Date("02/28/2017"), duration: 2, progress: "0", priority: "Critical", approved: true },
                    { taskID: 28, taskName: "Phase 2 complete", startDate: new Date("02/28/2017"), endDate: new Date("02/28/2017"), duration: 0, priority: "Normal", approved: false }

                ]
            },

            {
                taskID: 29,
                taskName: "Phase 3",
                startDate: new Date("02/17/2017"),
                endDate: new Date("02/27/2017"),
                priority: "Normal",
                approved: false,
                duration: 11,
                subtasks: [
                    { taskID: 31, taskName: "Development Task 1", startDate: new Date("02/17/2017"), endDate: new Date("02/19/2017"), duration: 3, progress: "50", priority: "Low", approved: true },
                    { taskID: 32, taskName: "Development Task 2", startDate: new Date("02/17/2017"), endDate: new Date("02/19/2017"), duration: 3, progress: "50", priority: "Normal", approved: false },
                    { taskID: 33, taskName: "Testing", startDate: new Date("02/20/2017"), endDate: new Date("02/21/2017"), duration: 2, progress: "0", priority: "Critical", approved: true },
                    { taskID: 34, taskName: "Bug fix", startDate: new Date("02/24/2017"), endDate: new Date("02/25/2017"), duration: 2, progress: "0", priority: "High", approved: false },
                    { taskID: 35, taskName: "Customer review meeting", startDate: new Date("02/26/2017"), endDate: new Date("02/27/2017"), duration: 2, progress: "0", priority: "Normal", approved: true },
                    { taskID: 36, taskName: "Phase 3 complete", startDate: new Date("02/27/2017"), endDate: new Date("02/27/2017"), duration: 0, priority: "Critical", approved: false }
                ]
            }
        ]
    }
];
let x = 0, l = 0, z = "", data = [];
for (let p = 1; p < 11; p++) {

    for (let i = 0; i < 3; i++) {
        let parent = {};
        parent["taskID"] = ++x;
        parent["taskName"] = pagingdata[i].taskName + z;
        parent["startDate"] = pagingdata[i].startDate
        parent["endDate"] = pagingdata[i].endDate;
        parent["duration"] = pagingdata[i].duration
        parent["status"] = Math.round(Math.random() * 100);
        let d = [];
        if (ej.isNullOrUndefined(pagingdata[i].subtasks)) {
            parent["subtasks"] = d;
            data[i] = parent;
            continue;
        }
        for (let j = 0; j < pagingdata[i].subtasks.length; j++) {
            let child = {};
            child["taskID"] = ++x;
            child["taskName"] = pagingdata[i].subtasks[j].taskName + z;
            child["startDate"] = pagingdata[i].subtasks[j].startDate;
            child["endDate"] = pagingdata[i].subtasks[j].endDate;
            child["duration"] = pagingdata[i].subtasks[j].duration;
            child["status"] = Math.round(Math.random() * 100);
            let y = [];
            if (ej.isNullOrUndefined(pagingdata[i].subtasks[j].subtasks)) {
                d.push(child);
                continue;
            }
            for (let k = 0; k < pagingdata[i].subtasks[j].subtasks.length; k++) {
                let c = {};
                c["taskID"] = ++x;
                c["taskName"] = pagingdata[i].subtasks[j].subtasks[k].taskName + z;
                c["startDate"] = pagingdata[i].subtasks[j].subtasks[k].startDate;
                c["endDate"] = pagingdata[i].subtasks[j].subtasks[k].endDate;
                c["duration"] = pagingdata[i].subtasks[j].subtasks[k].duration;
                c["status"] = Math.round(Math.random() * 100);
                y.push(c);
            }
            child["subtasks"] = y;
            d.push(child);
        }
        parent["subtasks"] = d;
        data[l++] = parent;
    }
    z = p;
}
export default Ember.Route.extend({
    model() {
        return {
            dataSource: data,
            columns: [
                { field: "taskID", headerText: "Task Id", editType: "numericedit", width: 45 },
                { field: "taskName", headerText: "Task Name", editType: "stringedit" },
                { field: "startDate", headerText: "Start Date", editType: "datepicker", format: dateFormat },
                { field: "endDate", headerText: "End Date", editType: "datepicker", format: dateFormat },
                { field: "duration", headerText: "Duration", editType: "numericedit" },
                { field: "status", headerText: "Progress", editType: "numericedit" }
            ],
        }
    }
});