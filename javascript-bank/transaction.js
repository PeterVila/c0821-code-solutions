/* exported Transaction */

//Creates an object with "withdrawal/Deposit" for type and amount we work with.
function Transaction(type, amount){
    this.type = type
    this.amount = amount;
}

