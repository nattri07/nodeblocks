//Class of any block.

class Block {
  constructor(index, previousHash, timestamp, data, hash, magicStuff) {
    this.index = index;
    this.previousHash = previousHash.toString();
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash.toString();
    this.magicStuff = magicStuff;
  }
}

module.exports = Block;
