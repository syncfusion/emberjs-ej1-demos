import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        hideSampleList: function ($event) {
            var proxy = this;
            if (Ember.$($event.currentTarget).children().hasClass("up")) {
                Ember.$($event.currentTarget).next().show(300, function () { proxy.send("refreshScroller"); });
                Ember.$($event.currentTarget).children().removeClass("up").addClass("down");
            }
            else {
                Ember.$($event.currentTarget).next().hide(300, function () { proxy.send("refreshScroller"); });
                Ember.$($event.currentTarget).children().removeClass("down").addClass("up");
            }
        },
        navBarHide(event) {
            if (Ember.$(window).width() <= "981" && Ember.$("#slidemenu").is(":visible") && !Ember.$(event.target).closest(".slidemenuicon").hasClass("slidemenuicon") && (Ember.$(event.target).closest(".productpage").length == 0 || Ember.$(".accordion-panel").is(":visible"))) {
                Ember.$(".accordion-panel").animate({ "margin-left": "-250px" }, "slow");
            }
            else {
                Ember.$(".accordion-panel").animate({ "margin-left": "0px" }, "slow");
            }
        },
        refreshScroller: function() {
            Ember.$(".accordion-panel").height(((Ember.$(window).height() - Ember.$(".headerarea").outerHeight())) + "px ;");
            var controlheight = Ember.$("#scrollcontainer").ejScroller("instance");
            controlheight.model.height = (Ember.$(window).height()) - (Ember.$(".headerarea").outerHeight() + Ember.$(".accordion-panel .searchoption").outerHeight());
            controlheight.refresh();
            Ember.$("#scrollcontainer .e-vhandle").addClass("e-box");
        },
		scrollPanel: function() {
			var scrollY = Ember.$(".control-panel").scrollTop();
			scrollY ? Ember.$("#scrollTop").fadeIn() : Ember.$("#scrollTop").fadeOut();
		}
    }
});
