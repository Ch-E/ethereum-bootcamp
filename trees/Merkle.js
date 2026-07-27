class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getProof(index) {
        const proof = [];
        let layer = this.leaves;
        let currentIndex = index;

        while (layer.length > 1) {
            const nextLayer = [];

            for (let i = 0; i < layer.length; i += 2) {
                if (i + 1 >= layer.length) {
                    nextLayer.push(layer[i]);
                    if (currentIndex === i) {
                        currentIndex = Math.floor(i / 2);
                    }
                } else {
                    const left = layer[i];
                    const right = layer[i + 1];

                    nextLayer.push(this.concat(left, right));

                    if (currentIndex === i) {
                        proof.push({ data: right, left: false });
                        currentIndex = Math.floor(i / 2);
                    } else if (currentIndex === i + 1) {
                        proof.push({ data: left, left: true });
                        currentIndex = Math.floor(i / 2);
                    }
                }
            }

            layer = nextLayer;
        }

        return proof;
    }
    getRoot() {
        let layer = this.leaves;

        while (layer.length > 1) {
            const nextLayer = [];

            for (let i = 0; i < layer.length; i += 2) {
                if (i + 1 >= layer.length) {
                    nextLayer.push(layer[i]);
                } else {
                    nextLayer.push(this.concat(layer[i], layer[i + 1]));
                }
            }

            layer = nextLayer;
        }

        return layer[0];
    }
}

module.exports = MerkleTree;