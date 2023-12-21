
module.exports = {
    network:'WanchainTestnet',
    "Wanchain":{
      url: "https://gwan-ssl.wandevs.org:56891",
      networkId:888,
      chainId: 1,
      multicallAddr: "0xCBE1597E09259e61680A1474850e7fd3E30Ace49",  
      uniswapV2FactoryAddr: '0x1125C5F53C72eFd175753d427aA116B972Aa5537',  
      uniswapV2RouteAddr: '0xeA300406FE2eED9CD2bF5c47D01BECa8Ad294Ec1',  
      ProxySwap: "0x3692A0D8A104fBb1d298c267f597C35d9BF05B3D",
      compTrollAddr: "0xd6980C52C20Fb106e54cC6c8AE04c089C3F6B9d6",
      PriceOracleProxy:  "0x66a4Cc5E105CA8847f012b2B06635Fb7E8c61b17",
      storemanOracleAddr: "0xa2b6CFAE041371A30bED5f2092393f03D6dCDEEc", // two way price oracle
    },
    "WanchainTestnet" : {
      url: "https://gwan-ssl.wandevs.org:46891",
      networkId:999,
      chainId: 3,
      multicallAddr: "0xc2C22e29f931A2A75D8Bf3006c30C00aB41e45da",  
      uniswapV2FactoryAddr: '0x1125C5F53C72eFd175753d427aA116B972Aa5537',  
      uniswapV2RouteAddr: '0xeA300406FE2eED9CD2bF5c47D01BECa8Ad294Ec1',  
      ProxySwap: "0x3f2a4c5e4D06848065Fa9a70f30a53dCe7B1b03C",
    },
    "Goerli":{
      url: "https://goerli.blockpi.network/v1/rpc/public",
    },
    "coston":{
      url: "https://coston-api.flare.network/ext/C/rpc",
    },
    "Fuji":{
      url: "https://api.avax-test.network/ext/bc/C/rpc",
    },
    'Avalanche':{
      url:"https://avalanche-c-chain.publicnode.com",
    },
  }
    
  