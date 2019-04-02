import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
        position:{x:50,y:100},
        autoOpen:true
         }
    }
});
