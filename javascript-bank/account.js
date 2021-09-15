/* exported Account */


//number = Unique bank number, 
//holder = String name of person
function Account(number, holder){
    this.number = number;
    this.holder = holder;
    this.transactions = [];
}

//Prototype method that creates a new transaction object with type "deposit" and an amount parameter. Only works with real numbers above 0.
Account.prototype.deposit = function(amount){
    //Check if amount is positive AND an INTEGER
    console.log("deposit amount: ", amount);
    console.log("deposit amount is integer:", Number.isInteger(amount))
    if (amount > 0 && Number.isInteger(amount)){
        this.transactions.push(new Transaction('deposit', amount))
        return true;
    } else {
     return false;
    }
}

//Proto method that creates a new transaction object with type withdrawal and an amount parameter. 
Account.prototype.withdraw = function(amount){
    console.log("withdraw amount: ", amount);
    console.log("withdraw amount is integer:", Number.isInteger(amount))
    if (amount > 0 && Number.isInteger(amount)){
        this.transactions.push(new Transaction('withdrawal', amount))
        return true;
    } else {
        return false;
    }
}

//If the objects we created above have types withdrawal or anything else, we sum all of it.
//Also, if the length is 0, just return 0.
Account.prototype.getBalance = function(){
    var balance = 0;
    if (this.transactions.length === 0){
        return 0;
    }
    for (var i = 0; i < this.transactions.length; i++){
        if (this.transactions[i].type === "withdrawal"){
            balance -= this.transactions[i].amount
        } else {
            balance += this.transactions[i].amount
        }
    }
    return balance;
}