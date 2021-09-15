/* exported Bank */
//Assume Account is already defined, access with Account

function Bank(){
    this.nextAccountNumber = 1; //Account number
    this.accounts = [] //Array of all accounts
}

//Prototype method to open account, given name and a balance
Bank.prototype.openAccount = function(holder, balance){
    if (balance > 0 && Number.isInteger(balance)){
        //Using function Account(number, holder) to create a NEW instance
        var newAccount = new Account(this.nextAccountNumber, holder)
        //Run the prototype method "deposit" for balance (also signaling type)
        newAccount.deposit(balance);
        //Pushing this newly made account to our array 
        this.accounts.push(newAccount);
        this.nextAccountNumber++
        console.log("New Account Objects:", newAccount);
        return newAccount.number //Returns if successful
    } else {
        return null;
    }
}

Bank.prototype.getAccount = function(number){
    //Loop through all accounts and finds the matching account
    for (var z = 0; z < this.accounts.length; z++){
        if (this.accounts[z].number === number){
            return this.accounts[z]
        } 
    } 
    return null;
}

Bank.prototype.getTotalAssets = function(){
    //Grand total of all bank accounts. Loop through all this.accounts and use the prototype method getBalance() and add it to our grandTotal.
    var grandTotal = 0;
    for (var p = 0; p < this.accounts.length; p++){
        console.log("getBalance", this.accounts[p].getBalance())
        grandTotal += this.accounts[p].getBalance();
    }
    return grandTotal;
}