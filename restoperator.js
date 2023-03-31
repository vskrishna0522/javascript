function add(a, ...b){
    let total = 0
    for (Element of b) {
        total = total + Element
    }
    console.log(total + a)
}
add(100,200)
add(300,400,500)
