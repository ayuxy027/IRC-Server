// We are defining the sum and sub functions in this module

function sum(a, b) {
    return a + b;
}

function sub(a, b){
    return a - b;
}

// We are exporting the sum and sub functions from this module
module.exports = 
{    sum,
     sub,
     math:{
        sum,
        sub
     } };
 
exports.sum = (a, b) => a + b;
exports.sub = (a, b) => a - b;
