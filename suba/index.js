/*
Libs included:
		underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
	  
		Given object (data) below, containing list of nodes and 
		connectors holding mapping info between nodes
		Print the node names in seq.
*/


let data = {
	"nodes": [
		{ "id": 2, "name": "AUDIO" },
		{ "id": 3, "name": "SMS" },
		{ "id": 1, "name": "START" },
		{ "id": 4, "name": "DTMF" },
		{ "id": 5, "name": "END" }
	],
	"connectors": [
		{ "from": 3, "to": 5 },
		{ "from": 1, "to": 4 },
		{ "from": 4, "to": 2 },
		{ "from": 2, "to": 3 }
	]
};

const findConnectors = (connectors, node) => connectors.find(c => c.from === node.id);

function print_result() {
	const { nodes, connectors } = data;
	const nodeQueue = [];
	
	const firstNode = nodes.find(n => n.name == 'START');
	const firstNodeConnectors = findConnectors(connectors, firstNode);
	
	let currentNode = firstNode.id;
	nodeQueue.push(firstNode);

	for (const connector of connectors) {
		
	}
}

print_result();