import Ember from 'ember';

window.htmlEditor = [];
let initialLoad = false;
window.baseurl = "//js.syncfusion.com/ejServices/";
let refreshContentWindow = function () {
    Ember.$(".control-panel").height(Ember.$(window).height() - Ember.$(".headerarea").outerHeight());
	Ember.$("#scrollTop").fadeOut();
},
    refreshScroller = function () {
        Ember.$(".accordion-panel").height(((Ember.$(window).height() - Ember.$(".headerarea").outerHeight())) + "px ;");
        var controlheight = Ember.$("#scrollcontainer").ejScroller("instance");
        controlheight.model.height = (Ember.$(window).height()) - (Ember.$(".headerarea").outerHeight() + Ember.$(".accordion-panel .searchoption").outerHeight());
        controlheight.refresh();
        Ember.$("#scrollcontainer .e-vhandle").addClass("e-box");
    },
    codeFetch = function (transition) {
        var target = transition.targetName.split(".");
        Ember.$.get("html/" + target[0] + "/" + target[1] + ".html",
            function (data) {
                Ember.$("#tab #htmlsource").css("display", "block");
                Ember.$("#tab #jssource").css("display", "none");
                if (Ember.$("#htmlsource").find(".CodeMirror")) Ember.$("#htmlsource").find(".CodeMirror").remove();
                window.htmlEditor.push(window.CodeMirror.fromTextArea(Ember.$("#htmlsource .tab_content").val(data)[0], {
                    lineNumbers: false,
                    readOnly: true,
                    mode: "text/html"
                }));
                Ember.$("#htmlsource").find(Ember.$(".CodeMirror")).appendTo("#htmlsource");
                Ember.$("#tab").ejTab("model.selectedItemIndex", 0);
            }, 'text');
        Ember.$.get("js/" + target[0] + "/" + target[1] + ".js",
            function (data) {
                Ember.$("#tab #htmlsource").css("display", "none");
                Ember.$("#tab #jssource").css("display", "block");
                if (Ember.$("#jssource").find(".CodeMirror")) Ember.$("#jssource").find(".CodeMirror").remove();
                window.htmlEditor.push(window.CodeMirror.fromTextArea(Ember.$("#jssource .tab_content").val(data)[0], {
                    lineNumbers: false,
                    readOnly: true,
                    mode: "javascript"
                }));
                Ember.$("#jssource").find(Ember.$(".CodeMirror")).appendTo("#jssource");
                Ember.$("#tab #jssource").css("display", "none");
                Ember.$("#tab #htmlsource").css("display", "block");
                Ember.$("#tab").ejTab("model.selectedItemIndex", 0);
            }, 'text');
    }, 
    currentSampleExpand = function () {
        var element = Ember.$(".productList li").find(".samplelist"), currentSample, samples, sampleName, scrollObj = Ember.$("#scrollcontainer").ejScroller("instance");              
        for (var i = 0; i < element.length; i++) {
            samples = location.hash.split("/");
            if (Ember.$.trim(Ember.$(element[i]).parent().text()).split(" ")[0].toLowerCase() == location.hash.split("/")[1]) {
                Ember.$(element[i]).show();
                sampleName = Ember.$(element[i]).find('a[href *="' + samples[2] +'"]');
                if(initialLoad) {
                    scrollObj.scrollTop(element[i].offsetTop - 80);
                    initialLoad = false;
                }
                activeSample(sampleName.parent('li'));                             
                Ember.$(element[i]).parent().find("span").removeClass("up").addClass("down");
                currentSample = { control: Ember.$.trim(Ember.$(element[i]).siblings().text()), sample: sampleName.text() };
            } else {
                Ember.$(element[i]).parent().find("span").removeClass("down").addClass("up");
                Ember.$(element[i]).hide();
            }
        }
        Ember.$(".accordion-panel").animate({ "margin-left": "-250px" }, "slow");
        return currentSample;
    },
    activeSample = function (control) {
        Ember.$(".e-state-active").removeClass("e-state-active");
        control.addClass("e-state-active");
    };
export default Ember.Route.extend({
    beforeModel(transition) {
        var i, j, subdata = [], sampleList = window.ControlList, controlName, properties;
        for (i = 0; i < sampleList.length; i++) {
            for (j = 0; j < sampleList[i].samples.length; j++) {
                properties = {};
                controlName = sampleList[i].name;
                properties["controlId"] = sampleList[i].id;
                properties["id"] = sampleList[i].samples[j].id;
                properties["control"] = controlName;
                properties["name"] = sampleList[i].samples[j].name;
                properties["data"] = sampleList[i].name + " " + sampleList[i].samples[j].name;
                subdata.push(properties);
            }
        }
        window.controls = subdata;
        initialLoad = true;
        if (transition.targetName === "index")
            this.replaceWith('grid.default');
    },
    model() {
        return {
            controlName: "Spreadsheet",
            controls: window.ControlList,
            subData: window.controls,
            fields: { key: "id", text: "data" },
            scrollTop: function () {
                Ember.$(".control-panel").animate({ scrollTop: 0 }, "fast");
            },
            onSelectItem: function (args) {
                var samples = (args.key).split(".");
                window.location.hash = "#/" + samples[0] + "/" + samples[1];
                Ember.$("#searchauto").ejAutocomplete("clearText");
            }
        }
    },
    actions: {
        slideclick: function () {
            Ember.$(".accordion-panel").css({ "z-index": "1000000", "position": "fixed" });
            Ember.$(".accordion-panel").animate({ "margin-left": "0px" }, "slow");
            refreshScroller();
            refreshContentWindow();
        },
        scrollTop: function () {
            Ember.$(".control-panel").animate({ scrollTop: 0 }, "fast");
			Ember.$("#scrollTop").fadeOut();
        },
        didTransition: function () {
            Ember.$(window).bind("resize", function () {
                Ember.$(".accordion-panel").css({ "margin-left": (Ember.$(window).width() <= "981") ? "-250px" : "0px" });
                refreshScroller();
                refreshContentWindow();
            }),
                Ember.run.scheduleOnce('afterRender', this, function () {
                    codeFetch({ targetName: this.controller.currentPath });
                    Ember.$("body").css("visibility", "visible");
                    refreshContentWindow();
                    var route = currentSampleExpand();
                    this.controller.set("model.controlName", route['control']);
                    this.controller.set("model.sampleName", route['sample']);
                    refreshScroller();
                    Ember.$(".content").height(Ember.$(window).height() - Ember.$(".toolbar").outerHeight());
                    Ember.$("body>div.ember-view").css("height", "100%");
                });
        },
        willTransition: function (transition) {
            codeFetch(transition);
        }
    }
});
