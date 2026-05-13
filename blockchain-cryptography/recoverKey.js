const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const hashMsg = hashMessage(message)
    return secp.recoverPublicKey(hashMsg, signature, recoveryBit)
}

module.exports = recoverKey;