//developed first in repl.it

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }

  dequeue() {
    if (this.length === 0) {
      return null
    }

    if (this.first === this.last) {
      this.last = null
    }
    let holdValue = this.first.value
    this.first = this.first.next
    this.length--
    return holdValue
  }

  //isEmpty;
}

const myQueue = new Queue()

console.log(myQueue.enqueue('Joy'))
console.log(myQueue.enqueue('Alfred'))
console.log(myQueue.enqueue('Alice'))

console.log(myQueue.dequeue())
//Joy
//Matt
//Pavel
//Samir
