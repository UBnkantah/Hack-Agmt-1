const ganacheProvider = require('./config')
const ethers = require('ethers')
const {utils, providers, Wallet } = ethers
const {PRIVATE_KEY} = require("./config")
const Ganache = require('ganache-core')






const {utils:{parseEther}} = ethers
const provider = new providers.Web3Provider(ganacheProvider.ganacheProvider);
const wallet = new Wallet(ganacheProvider.PRIVATE_KEY, provider);


const sendEther = async (etherAmount, walletAddress = wallet.address )=> {
    console.log(walletAddress, 'in utils')
    // Connect to a local Ganache provider


  

    const transaction = {
        to: walletAddress,
        value: parseEther('0.01'),
        gasLimit: 21000,
    };
    

    try {
     
        const txResponse = await wallet.sendTransaction(transaction);
     
     
const txBlock = await txResponse.wait(1)
console.log(txBlock)
return txBlock




      
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

module.exports = {sendEther}