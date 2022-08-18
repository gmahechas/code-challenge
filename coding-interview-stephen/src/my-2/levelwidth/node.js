module.exports = class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addMany(data) {
    this.children.push(...data);
  }
  
  add(data) {
    this.children.push(new Node(data));
  }
};
