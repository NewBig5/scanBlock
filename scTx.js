const ethers = require('ethers')
const abi = require('./abi/smg.json')


const scAddr = '0x1E7450D5d17338a348C5438546f0b4D0A5fbeaB6'
const url = "http://127.0.0.1:26891"


const firstBlock = 35015212

async function main() {
    let httpProvider = new ethers.providers.JsonRpcProvider(url)


    for(let i=firstBlock; i>firstBlock-10000000; i--) {
        let block = await httpProvider.getBlockWithTransactions(i)
        // console.log("block:", i)
    
        for(let k=0; k<block.transactions.length; k++) {
            let tx = block.transactions[k]
            // console.log('tx:', tx)
            if(tx.to == scAddr && tx.data == '0xd7bb99ba'){
                console.log("tx:", tx)
            }
        }
    }

}



main();