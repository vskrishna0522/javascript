class union{
    constructor(bujji, peiru, mail){
        this.bujji = bujji
        this.peiru = peiru
        this.mail = mail
    }
}
class bank extends union{
    constructor(avan_area){
        super(union)
        this.avan_area = avan_area
    }
}
let s1 = new bank("555","gajii","jjgdd@gmail.com","hasthampatty")
console.log(s1)