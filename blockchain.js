import Block from './block';
import cryptoJS from 'crypto-js';

class Blockchain {
  constructor () {
    const genesisBlock = new Block(0, 0, 1527403272996, null, 'C69240790FAA1647ED9FEC3118EDCB74DF4705A6C4A295BBA01A46DFC57328AD');
    this.chain = [];
    this.current_transactions = [];
    this.chain.push(genesisBlock);
  }

  newBlock (blockData) {
    const nextIndex = this.chain.length;
    const previousHash = this.lastBlock().hash;
    const nextTimestamp = new Date().getTime();
    const block = new Block(
      nextIndex,
      previousHash,
      nextTimestamp,
      blockData,
      this.hash(nextIndex, previousHash, nextTimestamp, blockData));
    this.chain.push(block);
    //push to sqs
  }

  newTransaction (data) {
    this.current_transactions.push(data);
    //send this to sqs.
  }

  hash (nextIndex, previousHash, timestamp, blockData) {
    return cryptoJS.SHA256(nextIndex + previousHash + timestamp + blockData).toString();
  }

  lastBlock () {
    return this.chain.slice(-1)[0];
  }

  getChain() {
    return this.chain;
  }
}

module.exports = Blockchain
