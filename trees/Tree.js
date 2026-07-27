class Tree {
    constructor() {
        this.root = null
    }

    addNode(node) {
        if (!this.root) {
            this.root = node
            return
        }

        let current = this.root

        while (true) {
            if (node.data > current.data) {
                if (!current.right) {
                    current.right = node
                    return
                }

                current = current.right
            } else {
                if (!current.left) {
                    current.left = node
                    return
                }

                current = current.left
            }
        }
    }

    hasNode(number) {
        let current = this.root

        while (current) {
            if (number === current.data) {
                return true
            }

            if (number > current.data) {
                current = current.right
            } else {
                current = current.left
            }
        }

        return false
    }
}

module.exports = Tree;
