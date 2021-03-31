import Ember from 'ember';

let dManager = ej.DataManager(Ember.$.extend(true, [], window.ResourcesData)).executeLocal(ej.Query().take(10));
export default Ember.Route.extend({
  model() {
    return {
      currentDate: new Date(2017, 5, 5),
      group: {
        resources: ["Rooms", "Owners"]
      },
      resources: [{
        field: "roomId",
        title: "Room",
        name: "Rooms", allowMultiple: false,
        resourceSettings: {
          dataSource: [
            { text: "ROOM 1", id: 1, groupId: 1, color: "#cb6bb2" },
            { text: "ROOM 2", id: 2, groupId: 1, color: "#56ca85" }
          ],
          text: "text", id: "id", groupId: "groupId", color: "color"
        }
      }, {
        field: "ownerId",
        title: "Owner",
        name: "Owners", allowMultiple: true,
        resourceSettings: {
          dataSource: [
            { text: "Nancy", id: 1, groupId: 1, color: "#ffaa00" },
            { text: "Steven", id: 3, groupId: 2, color: "#f8a398" },
            { text: "Michael", id: 5, groupId: 1, color: "#7499e1" }
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
        resourceFields: "roomId,ownerId"
      },
      onActiveChange: function(args) {
        Ember.$("#schedule").ejSchedule({ orientation: args.value.toLowerCase() });
      }
    };
  },
});
