const Block = require('./Block');

class Blockchain {
    constructor() {
        const block = new Block();
        this.chain = [block];
    }
}

module.exports = Blockchain;