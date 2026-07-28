function verifyProof(proof, node, root, concat) {
	let hash = node;

	for (let i = 0; i < proof.length; i++) {
		const step = proof[i];

		if (step.left) {
			hash = concat(step.data, hash);
		} else {
			hash = concat(hash, step.data);
		}
	}

	return hash === root;
}

module.exports = verifyProof;
