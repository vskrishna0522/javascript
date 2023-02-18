let kittu = { id:140, name:"krishna", year:2017} 
let sonali = {id:130, name:"sonali", year:2000}

let kittu_details = {...kittu, ...sonali}
console.log(kittu_details)