import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			width: "100%",
			height: "625px",

			nodes: [{ name: "NewIdea", width: 150, height: 60, offsetX: 400, offsetY: 60, labels: [{ "text": "New idea identified" }], type: "flow", shape: "terminator" },
			{ name: "Meeting", width: 150, height: 60, offsetX: 400, offsetY: 155, labels: [{ "text": "Meeting with board" }], type: "flow", shape: "process" },
			{ name: "BoardDecision", width: 150, height: 110, offsetX: 400, offsetY: 280, labels: [{ text: "Board decides \nwhether \nto proceed" }], type: "flow", shape: "decision" },
			{ name: "Project", width: 150, height: 100, offsetX: 400, offsetY: 430, labels: [{ "text": "Find Project \nmanager" }], type: "flow", shape: "decision" },
			{ name: "End", width: 150, height: 60, offsetX: 400, offsetY: 555, labels: [{ "text": "Implement and Deliver" }], type: "flow", shape: "process" },
			{ name: "Decision", width: 250, height: 60, offsetX: 650, offsetY: 60, labels: [{ "text": "Decision Process for new software ideas" }], type: "flow", shape: "card", fillColor: "#858585", borderColor: "#858585" },
			{ name: "Reject", width: 150, height: 60, offsetX: 650, offsetY: 285, labels: [{ "text": "Reject and write report" }], type: "flow", shape: "process" },
			{ name: "Resources", width: 150, height: 60, offsetX: 650, offsetY: 430, labels: [{ "text": "Hire new resources" }], type: "flow", shape: "process" }
			],

			connectors: [{ name: "connector1", sourceNode: "NewIdea", targetNode: "Meeting" },
			{ name: "connector2", sourceNode: "Meeting", targetNode: "BoardDecision" },
			{ name: "connector3", sourceNode: "BoardDecision", targetNode: "Project", labels: [{ "text": "Yes" }] },
			{ name: "connector4", sourceNode: "Project", targetNode: "End", labels: [{ "text": "Yes" }] },
			{ name: "connector5", sourceNode: "BoardDecision", targetNode: "Reject", labels: [{ "text": "No" }] },
			{ name: "connector6", sourceNode: "Project", targetNode: "Resources", labels: [{ "text": "No" }] }
			],

			defaultSettings: {
				node: {
					borderColor: "#1BA0E2", fillColor: "#1BA0E2", labels: [{ "fontColor": "white" }],
					ports: [{ name: "port1", offset: { x: 0, y: 0.5 } },
					{ name: "port2", offset: { y: 0, x: 0.5 } },
					{ name: "port3", offset: { x: 1, y: 0.5 } },
					{ name: "port4", offset: { y: 1, x: 0.5 } }]
				},
				connector: { lineColor: "#606060", labels: [{ "fillColor": "white" }] },
			},

			palettes: [
				{
					name: "Flow Shapes",
					expanded: true,
					items: [{
						name: "Terminator", width: 40, height: 20, offsetX: 20, offsetY: 20, type: "flow", shape: "terminator",
						ports: [
							{ name: "Terminator" + "1", offset: { x: 0.5, y: 0 } },
							{ name: "Terminator" + "2", offset: { x: 0, y: 0.5 } },
							{ name: "Terminator" + "3", offset: { x: 0.5, y: 1 } },
							{ name: "Terminator" + "4", offset: { x: 1, y: 0.5 } }
						]
					}
					]
				}
			]
		}
	}
});