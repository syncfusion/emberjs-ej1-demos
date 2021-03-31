import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            Normal: "normal",
            Mini:"mini",
            Small:"small",
            Medium:"medium",
            Large:"large",
            roundedCorner: true,
            buttonModes: ["Split", "DropDown"],
            onChange: function (args) {
                Ember.$(".e-splitbutton").ejSplitButton({ buttonMode: args.value.toLowerCase() });
              },       
    }

   }
});
