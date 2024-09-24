/**
 * Proto Bank Account class with basic properties
 */
class BankAccount {
    constructor(acid, aname, abank) {
        this.acid = acid;
        this.aname = aname;
        this.abank = abank;
    }
    toString() {
        return `Id:${this.acid}\tName:${this.aname}\tBank:${this.abank}`;
    }
}
module.exports.BankAccount = BankAccount;