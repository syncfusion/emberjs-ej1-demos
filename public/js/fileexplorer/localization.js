import Ember from 'ember';

export default Ember.Route.extend({
   model(){
    return {
         path: window.baseurl + "Content/FileBrowser/",
         ajaxaction : window.baseurl + "api/FileExplorer/FileOperations",
         responsive: true,
         gridSettings : { 
		columns: [
			{ field: "name", headerText: "nombre", width: "30%" },
			{ field: "dateModified", headerText: "fecha de modificación", width: "30%" },
			{ field: "type", headerText: "tipo", width: "15%"  },
			{ field: "size", headerText: "tamaño", width: "12%" }]
			}
        }
    },
});
