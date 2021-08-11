import Ember from 'ember';

let dManager = ej.DataManager(Ember.$.extend(true, [], window.ResourcesData)).executeLocal(ej.Query().take(10));
export default Ember.Route.extend({
  model() {
    return {
      currentDate: new Date(2017, 5, 5),
      group: {
        resources: ["Owners"]
      },
      resources: [{
        field: "ownerId",
        title: "Owner",
        name: "Owners", allowMultiple: true,
        resourceSettings: {
          dataSource: [
            { text: "Nancy", id: 1, groupId: 1, color: "#f8a398" },
            { text: "Steven", id: 3, groupId: 2, color: "#56ca85" },
            { text: "Michael", id: 5, groupId: 1, color: "#51a0ed" }
          ],
          text: "text", id: "id", groupId: "groupId", color: "color"
        }
      }],
      appointmentSettings: {
        dataSource: dManager,
        id: "Id",
        subject: "Subject",
        startTime: "StartTime",
        description: "Description",
        endTime: "EndTime",
        allDay: "AllDay",
        recurrence: "Recurrence",
        recurrenceRule: "RecurrenceRule",
        resourceFields: "ownerId"
      },
      onActiveChange: function(args) {
        Ember.$("#schedule").ejSchedule({ orientation: args.value.toLowerCase() });
      }
    };
  },
});
