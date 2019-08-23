import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return { 
       list: [
   {
       empid: "1", tooltiptext: "New mail",
       spriteCss: "mailtools movetofolder",

   }, {
       empid: "2", tooltiptext: "Calendar",
       spriteCss: "mailtools categorize",

   }, {
       empid: "3", tooltiptext: "Appointments",
       spriteCss: "mailtools flag",

   }, {
       empid: "4", tooltiptext: "Week",
       spriteCss: "mailtools forward",

   }, {
       empid: "5", tooltiptext: "Month",
       spriteCss: "mailtools newmail",

   },
    {
        empid: "6", tooltiptext: "Notes",
        spriteCss: "mailtools reply",

    },
    {
        empid: "7", tooltiptext: "Deleted",
        spriteCss: "mailtools done",

    }
],
fields: { id: "empid", spriteCssClass: "spriteCss", tooltipText:"title" },
width: "24%"

	}
   }
});