
const ethers = require('ethers')
const Ganache = require('ganache-core')

const PRIVATE_KEY = "0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d";
const INITIAL_BALANCE = ethers.utils.parseEther("10.10");

const balanceHexString =  INITIAL_BALANCE.toHexString();


// create our test account from the private key, initialize it with 10 ether
const accounts = [].concat([{
    balance: balanceHexString,
    secretKey: PRIVATE_KEY,
}]);

const ganacheProvider = Ganache.provider({ accounts });


module.exports = {
   balanceHexString,
    PRIVATE_KEY,
    ganacheProvider,
}