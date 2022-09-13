require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strike deny trumpet column install flower army giant'; 
let testAccounts = [
"0x8fc4e7dca5000bc17c08b6b5e7ab3638bb39c2fe4cd01e18d05b13853f820c3c",
"0xe2dd24cb7d565b2b0dfa4fc9732348255ca38ab1ee293900054858d50ca9fd3d",
"0xe57331b80ac81bba2e93f19e1c0e3faf5d7e807d913a511531588d0ccc5f111c",
"0x731bfdb8d6740d676d3863b9e9b951d80ae2a4e86e6df04d708fd1959b486075",
"0xda534038ef50a43062997eef9ea8e308ffd85ae3af0f46b70702cb2ac2201b19",
"0x75237fa605706468749c08b10277425e68df1ed5815da390289b0282272540b6",
"0x117066fb8fbc2df97327b5f4fdf22022f44b86ebafa6358dea816bb2220aa0f9",
"0x2816123996b55ddb1571f60dd0a9688152208d6df8d6e964e790289d50cd2171",
"0xb9efc01041a8e2a7165aa253050e626f2ca19b8390222f7bfe3c8f032db27e83",
"0xb4ffc158d37b735b2587ad7f098bc002d72f2f589d25cc306e6fe0e7b06d25f7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

