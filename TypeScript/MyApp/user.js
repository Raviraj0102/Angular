let data1 ={id: 101,name:"raju"}; // object
console.log(typeof data1)
console.log(data1)
data1.salary = 30000; // we can add the filed dynamically
console.log(data1);

let employee={
    id : 1001,
    name : "ravi",
    email : "ravi@123",
    address:{

        stree : 'sadgur nagar',
        city : 'shegaon',
        state :'maharashtra'
    }
}

console.log(employee)
console.log(employee.address.stree)
console.log(employee.address.city)