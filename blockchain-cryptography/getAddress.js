const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const sliced = publicKey.slice(1)
    const keyHash = keccak256(sliced)
    return keyHash.slice(-20)
}

module.exports = getAddress;