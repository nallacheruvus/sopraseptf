const { creaBanAct } = require("./indexc");
const dl = require('./drawLine');
/***
 * 
 * Code showing the use of iterator with the Bankaccounts array
 */
const bArr = creaBanAct();
const itr = bArr[Symbol.iterator]();
for (let i = itr.next(); i.done !== true; i = itr.next()) {
    console.log(i.value.toString());
}
dl.drawLine();
bArr.forEach(n => {
    console.log(n.toString());
});
dl.drawLine();
for (const k in bArr) {
    console.log(bArr[k].toString());
}
dl.drawLine();
for (const i of bArr) {
    console.log(i.toString());
}
dl.drawLine();
bArr.map(n => {
    console.log(n.toString());
});
dl.drawLine();
for (let i = 0; i < bArr.length; i++) {
    console.log(bArr[i].toString());
}
dl.drawLine();
console.table(bArr);
dl.drawLine();
bArr.forEach(n => {
    console.table(n)
});
dl.drawLine();
console.log(JSON.stringify(bArr));
dl.drawLine();
/***
 * Generator function to iterate through bArr
 * 
 */
let len = bArr.length;
function* bArrGen() {
    let i = 0;
    while (i < len) {
        yield bArr[i].toString();
        i += 1;
    }
}
dl.drawLine();
let myVar = bArrGen();
for (let i = myVar.next(); i.done !== true; i = myVar.next()) {
    console.log(i.value);
}
dl.drawLine();
console.table({ "": "__________" });
/***
 * Using an iterator inside a generator for iterating
 * over the array of bank accounts
 */
function* bArrGenA() {
    let itr = bArr[Symbol.iterator]();
    for (let j = itr.next(); j.done !== true; j = itr.next()) {
        yield j.value.toString();
    }
}
let bArra = bArrGenA();
for (let i = bArra.next(); i.done !== true; i = bArra.next()) {
    console.log(i.value);
}
dl.drawLine();
/***
 * Reverse iterator
 */
const cArr = bArr.reverse();
const rItr = cArr[Symbol.iterator]();
for (let i = rItr.next(); i.done !== true; i = rItr.next()) {
    console.log(i.value.toString());
}
