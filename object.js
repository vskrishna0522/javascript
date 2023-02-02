class amount{
    min_bal = 1000
    open_account(){
     console.log("new account")
    }
    old_account(){
        console.log("old account")
    }
}
let a1 = new amount()
let b1 = new amount()
console.log(a1.min_bal)
a1.open_account()
b1.old_account()


