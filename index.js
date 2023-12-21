const Web3 = require('web3')
const cfg = require('./config/cfg.js')

const network = 'Avalanche'



async function main(){
    const url = cfg[network].url
    let web3 = new Web3(url)

    let lastBlockNumber = await web3.eth.getBlockNumber()
    console.log("lastBlockNumber:", lastBlockNumber)
}


main()