const TXO = require("./TXO");

class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs
        this.outputUTXOs = outputUTXOs
    }
    execute() {
        for (let i = 0; i < this.inputUTXOs.length; i++) {
            if (this.inputUTXOs[i].spent) {
                throw new Error('UTXO already spent')
            }
        }

        const inputAmount = this.inputUTXOs.reduce((p, c) => {
            return p + c.amount;
        }, 0);
        const outputAmount = this.outputUTXOs.reduce((p, c) => {
            return p + c.amount;
        }, 0);
        if (inputAmount < outputAmount) {
            throw new Error("Not enough here");
        }

        for (let i = 0; i < this.inputUTXOs.length; i++) {
            this.inputUTXOs[i].spend()
        }

        this.fee = (inputAmount - outputAmount)
    }
}

module.exports = Transaction;