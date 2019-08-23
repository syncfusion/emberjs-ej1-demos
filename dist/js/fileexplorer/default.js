import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
         path: window.baseurl + "Content/FileBrowser/",
         ajaxaction : window.baseurl + "api/FileExplorer/FileOperations",
         responsive: true,
         layout: "Tile"
        }
    },
});
