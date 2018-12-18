import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            append: "#target",
            target: "#target",
            showOnInit: true,
            oncreate: function () {
                let obj = Ember.$('#target').data('ejWaitingPopup');
                obj.setModel({ template: Ember.$('#content') });
            }
        }
    }
});