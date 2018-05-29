import Block from './block';
import cryptoJS from 'crypto-js';

class Blockchain {
  constructor () {
    const genesisBlock = new Block(0, 0, 1527403272996, null, 'C69240790FAA1647ED9FEC3118EDCB74DF4705A6C4A295BBA01A46DFC57328AD');
    this.chain = [];
    this.current_transactions = [];
    this.chain.push(genesisBlock);
    console.log(this.chain);
    // this.newBlock = this.newBlock.bind(this)
    // this.newTransaction = this.newTransaction.bind(this)
    // this.lastBlock = this.lastBlock.bind(this)
    // this.proofOfWork = this.proofOfWork.bind(this)
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
  }

  newTransaction () { /* Store a new transaction */ }

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

let abc = new Blockchain;

abc.newBlock(`return some shit`);

console.log(abc.getChain());



module.exports = Blockchain
