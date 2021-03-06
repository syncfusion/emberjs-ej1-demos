import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let data = [
            { "Name": "Diagram", "fillColor": "#916DAF" },
            { "Name": "Layout", "Category": "Diagram" },
            { "Name": "Tree Layout", "Category": "Layout" },
            { "Name": "Organizational Chart", "Category": "Layout" },
            { "Name": "Hierarchical Tree", "Category": "Tree Layout" },
            { "Name": "Radial Tree", "Category": "Tree Layout" },
            { "Name": "Mind Map", "Category": "Hierarchical Tree" },
            { "Name": "Family Tree", "Category": "Hierarchical Tree" },
            { "Name": "Management", "Category": "Organizational Chart" },
            { "Name": "Human Resource", "Category": "Management" },
            { "Name": "University", "Category": "Management" },
            { "Name": "Business", "Category": "Management" },
        ];

        return {
            height: "450px",
            tool: ej.datavisualization.Diagram.Tool.SingleSelect,
            layout: { type: "hierarchicaltree", horizontalSpacing: 25, verticalSpacing: 35, marginX: 3, marginY: 3 },
            defaultSettings: {
                node: {
                    constraints: ej.datavisualization.Diagram.NodeConstraints.Select | ej.datavisualization.Diagram.NodeConstraints.PointerEvents, fillColor: "#88C65C", width: 100,
                    height: 40, borderColor: "black", borderWidth: 1, labels: [{ name: "label1", fontColor: "white", fontSize: 12, margin: { left: 10, right: 10 } }]
                },
                connector: {
                    lineColor: "#000000", constraints: ej.datavisualization.Diagram.ConnectorConstraints.None,
                    segments: [{ type: "orthogonal" }]
                }
            },
            nodeTemplate: function (diagram, node) {
                node.labels[0].text = node.Name;
            },
            dataSourceSettings: { id: "Name", parent: "Category", dataSource: data },
            pageSettings: { scrollLimit: "diagram" },
            snapSettings: { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None }
        }
    }
});