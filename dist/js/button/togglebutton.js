import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            Normal: "normal",
            Mini:"mini",
            Small:"small",
            Medium:"medium",
            Large:"large",
            roundedCorner: true
        }
    }
});
