const Block = require('./Block');

class Blockchain {
    constructor() {
        const block = new Block();
        this.chain = [block];
    }

    addBlock(Block) {
        this.chain.push(Block)
    }
}

module.exports = Blockchain;