import Block from 'block';

class Blockchain {
  constructor () {
    const genesisBlock = new Block(0, 0, 1527403272996, null, 'C69240790FAA1647ED9FEC3118EDCB74DF4705A6C4A295BBA01A46DFC57328AD');
    this.chain = [];
    this.current_transactions = [];
    chain.push(genesisBlock);
    // this.newBlock = this.newBlock.bind(this)
    // this.newTransaction = this.newTransaction.bind(this)
    // this.lastBlock = this.lastBlock.bind(this)
    // this.proofOfWork = this.proofOfWork.bind(this)
  }

  newBlock () {
    // Date().getTime() / 1000;
  }

  newTransaction () { /* Store a new transaction */ }

  hash (block) { /* hash the block */ }

  lastBlock () { /* return the last block */}
}

module.exports = Blockchain
