import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
        numeric : 35,
        percent: 70,
        currency: 100,
        mask : "999-99"
        }
    },
});
