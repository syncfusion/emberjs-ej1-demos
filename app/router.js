import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route("dropdownlist", function () {
    this.route('default');
    this.route('grouping');
    this.route('filtering');
  });
  this.route("accordion", function () {
    this.route('default');
    this.route('multipleopen');
    this.route('rtl');
  });
  this.route("menu", function () {
    this.route('default');
    this.route('localdata');
    this.route('template');
  });
  this.route("progressbar", function () {
    this.route('default');
    this.route('rtl');
  });
  this.route("rating", function () {
    this.route('default');
    this.route('precision');
    this.route('orientation');
  });
  this.route("tab", function () {
    this.route('default');
    this.route('closebutton');
    this.route('image');
  });
  this.route("tagcloud", function () {
    this.route('default');
    this.route('rtl');
    this.route('databinding-remotedata');
  });
  this.route("toolbar", function () {
    this.route('default');
    this.route('orientation');
    this.route('databinding-remotedata');
  });
  this.route("uploadbox", function () {
    this.route('default');
    this.route('draganddrop');
    this.route('rtl');
  });
  this.route("waitingpopup", function () {
    this.route('default');
    this.route('template');
  });
  this.route("rte", function () {
    this.route('default');
    this.route('alltools');
    this.route('rtl');
  });
  this.route("spreadsheet", function () {
    this.route('default');
    this.route('cellformatting');
    this.route('conditionalformatting');
    this.route('datavalidation');
    this.route('chart');
    this.route('mftemplate');
  });
  this.route('chart', function () {
    this.route('default');
    this.route('column');
    this.route('area');
  });
  this.route('circulargauge', function () {
    this.route('default');
    this.route('pointers');
    this.route('interaction');
  });
  this.route('lineargauge', function () {
    this.route('default');
    this.route('interaction');
    this.route('unitlabel');
  });
  this.route('digitalgauge', function () {
    this.route('default');
	this.route('digiclock');
	this.route('export');
  });
  this.route('sparkline', function () {
    this.route('default');
    this.route('realtime');
  });
  this.route('sunburstchart', function () {
    this.route('default');
	this.route('animation');
    this.route('zooming');
  });
  this.route('rangenavigator', function () {
    this.route('default');
    this.route('numeric');
    this.route('rtl');
  });
  this.route('map', function () {
    this.route('default');
	this.route('drilldown');
	this.route('flightroutes');
  });
  this.route('treemap', function () {
    this.route('default');
    this.route('hierarchical');
    this.route('drilldown');
  });
  this.route('bulletgraph', function () {
    this.route('default');
    this.route('localdata');
    this.route('remotedata');
  });
  this.route('textboxes', function () {
    this.route('default');
    this.route('localization');
    this.route('rtl');
  });
  this.route('fileexplorer', function () {
    this.route('default');
    this.route('localization');
    this.route('rtl');
  });
  this.route('treeview', function () {
    this.route('default');
    this.route('localdatabinding');
    this.route("loadondemand");
    this.route("icons");
  });
  this.route("autocomplete", function () {
    this.route('default');
    this.route('databinding-remotedata');
    this.route('multicolumn');
  });
  this.route("datepicker", function () {
    this.route('default');
    this.route('blackoutdates');
    this.route('rtl');
  });
    this.route("daterangepicker", function () {
    this.route('default');
    this.route('ranges');
    this.route('enabletimepicker');
  });
  this.route("button", function () {
    this.route('default');
    this.route('checkbox');
    this.route('groupbutton');
    this.route('splitbutton');
    this.route('radiobutton');
    this.route('togglebutton');
  });
  this.route("colorpicker", function () {
    this.route('default');
    this.route('custompalette');
    this.route('colorpalette');
  });
  this.route("datetimepicker", function () {
    this.route('default');
    this.route('drilldown');
    this.route('rtl');
  });
  this.route("dialog", function () {
    this.route('default');
    this.route('actionbuttons');
  });
  this.route("kanban", function () {
    this.route('default');
    this.route('remotedata');
    this.route('swimlane');
  });
  this.route("listbox", function () {
    this.route('default');
    this.route('databinding-remotedata');
    this.route('virtualscrolling');
  });
  this.route("listview", function () {
    this.route('default');
    this.route('checklist');
    this.route('virtualscrolling');
  });
  this.route("navigationdrawer", function () {
    this.route('default');
  });
  this.route("radialmenu", function () {
    this.route('default');
    this.route('nestedradialmenu');
  });
  this.route("radialslider", function () {
    this.route('default');
  });
  this.route("rotator", function () {
    this.route('default');
    this.route('thumbnail');
  });
  this.route("splitter", function () {
    this.route('default');
    this.route('integration');
  });
  this.route("signature", function () {
    this.route('default');
  });
  this.route("tileview", function () {
    this.route('default');
    this.route('livetile');
  });
  this.route("schedule", function () {
    this.route('default');
    this.route('remotedata');
    this.route('multipleresource');
    this.route('resourcegrouping');
    this.route('blockintervals');
    this.route('timescale');
    this.route('categorize');
    this.route('customview');
    this.route('api');
  });
  this.route("scrollbar", function () {
    this.route('default');
  });
  this.route("spellcheck", function () {
    this.route('dialogmode');
    this.route('contextmenu');
	this.route('multipletargets');
  });
  this.route("timepicker", function () {
    this.route('default');
    this.route('disabledranges');
    this.route('rtl');
  });
  this.route("treegrid", function () {
    this.route('default');
    this.route('editing');
    this.route('paging');
    this.route('columnmenu');
    this.route('columntemplate');
  });
  this.route("gantt", function () {
    this.route('default');
    this.route('editing');
    this.route('rowdraganddrop');
    this.route('striplines');
    this.route('tooltiptemplate');
  });
  this.route("grid", function () {
    this.route('default');
    this.route('remotedata');
    this.route('sorting');
    this.route('filtering');
    this.route('grouping');
    this.route('editing');
    this.route('scrolling');
    this.route('summary');
    this.route('contextmenu');
  });
  this.route('diagram', function () {
    this.route('default');
    this.route('hierarchicaltree');
    this.route('organizationalchart');
    this.route('swimlane');
    this.route('radiallayout');
    this.route('overview');
  });

  this.route('heatmap', function () {
    this.route('default');
    this.route('tabledatabinding');
    this.route('legend');
  });
  this.route('pdfviewer', function () {
    this.route('default');
    this.route('localization');
    this.route('formfilling');
  });
  this.route("pivotgrid", function () {
    this.route('relational');
    this.route('olap');
	this.route('frozenheaders');
	this.route('paging');
  });
  this.route("pivotchart", function () {
    this.route('relational');
    this.route('olap');
	this.route('charttypes');
  });
  this.route("pivotclient", function () {
    this.route('relational');
    this.route('olap');
	this.route('customization');
  });
  this.route("pivotgauge", function () {
    this.route('relational');
    this.route('olap');
	this.route('layout');
  });
  this.route("pivottreemap", function () {
    this.route('olap');
	this.route('namedsets');
	this.route('colormapping');
  });
  this.route("grid", function () {
    this.route('default');
    this.route('remotedata');
    this.route('sorting');
    this.route('filtering');
    this.route('grouping');
    this.route('editing');
    this.route('scrolling');
    this.route('summary');
    this.route('contextmenu');
  });
  this.route("slider", function () {
    this.route('default');
    this.route('range');
    this.route('vertical');
  });
  this.route("ribbon", function () {
    this.route('default');
	this.route('resize');
	this.route('customtooltip');
  });

  this.route("reportviewer", function () {
    this.route('territorysales');
    this.route('groupingaggregate');
    this.route('areachart');
  });
  this.route("barcode", function () {
    this.route('default');
    this.route('datamatrix');
    this.route('code128');
  });
  this.route("combobox", function () {
    this.route('default');
    this.route('grouping');
    this.route('databinding-remotedata');
  });
});

export default Router;
