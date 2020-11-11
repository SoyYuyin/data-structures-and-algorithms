// add a method insert() to the linked list that adds a node to the specified index.

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }
  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
      return this.printList()
    }
    if (index <= this.length) {
      let pre = this.head
      while (index - 1 > 0) {
        pre = pre.next
        index--
      }
      let aft = pre.next

      const node = {
        value: value,
        next: aft,
      }

      pre.next = node
    }
    return this.printList()
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next
      return this.printList()
    }
    if (index <= this.length) {
      let pre = this.head
      while (index - 1 > 0) {
        pre = pre.next
        index--
      }
      let del = pre.next
      let aft = del.next
      pre.next = aft
    }
    return this.printList()
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.remove(0)
