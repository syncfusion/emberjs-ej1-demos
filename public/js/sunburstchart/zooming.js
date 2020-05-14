import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            dataSource: window.default_DataSource,
            palette: ["#002e4d", "#005c99", "#008ae6", "#33adff", "#80ccff"],
            valueMemberPath: "EmployeesCount",
            levels: [
			{ groupMemberPath: "Country" },
            { groupMemberPath: "JobDescription" },
            { groupMemberPath: "JobGroup" },
            { groupMemberPath: "JobRole" }
            ],
            dataLabelSettings: { visible: true },
            tooltip: { visible: true},
            innerRadius: 0.2,
            title: { text: "Employees Count" },
            size: { height: "600" },
            enableAnimation: true,
            zoomSettings: { enable: true },
        }
    }
});
