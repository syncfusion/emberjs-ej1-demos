import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
        fullrate: 4,
        halfrate: 3.5,
        exactrate: 3.7,
		half: "half",
		exact: "exact"
        }
    }
});