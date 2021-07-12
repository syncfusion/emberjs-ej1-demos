import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
            rate: 3,
			orientation: "vertical"
        }
    }
});