const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if(this.length === 0) {
            this._head = node;
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
        }
        this._tail=node;
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var k = 0;
        var result = null;
        var cur = this._head;

        while(cur !== null && k !== index) {
            cur = cur.next;
            k++;
        }
        if(cur !== null) {
            result = cur.data;
        }
        return result;
    }

    insertAt(index, data) {
        var node = new Node(data);
        var k = 0;
        var cur = this._head;

        while(cur !== null && k !== index) {
            k++;
            cur = cur.next;
        }
        if(cur !== null) {
            var temp = cur.prev;
            cur.prev= node;
            temp.next = node;
            node.next = cur;
            node.prev = temp;
        }
        return this;
    }

    isEmpty() {
        return this.length ===0;
    }

    clear() {
        if(this._head) {
            this._head.data = null;
        }
        if(this._tail) {
            this._tail.data = null;
        }
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var k = 0;
        var cur = this._head;
        var prevs = null;

        while(cur !== null && k !== index) {
            k++;
            prevs = cur;
            cur = cur.next;
        }
        if(prevs !== null) {
            if(cur.next === null) {
                this._tail = prevs;
            }
            else {
                cur.next.prev = prevs;
                cur.prev.next = cur.next;
            }
            this.length--;
        }
        else {
            if(this.length !== 0) {
                this._head = this._head.next;
                this.length--;
                if(this.length === 0) {
                    this._tail = null;
                }
                else {
                    this._head.prev = null;
                }
            }
        }
        return this;
    }

    reverse() {
        var temp;
        var cur = this._head;

        while(cur) {
            if(!cur.prev) {
                this._tail = cur;
            }

            temp = cur.next;
            cur.next = cur.prev;
            cur.prev = temp;

            if(!temp) {
                this._head = cur;
            }
            cur = temp;
        }
        return this;
    }

    indexOf(data) {
        var k = 0;
        var cur = this._head;

        while(cur !== null) {
            if(cur.data === data) {
                return k;
            }
            k++;
            cur = cur.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
