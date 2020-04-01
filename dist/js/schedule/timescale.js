import Ember from 'ember';

let dManager = ej.DataManager(Ember.$.extend(true, [], window.Default)).executeLocal(ej.Query().take(10));
export default Ember.Route.extend({
  model() {
    return {
      currentDate: new Date(2017, 5, 5),
      timeScale: {
        minorSlotCount: 5,
        majorSlot: 60
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
      onActiveChange: function (args) {
        Ember.$("#schedule").ejSchedule({ orientation: args.value.toLowerCase() });
      },
      timescaleChange: function (args) {
        Ember.$("#schedule").ejSchedule({ timeScale: { enable: !args.isChecked } });
        Ember.$("#majorslot").ejDropDownList({ enabled: !args.isChecked });
        Ember.$("#minorslot").ejDropDownList({ enabled: !args.isChecked });
        Ember.$("#btnSubmit").ejButton({ enabled: !args.isChecked });
      },
      changeTimeScale: function () {
        Ember.$("#schedule").ejSchedule({
          timeScale: {
            majorSlot: parseInt(Ember.$("#majorslot").ejDropDownList("model.value")),
            minorSlotCount: parseInt(Ember.$("#minorslot").ejDropDownList("model.value"))
          }
        });
      }
    };
  },
});
