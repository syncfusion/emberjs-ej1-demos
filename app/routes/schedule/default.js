import Ember from 'ember';

let dManager = ej.DataManager(Ember.$.extend(true, [], window.Default)).executeLocal(ej.Query().take(10));
export default Ember.Route.extend({
  model() {
    return {
      currentDate: new Date(2017, 5, 5),
      appointmentSettings: {
        dataSource: dManager,
        id: "Id",
        subject: "Subject",
        startTime: "StartTime",
        description: "Description",
        endTime: "EndTime",
        allDay: "AllDay",
        recurrence: "Recurrence",
        recurrenceRule: "RecurrenceRule"
      },
      onActiveChange: function(args) {
        Ember.$("#schedule").ejSchedule({ orientation: args.value.toLowerCase() });
      }
    };
  },
});
