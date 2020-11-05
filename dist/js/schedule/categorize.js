import Ember from 'ember';

let dManager = ej.DataManager(Ember.$.extend(true, [], window.Default)).executeLocal(ej.Query().take(10));
export default Ember.Route.extend({
  model() {
    return {
      currentDate: new Date(2017, 5, 5),
      categorizeSettings: {
        enable: true,
        allowMultiple: true,
        dataSource: [
          { text: "Blue Category", id: 1, color: "#43b496", fontColor: "#ffffff" },
          { text: "Green Category", id: 2, color: "#7f993e", fontColor: "#ffffff" },
          { text: "Orange Category", id: 3, color: "#cc8638", fontColor: "#ffffff" },
          { text: "Purple Category", id: 4, color: "#ab54a0", fontColor: "#ffffff" },
          { text: "Red Category", id: 5, color: "#dd654e", fontColor: "#ffffff" },
          { text: "Yellow Category", id: 6, color: "#d0af2b", fontColor: "#ffffff" }
        ],
        text: "text", id: "id", color: "color", fontColor: "fontColor"
      },
      contextMenuSettings: {
        enable: true,
        menuItems: {
          appointment: [
            { id: "open", text: "Open Appointment" },
            { id: "delete", text: "Delete Appointment" },
            { id: "customMenu3", text: "Menu Item 3" },
            { id: "customMenu4", text: "Menu Item 4" },
            { id: "categorize", text: "Categorize" }
          ],
          cells: [
            { id: "new", text: "New Appointment" },
            { id: "recurrence", text: "New Recurring Appointment" },
            { id: "today", text: "Today" },
            { id: "gotodate", text: "Go to date" },
            { id: "settings", text: "Settings" },
            { id: "view", text: "View", parentId: "settings" },
            { id: "timemode", text: "TimeMode", parentId: "settings" },
            { id: "view_Day", text: "Day", parentId: "view" },
            { id: "view_Week", text: "Week", parentId: "view" },
            { id: "view_Workweek", text: "Workweek", parentId: "view" },
            { id: "view_Month", text: "Month", parentId: "view" },
            { id: "timemode_Hour12", text: "12 Hours", parentId: "timemode" },
            { id: "timemode_Hour24", text: "24 Hours", parentId: "timemode" },
            { id: "workhours", text: "Work Hours", parentId: "settings" },
            { id: "customMenu1", text: "Menu Item 1" },
            { id: "customMenu2", text: "Menu Item 2" }
          ]
        }
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
        recurrenceRule: "RecurrenceRule",
        categorize: "Categorize"
      }
    };
  },
});
