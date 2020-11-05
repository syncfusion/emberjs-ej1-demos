import Ember from 'ember';

let dManager = ej.DataManager(Ember.$.extend(true, [], window.Default)).executeLocal(ej.Query().take(10));
export default Ember.Route.extend({
  model() {
    return {
      currentDate: new Date(2017, 5, 5),
      views: ["CustomView"],
      renderDates: {
        start: new Date(2017, 5, 7),
        end: new Date(2017, 5, 10)
      },
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
      customstartdate: new Date(2017, 5, 7),
      customenddate: new Date(2017, 5, 10),
      onClick: function () {
        var startDate = Ember.$("#customstartdate").ejDatePicker("model.value");
        startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        var endDate = Ember.$("#customenddate").ejDatePicker("model.value");
        endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        if (startDate <= endDate) {
          Ember.$("#schedule").ejSchedule({
            renderDates: {
              start: new Date(startDate),
              end: new Date(endDate)
            },
            currentDate: new Date(startDate)
          });
        }
        else
          alert("Start date must be lesser than end date");
      }
    };
  },
});
