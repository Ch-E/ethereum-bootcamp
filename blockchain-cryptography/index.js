const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    const hashHex = typeof hash === 'string' ? hash : toHex(hash);

    for (const color of COLORS) {
        const colorHash = sha256(utf8ToBytes(color));
        if (toHex(colorHash) === hashHex) {
            return color;
        }
    }

    return "no color found for provided hash";
}

module.exports = findColor;