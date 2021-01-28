import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            content: "Description: The Rich Text Editor (RTE) control is an easy to render in client side. Customer easy to edit the contents and get the HTML content from RTE",
            width: "100%",
            height: "300px",
            tools: {
                formatStyle: ['format'],
                edit: ['findAndReplace'],
                font: ['fontName', 'fontSize', 'fontColor', 'backgroundColor'],
                style: ['bold', 'italic', 'underline', 'strikethrough'],
                alignment: ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                lists: ['unorderedList', 'orderedList'],
                clipboard: ['cut', 'copy', 'paste'],
                doAction: ['undo', 'redo'],
                indenting: ['outdent', 'indent'],
                clear: ['clearFormat', 'clearAll'],
                links: ['createLink', 'removeLink'],
                images: ['image'],
                media: ['video'],
                tables: ['createTable', 'addRowAbove', 'addRowBelow', 'addColumnLeft', 'addColumnRight', 'deleteRow', 'deleteColumn', 'deleteTable'],
                effects: ['superscript', 'subscript'],
                casing: ['upperCase', 'lowerCase'],
                print: ['print'],
                customUnorderedList: [{
                    name: 'unOrderInsert',
                    tooltip: 'Custom UnOrderList',
                    css: 'e-rte-toolbar-icon e-rte-unlistitems customUnOrder'
                }],
                customOrderedList: [{
                    name: 'orderInsert',
                    tooltip: 'Custom OrderList',
                    css: 'e-rte-toolbar-icon e-rte-listitems customOrder',
                    text: 'Lower-Greek',
                    listStyle: 'lower-greek'
                }]
            },
            isResponsive: true
        }
    }
});