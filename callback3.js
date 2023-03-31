let employees = [{SNO: 1, BIKENO: 9897 , BIKENAME:"BENELLI TNT 300", RIDERNAME: "SIDDARTH" },{SNO: 2, BIKENO: 2044 , BIKENAME:" KTM DUKE 390", RIDERNAME: "ROSHAN"},{SNO: 3, BIKENO: 2097 , BIKENAME:"BAJAJ RS 200", RIDERNAME: "KARTHICK"},{SNO: 4, BIKENO: 724 , BIKENAME:"BAJAJ NS 200", RIDERNAME: "HARI HARE SUDHANRAJ"},{SNO: 5, BIKENO: 8555 , BIKENAME:"BAJAJ NS 200", RIDERNAME: "SURYA"},{SNO:6, BIKENO: 522 , BIKENAME:"BENELLI CROSS GREEN NS 200", RIDERNAME: "KITTU"}]
let createemployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, 4000);
} 
let getemployees = () =>{
    setTimeout(() => {
            let rows = ""
            for (emp of employees ) {
                rows = rows + `<tr>
                                <td> ${emp.SNO} </td>
                                <td> ${emp.BIKENO} </td>
                                <td> ${emp.BIKENAME} </td>
                                <td> ${emp.RIDERNAME} </td>
                               </tr>`
            }
            document.getElementById('abc').innerHTML=rows
        }, 2000);
    }
    createemployee({SNO: 7, BIKENO: 2223, BIKENAME:"YAMAHA R3", RIDERNAME: "AJAI"  }, getemployees)