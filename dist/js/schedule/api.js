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
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daySelect: [1, 2, 3, 4, 5],
      hideweekdays: function (args) {
        Ember.$("#schedule").ejSchedule({ showWeekend: !args.isChecked });
      },
      onReadOnly: function (args) {
        Ember.$("#schedule").ejSchedule({ readOnly: args.isChecked });
      },
      onActiveChange: function (args) {
        Ember.$("#schedule").ejSchedule({ firstDayOfWeek: args.value.toLowerCase() });
      },
      changeWeekDays: function (args) {
        var workweek = [];
        var array = args.model.selectedItems.sort();
        for (var i = 0; i < args.model.selectedItems.length; i++) {
          workweek.push(args.model.dataSource[array[i]]);
        }
        Ember.$("#schedule").ejSchedule({ workWeek: workweek });
      },
      changeHours: function () {
        let start = Ember.$("#starthour").ejNumericTextbox("model.value");
        let end = Ember.$("#endhour").ejNumericTextbox("model.value");
        if (start < end) {
          Ember.$("#schedule").ejSchedule({
            startHour: start,
            endHour: end
          });
        }
        else {
          alert("Start hour should be less than end hour");
        }
      },
      changeDimension: function () {
        Ember.$("#schedule").ejSchedule({
          cellWidth: Ember.$("#cellwidth").ejNumericTextbox("model.value") + "px",
          cellHeight: Ember.$("#cellheight").ejNumericTextbox("model.value") + "px"
        });
      }
    };
  },
});
