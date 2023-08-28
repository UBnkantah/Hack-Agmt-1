
const ganacheProvider = require('../config')
const ethers = require('ethers')
const {utils, providers, Wallet } = ethers
const Ganache = require('ganache-core')
const {sendEther} = require('../utils')
const {PRIVATE_KEY} = require('../utils')


const express = require('express');

const cors = require('cors');


const provider = new providers.Web3Provider(ganacheProvider.ganacheProvider);
const wallet = new Wallet(ganacheProvider.PRIVATE_KEY, provider);
console.log(typeof wallet.address)

// Create an instance of Express
const app = express();



// Enable CORS and parse request body
app.use(cors());
app.use(express.json()); // Use JSON instead of urlencoded
app.use(express.urlencoded({extended:true}))

// Define a route
app.get('/blockhash', (req, res) => {
    res.send('Hello, Express!');
});

app.post('/sendTransaction', async (request, response) => {
    
    console.log('value,',request.body)
    
    try {
       const tx =  await sendEther(request.body.value, request.body.wallet);
        response.status(200).json(tx)
    } catch (error) {
        console.error('Error sending transaction:', error);
        response.status(500).send('Error sending transaction');
    }
});

// Start the server
const PORT = 3000; // You can choose any available port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
