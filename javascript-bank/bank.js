/* exported Bank */
// Assume Account is already defined, access with Account

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var z = 0; z < this.accounts.length; z++) {
    if (this.accounts[z].number === number) {
      return this.accounts[z];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;
  for (var p = 0; p < this.accounts.length; p++) {
    grandTotal += this.accounts[p].getBalance();
  }
  return grandTotal;
};
