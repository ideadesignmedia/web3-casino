const testnet = false
const CHAIN_ID_KEY = 'chainId'
const walletConnectKey = 'wallet-connector'
const getChainNumber = chainId => chainId || Number(localStorage.getItem(CHAIN_ID_KEY)) || Number(window.ethereum?.chainId) || 42161
const ETHERSCAN = (chainId) => {
    switch (getChainNumber(chainId)) {
        case 1: return 'https://etherscan.io'
        case 1116: return 'https://scan.coredao.org'
        case 56: return 'https://bscscan.com'
        case 5: return 'https://goerli.etherscan.io'
        case 280: return 'https://goerli.explorer.zksync.io/'
        case 324: return 'https://explorer.zksync.io/'
        case 42161: return 'https://arbiscan.io/'
        case 421613: return 'https://goerli-rollup.arbitrum.io/rpc'
        case 11155111: return 'https://ethereum-sepolia.blockpi.network/v1/rpc/public' || 'https://sepolia.gateway.tenderly.co' || 'https://rpc.sepolia.org'
        default: return 'https://goerli-rollup.arbitrum.io/rpc'
    }
}
const rpc = (chainId) => {
    switch (getChainNumber(chainId)) {
        case 1: return 'https://eth-mainnet.public.blastapi.io'
        case 1116: return 'https://rpc.coinbook.app'
        case 56: return 'https://bsc-dataseed1.defibit.io'
        case 280: return 'https://testnet.era.zksync.dev'
        case 324: return 'https://mainnet.era.zksync.io'
        case 42161: return 'https://arb1.arbitrum.io/rpc'
        case 421613: return 'https://goerli-rollup.arbitrum.io/rpc'
        case 11155111: return 'https://sepolia.etherscan.io/'
        default: return 'https://goerli-rollup.arbitrum.io/rpc'
    }
}
const ENS_CONTRACT = (chainId) => {
    switch (getChainNumber(chainId)) {
        case 1: return '0x5982ce3554b18a5cf02169049e81ec43bfb73961'
        case 56: return '0x93600cEc0Ba5717A14fE0604081a53937EFbA841'
        case 42161: return '0xfea31d704deb0975da8e77bf13e04239e70d7c28'
        case 11155111: return '0xB72E9BC2e4697e6A13002F29c6909b8A720D60B7'
        default: return '0xfea31d704deb0975da8e77bf13e04239e70d7c28'
    }
}
const ENS_PREFIX = (chainId) => {
    switch (getChainNumber(chainId)) {
        case 1: return '0x55ea6c47000000000000000000000000'
        default: return '0x55ea6c47000000000000000000000000'
    }
}
const WRAPPED_CURRENCY_ADDRESS = (chainId) => {
    switch (getChainNumber(chainId)) {
        case 1116: return '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f'
        case 56: return '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
        case 5: return '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
        case 280: return '0x20b28B1e4665FFf290650586ad76E977EAb90c5D'
        case 324: return '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91'
        case 42161: return '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
        case 421613: return '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3'
        case 11155111: return '0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa'
        default: return '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3'
    }
}
const MULTICALL = (chainId) => {
    switch (getChainNumber(chainId)) {
        case 1: return '0xb0A452DcB9c7cC99bA6a16A0583b8e18e9D3A4c1'
        case 1116: return '0x69a9F6F39301fB07d60583a76ED32A8E3C32BC50'
        case 56: return '0xfF6FD90A470Aaa0c1B8A54681746b07AcdFedc9B'
        case 5: return '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e'
        case 42161: return '0x9FB9e16052c63561Fe423c0791A8De671321dBBa'
        case 421613: return '0x108B25170319f38DbED14cA9716C54E5D1FF4623'
        case 280: return '0x7eCfBaa8742fDf5756DAC92fbc8b90a19b8815bF'
        case 324: return '0x7eCfBaa8742fDf5756DAC92fbc8b90a19b8815bF'
        default: return '0x108B25170319f38DbED14cA9716C54E5D1FF4623'
    }
}
const ETHER_SYMBOL = (chainId) => {
    switch (getChainNumber(chainId)) {
        case 1: return 'ETH'
        case 1116: return 'CORE'
        case 56: return 'BNB'
        case 97: return 'BNB'
        case 5: return 'GOR'
        case 280: return 'ETH'
        case 324: return 'ETH'
        case 42161: return 'ETH'
        case 421613: return 'ETH'
        case 11155111: return 'ETH'
        default: return 'ETH'
    }
}
const ETHER_NAME = (chainId) => {
    switch (getChainNumber(chainId)) {
        case 1: return 'Ethereum'
        case 1116: return 'CORE'
        case 56: return 'Binance Smart Coin'
        case 97: return 'Binance Smart Coin'
        case 5: return 'Goerli Ether'
        case 280: return 'Ethereum'
        case 324: return 'Ethereum'
        case 42161: return 'Ethereum'
        case 421613: return 'Ethereum'
        case 11155111: return 'Ethereum'
        default: return 'Ethereum'
    }
}
const WRAPPED_SYMBOL = (chainId) => {
    switch (getChainNumber(chainId)) {
        case 1: return 'WETH'
        case 1116: return 'WCORE'
        case 56: return 'WBNB'
        case 97: return 'WBNB'
        case 5: return 'WETH'
        case 280: return 'WETH'
        case 324: return 'WETH'
        case 42161: return 'WETH'
        case 421613: return 'WETH'
        case 11155111: return 'WETH'
        default: return 'WETH'
    }
}
export default {
    api: '',
    testnet,
    infura: '',
    projectId: '',
    ETHERSCAN,
    rpc,
    CHAIN_ID_KEY,
    getChainId: getChainNumber,
    ENS_CONTRACT,
    ENS_PREFIX,
    WRAPPED_CURRENCY_ADDRESS,
    MULTICALL,
    ETHER_SYMBOL,
    WRAPPED_SYMBOL,
    ETHER_NAME,
    walletConnectKey,
    availableChains: [42161, 421613, 5, 1116, 56, 97, 1,  11155111]
}