import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			value: "35",
			height: "20",
			text: "35%",
			enableRTL: true
		}
	}
});