const ethers = require('ethers')
const abi = require('./abi/smg.json')


const scAddr = '0x1E7450D5d17338a348C5438546f0b4D0A5fbeaB6'
// const url = "http://127.0.0.1:26891"
const url = "http://127.0.0.1:9921"


async function main1() {
    let httpProvider = new ethers.providers.JsonRpcProvider(url)
    const sc = new ethers.Contract(scAddr, abi, httpProvider)
    // let filter = sc.filters.AddAdmin()
    // let logs = await sc.queryFilter(filter, 11284537, 'latest')
    // console.log("logs:", logs)

    let info = await sc.getGlobalIncentive({blockTag:3000000})  // {blockTag:2000000}
    console.log("info:", info)
}

async function main() {
    let httpProvider = new ethers.providers.JsonRpcProvider(url)
    let blockNumber = await httpProvider.getBlockNumber();
    console.log("blockNumber:", blockNumber)
}


main();