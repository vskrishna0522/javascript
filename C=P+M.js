class account{
  opening_balance=1000;
      open_account(){
        console.log("account opened sucessfully")
        console.log("your minbalance is: ",this.opening_balance)
      } 
}
let c1 = new account(100000, "kittu", 5000 );
c1.open_account()