ganache sets up a local blockchain


to create a wallet we can use a mneumonic to create a private key and then connect it to the blockchain provider  OR we can use the Wallet constructor to create a wallet 


const ganacheProvider = require('../config')
const ethers = require('ethers')
const {utils, providers, Wallet } = ethers
const Ganache = require('ganache-core')
const {sendEther} = require('../utils')


# Hack-Agmt-1
