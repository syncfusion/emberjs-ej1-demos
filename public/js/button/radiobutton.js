import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            Small:"small",
            Medium:"medium",
            checked: true
        }
    }
});
