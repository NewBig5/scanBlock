const Web3 = require('web3')
const cfg = require('./config/cfg.js')

const network = 'Avalanche'


const burst = 10
async function main(){
    const url = cfg[network].url
    let web3 = new Web3(url)

    let lastBlockNumber = await web3.eth.getBlockNumber()
    console.log("lastBlockNumber:", lastBlockNumber)

    let fromBlockNumber = lastBlockNumber - 10000

    while(true) {
        let blockPS = []
        let blocks = []
        for(let k=0; k<burst; k++) {
            let blockp =  web3.eth.getBlock(fromBlockNumber, true)
            fromBlockNumber++
            blockPS.push(blockp)
        }
        blocks = await Promise.all(blockPS)
        for(let k=0; k<burst; k++) {
            let block = blocks[k]
            console.log("block:", block.transactions.length)
            for(let i=0; i<block.transactions.length; i++) {
                //console.log("tx:", i, block.transactions[i])
            }
            console.log("time:", parseInt(Date.now()/1000), block.number)
        }



    }
}


main()