const {sendEther} = require('./utils')
const ganacheProvider = require('./config')
const ethers = require('ethers')
const {utils, providers, Wallet } = ethers
const {PRIVATE_KEY} = require('./config')

const Ganache = require('ganache-core')





const {utils:{parseEther}} = ethers
const provider = new providers.Web3Provider(ganacheProvider.ganacheProvider)



const wallet = new Wallet(ganacheProvider.PRIVATE_KEY,provider)


// const wall2 =  Wallet.fromPhrase("plate lawn minor crouch bubble evidence palace fringe bamboo laptop dutch ice")
// console.log(wall2);



// Create a new Ganache server instance
const server = Ganache.server();




// Start the server
server.listen(8545, (err, blockchain) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Ganache server listening on port 8545');

        // You can now interact with the blockchain programmatically
        // For example, you can use web3.js or ethers.js to connect and interact
    }
});

