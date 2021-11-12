import Ember from 'ember';

let dManager = ej.DataManager({ url: window.baseurl + "api/Schedule/LoadData", crossDomain: true });
let qManager = ej.Query().from("Events").take(10);
export default Ember.Route.extend({
  model() {
    return {
      currentDate: new Date(2017, 5, 5),
      appointmentSettings: {
        dataSource: dManager,
        query: qManager,
        id: "Id",
        subject: "Subject",
        startTime: "StartTime",
        description: "Description",
        endTime: "EndTime",
        allDay: "AllDay",
        recurrence: "Recurrence",
        recurrenceRule: "RecurrenceRule"
      }
    };
  },
});
