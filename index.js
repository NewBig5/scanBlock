const Web3 = require('web3')
const cfg = require('./config/cfg.js')

const network = 'Wanchain'


const burst = 10000
const funcPre = '0x15f014ee'
async function main(){
    const url = cfg[network].url
    let web3 = new Web3(url)

    let lastBlockNumber = await web3.eth.getBlockNumber()
    console.log("lastBlockNumber:", lastBlockNumber)
	lastBlockNumber = 20000000

    let fromBlockNumber =  11284537
    let toAddr = '0x1E7450D5d17338a348C5438546f0b4D0A5fbeaB6'

    while(true) {
        let blockPS = []
        let blocks = []
            console.log("lastBlockNumber:", lastBlockNumber)
            if(lastBlockNumber < fromBlockNumber) return
        for(let k=0; k<burst; k++) {
            let blockp =  web3.eth.getBlock(lastBlockNumber, true)
            lastBlockNumber--
            blockPS.push(blockp)
        }
        blocks = await Promise.all(blockPS)
        for(let k=0; k<burst; k++) {
            let block = blocks[k]
            //console.log("block:", block.transactions.length)
            for(let i=0; i<block.transactions.length; i++) {
//                console.log("tx:", i, block.transactions[i])
                let tx = block.transactions[i]
                if(tx.to == toAddr ){
                	// console.log("tx.input:", tx.input)
                	if( tx.input && tx.input.startsWith(funcPre)){
                            console.log(tx.hash)
                	}
                }
            }
            //console.log("time:", parseInt(Date.now()/1000), block.number)
        }



    }
}


main()
