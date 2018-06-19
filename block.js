//Class of any block.

import cryptoJS from 'crypto-js';
import config from './config.json';

class Block {
  constructor(index, previousHash, timestamp, data, difficulty) {
    this.index = index;
    this.previousHash = previousHash.toString();
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
    this.magicStuff = 0;
    this.proofOfWork(difficulty);
  }

  calculateHash() {
    return cryptoJS.SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.magicStuff).toString();
  }

  proofOfWork(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")){
      this.magicStuff++;
      this.hash = this.calculateHash();
    }
  }

}

module.exports = Block;
