import Ember from 'ember';

let dataList= [
            { id: 1, text: 'Group A', parentId: null },
            { id: 2, text: 'Group B', parentId: null },
            { id: 3, text: 'Group C', parentId: null },
            { id: 4, text: 'Group D', parentId: null },
            { id: 5, text: 'Group E', parentId: null },
            { id: 11, parentId: 1, text: 'Algeria', sprite: 'flag-dz' },
            { id: 12, parentId: 1, text: 'Armenia', sprite: 'flag-am' },
            { id: 13, parentId: 1, text: 'Bangladesh', sprite: 'flag-bd' },
            { id: 14, parentId: 1, text: 'Cuba', sprite: 'flag-cu' },
            { id: 15, parentId: 2, text: 'Denmark', sprite: 'flag-dk' },
            { id: 16, parentId: 2, text: 'Egypt', sprite: 'flag-eg' },
            { id: 17, parentId: 3, text: 'Finland', sprite: 'flag-fi' },
            { id: 18, parentId: 3, text: 'India', sprite: 'flag-in' },
            { id: 19, parentId: 3, text: 'Malaysia', sprite: 'flag-my' },
            { id: 20, parentId: 4, text: 'New Zealand', sprite: 'flag-nz' },
            { id: 21, parentId: 4, text: 'Norway', sprite: 'flag-no' },
            { id: 22, parentId: 4, text: 'Poland', sprite: 'flag-pl' },
            { id: 23, parentId: 5, text: 'Romania', sprite: 'flag-ro' },
            { id: 24, parentId: 5, text: 'Singapore', sprite: 'flag-sg' },
            { id: 25, parentId: 5, text: 'Thailand', sprite: 'flag-th' },
            { id: 26, parentId: 5, text: 'Ukraine', sprite: 'flag-ua' },
            {id: 111, parentId: 11, text: 'First Place' },
            { id: 112, parentId: 12, text: 'Second Place' },
            { id: 113, parentId: 13, text: 'Third place' },
            { id: 114, parentId: 14, text: 'Fourth Place' },
            { id: 115, parentId: 15, text: 'First Place' },
            { id: 116, parentId: 16, text: 'Second Place' },
            { id: 117, parentId: 17, text: 'Third Place' },
            { id: 118, parentId: 18, text: 'First Place' },
            { id: 119, parentId: 19, text: 'Second Place' },
            { id: 120, parentId: 20, text: 'First Place' },
            { id: 121, parentId: 21, text: 'Second Place' },
            { id: 122, parentId: 22, text: 'Third place' },
            { id: 123, parentId: 23, text: 'Fourth Place' },
            { id: 120, parentId: 24, text: 'First Place' },
            { id: 121, parentId: 25, text: 'Second Place' },
            { id: 122, parentId: 26, text: 'Third place' }
        ];
export default Ember.Route.extend({
   model(){
    return { 
        
        localfieldsvalues: { dataSource: dataList, parentId: 'parentId', id: 'id', text: 'text', spriteCssClass: 'sprite' }
  }
   }
   });