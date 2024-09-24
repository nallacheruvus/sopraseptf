/**
 * Abstract classes in JS
 */
class BasCls {
    constructor() {
        if (this.constructor === BasCls) {
            throw new Error("You cant create an object for abstract type");
        }
    }
    funa() {
        console.log("First Function");
    }
    funb() {
        console.log("Second Function");
    }
}

class ChdCls extends BasCls {
}
let chd = new ChdCls();
chd.funa();
chd.funb();
