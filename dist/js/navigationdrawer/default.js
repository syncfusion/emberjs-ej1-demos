import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
        listViewSettings: { width: 200, selectedItemIndex: 0, mouseUp: function(e) {
            Ember.$("#butdrawer").parent().children("h2").text(e.text);
        }, persistSelection: true },
         position: "normal",
         
        }
    }
});
