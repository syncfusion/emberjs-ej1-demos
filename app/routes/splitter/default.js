import Ember from 'ember';
export default Ember.Route.extend({
   model(){
    return {
        height:250, width:"50%",
        orientation:ej.Orientation.Vertical,
        properties: [{}, { paneSize: 80 }],
        create:function(){
            var splitObj=Ember.$("#innerSplitter").data("ejSplitter")
            setTimeout(function(){  splitObj.setModel({properties: [{paneSize: 180}, { paneSize: 80 }]}); }, 100);
           
        },
        enableAutoResize: true,
        
        }
    }
});
