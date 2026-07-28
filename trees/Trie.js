const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode('')
    }

    insert(word) {
        let current = this.root

        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode(char)
            }

            current = current.children[char]
        }

        current.isWord = true
    }

    contains(word) {
        let current = this.root

        for (const char of word) {
            if (!current.children[char]) {
                return false
            }

            current = current.children[char]
        }

        return current.isWord
    }
}

module.exports = Trie;