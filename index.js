const Web3 = require('web3')
const cfg = require('./config/cfg.js')

const network = 'Avalanche'



async function main(){
    const url = cfg[network].url
    let web3 = new Web3(url)

    let lastBlockNumber = await web3.eth.getBlockNumber()
    console.log("lastBlockNumber:", lastBlockNumber)

    let fromBlockNumber = lastBlockNumber - 10000

    while(true) {
        let block = await web3.eth.getBlock(fromBlockNumber, true)
        console.log("block:", block.transactions.length)
        for(let i=0; i<block.transactions.length; i++) {
            //console.log("tx:", i, block.transactions[i])
        }
        console.log("time:", parseInt(Date.now()/1000), fromBlockNumber)
        fromBlockNumber++
    }
}


main()