import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            content: "Description: The Rich Text Editor (RTE) control is an easy to render in client side. Customer easy to edit the contents and get the HTML content from RTE",
            width: "100%",
            height: "300px",
            enableRTL: true
        }
    }
});