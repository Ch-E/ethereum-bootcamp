const Block = require('./Block');

class Blockchain {
    constructor() {
        const block = new Block();
        this.chain = [block];
    }

    addBlock(block) {
        block.previousHash = this.chain.at(-1).toHash();
        this.chain.push(block)
    }
}

module.exports = Blockchain;