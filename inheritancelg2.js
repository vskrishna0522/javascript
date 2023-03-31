class account{
    new_account(){
        console.log("union bank")
    }
}
class savacc extends account{
    minbal=1000
}
let s1 = new savacc
class cuuacc extends account{
    minbal = 2000
}
let c1 = new cuuacc
console.log(s1)
console.log(c1)