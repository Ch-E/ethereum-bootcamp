const { assert } = require('chai');
const findColor = require('./index');
const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

describe('findColor', () => {
    COLORS.forEach((color) => {
        it(`should work for ${color}`, () => {
            assert.equal(findColor(toHex(sha256(utf8ToBytes(color)))), color);
        });
    });
});