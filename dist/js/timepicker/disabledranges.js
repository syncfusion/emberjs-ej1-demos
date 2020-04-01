import Ember from 'ember';


export default Ember.Route.extend({
   model(){
    return {
        value:"8:00 AM",
        disabledRanges: [{ startTime: '3:00 AM', endTime: '6:00 AM' }, { startTime: '1:00 PM', endTime: '3:00 PM' }, { startTime: '8:00 PM', endTime: '10:00 PM' }]
        }
    }
});
