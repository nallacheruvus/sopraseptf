const { BankAccount } = require("./indexb");

function creaBanAct() {
    let arr1 = [21233, 434445, 76767673, 87744, 909089];
    let arr2 = ["James", "Sahil", "Ram", "Jeevan", "Raju"];
    let arr3 = ["ICICI", "HSBC", "LBC", "RBS", "HDFC"];
    let acArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let ba = new BankAccount(arr1[i], arr2[i], arr3[i]);
        acArr.push(ba);
    }
    return acArr;
}
module.exports.creaBanAct = creaBanAct;