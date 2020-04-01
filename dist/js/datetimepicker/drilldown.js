import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
        drillDown: {enabled: true, interval: 5, showMeridian: false}
        }
    }
});
