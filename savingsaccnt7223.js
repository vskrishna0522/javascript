var account = require('./accounts')
class SA extends account {
    constructor(id, name, amount) {
        super(id, name);
        this.acc_amount = amount
    }
    deposit_amount(da){
        this.acc_amount = this.acc_amount + da
    }
}
let a1 = new SA(101, "rahul", 5000)
a1.open_account()
console.log(a1)
a1.deposit_amount(485555)
console.log(a1)
