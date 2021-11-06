require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind hockey install clock off trouble'; 
let testAccounts = [
"0xdb6d5a800bc587de74391ca7b3359759004347d02af15e740c74e4d5bf28bb3d",
"0x765d6dd480f841c7b8a5c2f8c7504c28287c0842a67c15b176806b29d45e387d",
"0xc14a196ef71a1fb6b9d65bcbdc37b69eb7d442d9341b1a1598541c0f248b1412",
"0xcb5430ebdb5644726928ca0e7cf6ec4084b62ec4a7ce0e3deb98c37cb4cbbe56",
"0xd7b566ce8b99d1718a22b0417d463361060db39eb6555a6b5206ff2879a45107",
"0x3d3962b17d968d5051d8a7fbb2cdc02be9cb15acd492086d54c9a39617a22b5b",
"0x1ce00ee199c7e7712d02e9e03ccf5f805eb806b03b5414070d2d958f9c24476a",
"0xda33177e59b7ff44d46292d3763227f5c947c82d729469ce01c51553846644e4",
"0x1d80d12093c16f50b7bd27b5ab1c1a3e22c9c6caa081dc09e02cb0761b629cec",
"0x9e2b8c4f7dfb5d17023c98a95d117ab1b65f59f2d0efa89d3545c311110c410f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

