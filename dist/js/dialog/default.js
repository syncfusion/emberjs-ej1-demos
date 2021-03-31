import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return {
			width: "550",
			minWidth: "310",
			minHeight: "215",
			btnHeight: "30",
			btnWidth: "172",
			btnSize: "medium",
			dlgOpen: function () {
				Ember.$("#btnOpen").hide();
			},
			onDialogClose: function () {
				Ember.$("#btnOpen").show();
			},
			onOpen: function () {
				Ember.$("#btnOpen").hide();
				Ember.$("#defaultdialog").ejDialog("open");
			},
		}
	}
});