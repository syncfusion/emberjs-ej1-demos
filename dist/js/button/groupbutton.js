import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            mode:"radiobutton",
            roundedCorner: true,
            dataSource: [
                { text: "Day", contentType: "textonly" },
                { text: "Work Week", contentType: "textonly" },
                { text: "Week", contentType: "textonly" },
                { text: "Month", contentType: "textonly", selected: "selected" },
                { text: "Year", contentType: "textonly" }]
        }
    }
});
