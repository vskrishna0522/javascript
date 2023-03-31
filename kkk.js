function wordCount(msg) {
    var new_Msg = msg.toUpperCase();
    return new_Msg.split(' ').length;
}
 let message = `one two threee four five and total is nine` 

let n = wordCount(message)

console.log(n)
