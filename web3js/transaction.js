const {Web3} = require('web3');
const web3 = new Web3("http://127.0.0.1:7545");

const acc1 = ''; #from account
const acc2 = ''; #to account

web3.eth.sendTransaction({
    'from': acc1,
    'to': acc2,
    'value': web3.utils.toWei('1', 'ether') #convert the amt from ether to wei
}).then(
    msg=>{
        console.log(msg);
    }
).catch(
    err=>{
        console.log('Transaction fail!');
        console.log(err);
    }
)