import Ember from 'ember';
export default Ember.Route.extend({
    model() {
        return {
            width: 295,
            actionButtons: ["close", "collapsible", "maximize", "minimize", "pin"],
            close: "onDialogClose",
            enableResize: false,
            containment: ".cols-sample-area",
            dlgOpen: function () {
                Ember.$("#btnOpen").hide();
            },
            onOpen: function () {
                Ember.$("#btnOpen").hide();
                Ember.$("#dialogIcon").ejDialog("open");
            },
            onDialogClose: function () {
                Ember.$("#btnOpen").show();
            },
        }
    }
});
