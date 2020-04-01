import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			value: "45",
			height: "20",
			text: "45%"
		}
	}
});