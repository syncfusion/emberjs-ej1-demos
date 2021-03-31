import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            dataSource: window.default_DataSource,
            valueMemberPath: "EmployeesCount",
            levels: [
			{ groupMemberPath: "Country" },
            { groupMemberPath: "JobDescription" },
            { groupMemberPath: "JobGroup" },
            { groupMemberPath: "JobRole" }
            ],
            dataLabelSettings:{visible:true},
            tooltip: { visible: true},
            innerRadius: 0.2,
            size: { height: "600" },
            title: { text: "Employees Count" },		 
            legend: { visible:true, position: "top" },
        }
    }
});
