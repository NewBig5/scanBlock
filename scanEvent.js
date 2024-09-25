const ethers = require('ethers')
const abi = require('./abi/smg.json')


const scAddr = '0x1E7450D5d17338a348C5438546f0b4D0A5fbeaB6'
const url = "https://gwan-ssl.wandevs.org:56891"


async function main() {
    let httpProvider = new ethers.providers.JsonRpcProvider(url)
    const sc = new ethers.Contract(scAddr, abi,httpProvider)
    let filter = sc.filters.AddAdmin()
    let logs = await sc.queryFilter(filter, 11284537, 'latest')
    console.log("logs:", logs)
}



main();