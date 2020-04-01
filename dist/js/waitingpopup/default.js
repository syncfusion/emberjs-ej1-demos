import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            append: "#target",
            target: "#target",
            showOnInit: true
        }
    }
});