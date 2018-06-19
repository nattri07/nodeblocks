import Block from './block';
import cryptoJS from 'crypto-js';
import config from './config.json';

class Blockchain {
  constructor () {
    const genesisBlock = new Block(0, 0, 1527403272996, null, 1);
    this.chain = [];
    this.current_transactions = [];
    this.chain.push(genesisBlock);
  }

  newBlock (blockData, difficulty) {
    console.log("difficulty", difficulty);
    const nextIndex = this.chain.length;
    const previousHash = this.lastBlock().hash;
    const nextTimestamp = new Date().getTime();
    const block = new Block(
      nextIndex,
      previousHash,
      nextTimestamp,
      blockData,
      difficulty);
    this.chain.push(block);
    this.current_transactions = [];
    //push to sqs
  }

  newTransaction (data) {
    this.current_transactions.push(data);
    //send this to sqs.
  }

  lastBlock () {
    return this.chain.slice(-1)[0];
  }

  getChain() {
    return this.chain;
  }
  
}

module.exports = Blockchain
